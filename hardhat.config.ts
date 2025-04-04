import { config as dotEnvConfig } from 'dotenv';

//import '@nomiclabs/hardhat-waffle';
import './tasks/accounts';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-web3';
import './tasks/faucet';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';
import '@primitivefi/hardhat-dodoc';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-abi-exporter';
import '@nomicfoundation/hardhat-chai-matchers';

dotEnvConfig();
const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
};

const config: any = {
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      default: 1,
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
    excludeContracts: [],
    src: './contracts',
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  dodoc: {
    runOnCompile: false,
    include: [], // default
    exclude: ['contracts/tests', 'contracts/shared', 'console'],
    outputDir: 'docs', // default
    templatePath: 'doc-template.sqrl',
    debugMode: false, // default
    keepFileStructure: true, // default
    freshOutput: true, // default
  },
  solidity: {
    typechain: {
      outDir: 'typechain',
      target: 'ethers-v5',
    },
    compilers: [
      {
        version: '0.8.14',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {},
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts,
    },
    localhost: {
      accounts,
    },
    goerli: {
      accounts,
      url: 'https://eth-goerli.public.blastapi.io',
      chainId: 5,
    },
    sepolia: {
      accounts,
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      chainId: 11155111,
    },
    polygon_mumbai: {
      accounts,
      //url: 'https://rpc-mumbai.maticvigil.com/',
      url: 'https://polygon-mumbai.blockpi.network/v1/rpc/public',
      chainId: 80001,
    },
    bkc: {
      accounts,
      url: 'https://rpc.bitkubchain.io',
      chainId: 96,
    },
    bkc_testnet: {
      accounts,
      url: 'https://rpc-testnet.bitkubchain.io',
      chainId: 25925,
    },
    taiko: {
      url: 'https://rpc.test.taiko.xyz',
      accounts: accounts,
      chainId: 167005,
    },
    base_testnet: {
      url: 'https://sepolia.base.org',
      accounts: accounts,
      chainId: 84532,
    },
    rootstock_testnet: {
      url: 'https://public-node.testnet.rsk.co',
      accounts: accounts,
      chainId: 31,
    },
    celo: {
      url: 'https://forno.celo.org',
      accounts: accounts,
      chainId: 42220,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      sepolia: 'KBZ53MKPP551QTVDYSV8S961FEUC96F8QW',
      polygon_mumbai: 'FPHU3AFWJD2M3ECIKN61FPG1CIMN3IWF46',
      bkc_testnet: 'key',
      bkc: 'key',
      polygonMumbai: 'FPHU3AFWJD2M3ECIKN61FPG1CIMN3IWF46',
      rootstock_testnet: 'key',
      base_testnet: 'HWIGT6I8F9PZHQXKWM3WM57P4TFQC1ISWS',
      celo: 'PQ6KHZ9W2YZ7HI3KW651DIEMWS2HUEIXYN',
    },
    customChains: [
      {
        network: 'bkc_testnet',
        chainId: 25925,
        urls: {
          apiURL: 'https://testnet.bkcscan.com/api',
          browserURL: 'https://testnet.bkcscan.com/',
        },
      },
      {
        network: 'bkc',
        chainId: 96,
        urls: {
          apiURL: 'https://www.bkcscan.com/api',
          browserURL: 'https:///www.bkcscan.com/',
        },
      },
      {
        network: 'taiko',
        chainId: 167005,
        urls: {
          apiURL: 'https://explorer.test.taiko.xyz/api',
          browserURL: 'https://explorer.test.taiko.xyz',
        },
      },
      {
        network: 'base_testnet',
        chainId: 84532,
        urls: {
          apiURL: 'https://api-sepolia.basescan.org/api',
          browserURL: 'https://sepolia.basescan.org/',
        },
      },
      {
        network: 'rootstock_testnet',
        chainId: 31,
        urls: {
          apiURL: 'https://explorer.testnet.rootstock.io/api',
          browserURL: 'https://explorer.testnet.rootstock.io/',
        },
      },
      {
        network: 'celo',
        chainId: 42220,
        urls: {
          apiURL: 'https://api.celoscan.io/api',
          browserURL: 'https://celoscan.io/',
        },
      },
    ],
  },
};

export default config;
