// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const contractName = 'CounterService';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = async function ({ ethers, network, getNamedAccounts, deployments }) {
  const { provider } = ethers;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const balance = await provider.getBalance(deployer);
  console.log(`Remaining balance is: ${balance}`);

  const f3Deployment = await deployments.get('F3');
  const f3Address = f3Deployment.address;

  const usdcDeployment = await deployments.get('USDC');
  const usdcAddress = usdcDeployment.address;

  const chainId = network.config.chainId;
  const contract = await deploy(contractName, {
    from: deployer,
    args: [f3Address, usdcAddress],
    log: true,
    deterministicDeployment: false,
  });
  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');
};

module.exports.tags = [contractName];
module.exports.dependencies = ['F3', 'USDC'];
