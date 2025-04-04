import { CounterService } from '../../typechain-types/contracts/core/CounterService';
import { F3 } from '../../typechain-types/contracts/tokens/F3';
import { USDC } from '../../typechain-types/contracts/mock/USDC';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('CounterService', function () {
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let addrs: SignerWithAddress[];

  let counterService: CounterService;
  let f3: F3;
  let usdc: USDC;

  const INITIAL_F3_SUPPLY = ethers.utils.parseEther('1000000');
  const INITIAL_EXCHANGE_RATE = 10;
  const INITIAL_CONSULT_PRICE = ethers.utils.parseEther('1');
  const INITIAL_MINTING_PRICE = ethers.utils.parseEther('1');

  before(async function () {
    [owner, alice, bob, ...addrs] = await ethers.getSigners();
    // Deploy F3 token
    const f3Factory = await ethers.getContractFactory('F3');
    f3 = (await f3Factory.deploy()) as F3;
    await f3.deployed();

    // Deploy USDC token
    const usdcFactory = await ethers.getContractFactory('USDC');
    usdc = (await usdcFactory.deploy()) as USDC;
    await usdc.deployed();

    // Deploy CounterService
    const counterServiceFactory = await ethers.getContractFactory('CounterService');
    counterService = (await counterServiceFactory.deploy(f3.address, usdc.address)) as CounterService;
    await counterService.deployed();
  });

  describe('Deployment', function () {
    it('Should set the correct owner', async function () {
      expect(await counterService.owner()).to.equal(owner.address);
    });

    it('Should set the correct F3 token address', async function () {
      expect(await counterService.f3Token()).to.equal(f3.address);
    });

    it('Should set the correct USDC token address', async function () {
      expect(await counterService.usdcToken()).to.equal(usdc.address);
    });

    it('Should set the correct initial exchange rate', async function () {
      expect(await counterService.exchangeRate()).to.equal(INITIAL_EXCHANGE_RATE);
    });

    it('Should set the correct initial consult price', async function () {
      expect(await counterService.consultPrice()).to.equal(INITIAL_CONSULT_PRICE);
    });

    it('Should set the correct initial minting price', async function () {
      expect(await counterService.mintingPrice()).to.equal(INITIAL_MINTING_PRICE);
    });

    it('Should initialize receipt ID to 0', async function () {
      expect(await counterService.getCurrentReceiptId()).to.equal(0);
    });
  });

  describe('Exchange Rate Management', function () {
    it('Should allow owner to set exchange rate', async function () {
      const newRate = 20;
      await counterService.setExchangeRate(newRate);
      expect(await counterService.exchangeRate()).to.equal(newRate);
    });

    it('Should not allow non-owner to set exchange rate', async function () {
      const newRate = 30;
      await expect(counterService.connect(alice).setExchangeRate(newRate)).to.be.revertedWith(
        'Ownable: caller is not the owner',
      );
    });

    it('Should not allow setting exchange rate to zero', async function () {
      await expect(counterService.setExchangeRate(0)).to.be.revertedWithCustomError(
        counterService,
        'InvalidExchangeRate',
      );
    });
  });

  describe('Price Management', function () {
    it('Should allow owner to set prices', async function () {
      const newConsultPrice = ethers.utils.parseEther('2');
      const newMintingPrice = ethers.utils.parseEther('3');
      await counterService.setPrices(newConsultPrice, newMintingPrice);
      expect(await counterService.consultPrice()).to.equal(newConsultPrice);
      expect(await counterService.mintingPrice()).to.equal(newMintingPrice);
    });

    it('Should not allow non-owner to set prices', async function () {
      const newConsultPrice = ethers.utils.parseEther('4');
      const newMintingPrice = ethers.utils.parseEther('5');
      await expect(counterService.connect(alice).setPrices(newConsultPrice, newMintingPrice)).to.be.revertedWith(
        'Ownable: caller is not the owner',
      );
    });

    it('Should not allow setting prices to zero', async function () {
      await expect(counterService.setPrices(0, ethers.utils.parseEther('1'))).to.be.revertedWithCustomError(
        counterService,
        'InvalidPrice',
      );
      await expect(counterService.setPrices(ethers.utils.parseEther('1'), 0)).to.be.revertedWithCustomError(
        counterService,
        'InvalidPrice',
      );
    });
  });

  describe('Token Exchange', function () {
    const exchangeAmount = ethers.utils.parseEther('10');
    const expectedF3Amount = exchangeAmount.mul(INITIAL_EXCHANGE_RATE);

    beforeEach(async function () {
      // Reset exchange rate to initial value
      await counterService.setExchangeRate(INITIAL_EXCHANGE_RATE);

      // Approve USDC spending
      await usdc.approve(counterService.address, exchangeAmount);
    });

    it('Should exchange USDC for F3 tokens', async function () {
      const initialF3Balance = await f3.balanceOf(owner.address);

      await counterService.exchange(exchangeAmount);

      const finalF3Balance = await f3.balanceOf(owner.address);
      expect(finalF3Balance.sub(initialF3Balance)).to.equal(expectedF3Amount);
    });

    it('Should emit Exchange event', async function () {
      await expect(counterService.exchange(exchangeAmount))
        .to.emit(counterService, 'Exchange')
        .withArgs(owner.address, exchangeAmount, expectedF3Amount);
    });

    it('Should transfer USDC to the contract', async function () {
      const initialContractBalance = await usdc.balanceOf(counterService.address);

      await counterService.exchange(exchangeAmount);

      const finalContractBalance = await usdc.balanceOf(counterService.address);
      expect(finalContractBalance.sub(initialContractBalance)).to.equal(exchangeAmount);
    });
  });

  describe('Consultation Payment', function () {
    beforeEach(async function () {
      // Reset consult price to initial value
      await counterService.setPrices(INITIAL_CONSULT_PRICE, INITIAL_MINTING_PRICE);

      // Mint F3 tokens to alice
      await f3.mint(alice.address, INITIAL_CONSULT_PRICE);

      // Approve F3 spending
      await f3.connect(alice).approve(counterService.address, INITIAL_CONSULT_PRICE);
    });

    it('Should process consultation payment', async function () {
      const initialReceiptId = await counterService.getCurrentReceiptId();

      await counterService.connect(alice).payForConsult();

      const finalReceiptId = await counterService.getCurrentReceiptId();
      expect(finalReceiptId).to.equal(initialReceiptId.add(1));
    });

    it('Should emit ConsultPaid event', async function () {
      const receiptId = await counterService.getCurrentReceiptId();

      await expect(counterService.connect(alice).payForConsult())
        .to.emit(counterService, 'ConsultPaid')
        .withArgs(alice.address, receiptId.add(1));
    });

    it('Should transfer F3 tokens to the contract', async function () {
      const initialContractBalance = await f3.balanceOf(counterService.address);

      await counterService.connect(alice).payForConsult();

      const finalContractBalance = await f3.balanceOf(counterService.address);
      expect(finalContractBalance.sub(initialContractBalance)).to.equal(INITIAL_CONSULT_PRICE);
    });

    it('Should fail if user has insufficient F3 balance', async function () {
      // Set a higher price than alice has
      const highPrice = ethers.utils.parseEther('2');
      await counterService.setPrices(highPrice, INITIAL_MINTING_PRICE);

      await expect(counterService.connect(alice).payForConsult()).to.be.revertedWithCustomError(
        counterService,
        'InsufficientF3Balance',
      );
    });
  });

  describe('Minting Payment', function () {
    beforeEach(async function () {
      // Reset minting price to initial value
      await counterService.setPrices(INITIAL_CONSULT_PRICE, INITIAL_MINTING_PRICE);

      // Mint F3 tokens to bob
      await f3.mint(bob.address, INITIAL_MINTING_PRICE);

      // Approve F3 spending
      await f3.connect(bob).approve(counterService.address, INITIAL_MINTING_PRICE);
    });

    it('Should process minting payment', async function () {
      const initialReceiptId = await counterService.getCurrentReceiptId();

      await counterService.connect(bob).payForMinting();

      const finalReceiptId = await counterService.getCurrentReceiptId();
      expect(finalReceiptId).to.equal(initialReceiptId.add(1));
    });

    it('Should emit MintingPaid event', async function () {
      const receiptId = await counterService.getCurrentReceiptId();

      await expect(counterService.connect(bob).payForMinting())
        .to.emit(counterService, 'MintingPaid')
        .withArgs(bob.address, receiptId.add(1));
    });

    it('Should transfer F3 tokens to the contract', async function () {
      const initialContractBalance = await f3.balanceOf(counterService.address);

      await counterService.connect(bob).payForMinting();

      const finalContractBalance = await f3.balanceOf(counterService.address);
      expect(finalContractBalance.sub(initialContractBalance)).to.equal(INITIAL_MINTING_PRICE);
    });

    it('Should fail if user has insufficient F3 balance', async function () {
      // Set a higher price than bob has
      const highPrice = ethers.utils.parseEther('2');
      await counterService.setPrices(INITIAL_CONSULT_PRICE, highPrice);

      await expect(counterService.connect(bob).payForMinting()).to.be.revertedWithCustomError(
        counterService,
        'InsufficientF3Balance',
      );
    });
  });

  describe('Token Withdrawal', function () {
    it('Should allow owner to withdraw tokens', async function () {
      // First, send some tokens to the contract
      const withdrawAmount = ethers.utils.parseEther('10');
      await f3.mint(counterService.address, withdrawAmount);

      const initialOwnerBalance = await f3.balanceOf(owner.address);

      await counterService.withdraw(f3.address, owner.address, withdrawAmount);

      const finalOwnerBalance = await f3.balanceOf(owner.address);
      expect(finalOwnerBalance.sub(initialOwnerBalance)).to.equal(withdrawAmount);
    });

    it('Should emit Withdraw event', async function () {
      const withdrawAmount = ethers.utils.parseEther('5');
      await f3.mint(counterService.address, withdrawAmount);

      await expect(counterService.withdraw(f3.address, owner.address, withdrawAmount))
        .to.emit(counterService, 'Withdraw')
        .withArgs(f3.address, owner.address, withdrawAmount);
    });

    it('Should not allow non-owner to withdraw tokens', async function () {
      const withdrawAmount = ethers.utils.parseEther('10');
      await f3.mint(counterService.address, withdrawAmount);

      await expect(
        counterService.connect(alice).withdraw(f3.address, alice.address, withdrawAmount),
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it('Should not allow withdrawing zero amount', async function () {
      await expect(counterService.withdraw(f3.address, owner.address, 0)).to.be.revertedWithCustomError(
        counterService,
        'InvalidPrice',
      );
    });
  });
});
