/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CounterService,
  CounterServiceInterface,
} from "../../../contracts/core/CounterService";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_f3Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdcToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "F3TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientF3Balance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidExchangeRate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "USDCTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receiptId",
        type: "uint256",
      },
    ],
    name: "ConsultPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "f3Amount",
        type: "uint256",
      },
    ],
    name: "Exchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receiptId",
        type: "uint256",
      },
    ],
    name: "MintingPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "service",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "consultPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "f3Token",
    outputs: [
      {
        internalType: "contract F3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentReceiptId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payForConsult",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "payForMinting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setExchangeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_f3Token",
        type: "address",
      },
    ],
    name: "setF3Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_consultPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mintingPrice",
        type: "uint256",
      },
    ],
    name: "setPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdcToken",
        type: "address",
      },
    ],
    name: "setUSDCToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d4a380380610d4a83398101604081905261002f916100f4565b61003833610088565b60018055600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055600a6004556000600555670de0b6b3a76400006006819055600755610127565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100ef57600080fd5b919050565b6000806040838503121561010757600080fd5b610110836100d8565b915061011e602084016100d8565b90509250929050565b610c14806101366000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806381aedac1116100a2578063d9caed1211610071578063d9caed12146101ea578063db068e0e146101fd578063e05c041d14610210578063f2fde38b14610218578063f9b454b51461022b57600080fd5b806381aedac1146101b65780638da5cb5b146101be57806393cd7924146101cf578063b5e62249146101d757600080fd5b80633ba0b9a9116100de5780633ba0b9a91461017f578063535565591461018857806358a958e71461019b578063715018a6146101ae57600080fd5b806305fefda7146101105780630f5a9d011461012557806311eac8551461013857806335db70b514610168575b600080fd5b61012361011e366004610aa0565b610234565b005b610123610133366004610ade565b610312565b60035461014b906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61017160075481565b60405190815260200161015f565b61017160045481565b610123610196366004610b00565b61033c565b60025461014b906001600160a01b031681565b610123610488565b600554610171565b6000546001600160a01b031661014b565b61017161049c565b6101236101e5366004610ade565b61062e565b6101236101f8366004610b19565b610658565b61012361020b366004610b00565b610773565b6101716107a1565b610123610226366004610ade565b61091f565b61017160065481565b61023c61099d565b811580610247575080155b156102645760405162bfc92160e01b815260040160405180910390fd5b6006829055600781815560408051818152808201929092526618dbdb9cdd5b1d60ca1b606083015260208201849052517f159e83f4712ba2552e68be9d848e49bf6dd35c24f19564ffd523b6549450a2f49181900360800190a160408051818152600781830152666d696e74696e6760c81b60608201526020810183905290517f159e83f4712ba2552e68be9d848e49bf6dd35c24f19564ffd523b6549450a2f49181900360800190a15050565b61031a61099d565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6003546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b79190610b55565b6103d45760405163a55b288760e01b815260040160405180910390fd5b6000600454826103e49190610b8d565b6002546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561043157600080fd5b505af1158015610445573d6000803e3d6000fd5b505060408051858152602081018590523393507f26981b9aefbb0f732b0264bd34c255e831001eb50b06bc85b32cc39e1438972192500160405180910390a25050565b61049061099d565b61049a60006109f7565b565b60006104a6610a47565b6006546002546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156104f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105159190610bac565b101561053457604051633540763960e21b815260040160405180910390fd5b6002546006546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561058f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b39190610b55565b6105d057604051635501ea3160e01b815260040160405180910390fd5b600580549060006105e083610bc5565b909155505060055460405190815233907f12b19d7009204c23ccd823dd501dfb62d36e89fd8de324546f07649ebf26bb3c906020015b60405180910390a25060055461062b60018055565b90565b61063661099d565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61066061099d565b610668610a47565b806000036106885760405162bfc92160e01b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af11580156106d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fb9190610b55565b61071857604051631d42c86760e21b815260040160405180910390fd5b816001600160a01b0316836001600160a01b03167f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb8360405161075d91815260200190565b60405180910390a361076e60018055565b505050565b61077b61099d565b8060000361079c5760405163a2ec3a5560e01b815260040160405180910390fd5b600455565b60006107ab610a47565b6007546002546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156107f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081a9190610bac565b101561083957604051633540763960e21b815260040160405180910390fd5b6002546007546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610894573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b89190610b55565b6108d557604051635501ea3160e01b815260040160405180910390fd5b600580549060006108e583610bc5565b909155505060055460405190815233907f1a11c88a5d61618079bc3e405f135ba106edb7142983f62ed98b625b1d949b2290602001610616565b61092761099d565b6001600160a01b0381166109915760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61099a816109f7565b50565b6000546001600160a01b0316331461049a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610988565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600260015403610a995760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610988565b6002600155565b60008060408385031215610ab357600080fd5b50508035926020909101359150565b80356001600160a01b0381168114610ad957600080fd5b919050565b600060208284031215610af057600080fd5b610af982610ac2565b9392505050565b600060208284031215610b1257600080fd5b5035919050565b600080600060608486031215610b2e57600080fd5b610b3784610ac2565b9250610b4560208501610ac2565b9150604084013590509250925092565b600060208284031215610b6757600080fd5b81518015158114610af957600080fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610ba757610ba7610b77565b500290565b600060208284031215610bbe57600080fd5b5051919050565b600060018201610bd757610bd7610b77565b506001019056fea2646970667358221220d38c6fdf4b2f7844794c86bf3f8f7cbf321aa1ef01dd4c6e349f703c75252b8b64736f6c634300080e0033";

type CounterServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CounterService__factory extends ContractFactory {
  constructor(...args: CounterServiceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _f3Token: PromiseOrValue<string>,
    _usdcToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CounterService> {
    return super.deploy(
      _f3Token,
      _usdcToken,
      overrides || {}
    ) as Promise<CounterService>;
  }
  override getDeployTransaction(
    _f3Token: PromiseOrValue<string>,
    _usdcToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_f3Token, _usdcToken, overrides || {});
  }
  override attach(address: string): CounterService {
    return super.attach(address) as CounterService;
  }
  override connect(signer: Signer): CounterService__factory {
    return super.connect(signer) as CounterService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterServiceInterface {
    return new utils.Interface(_abi) as CounterServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CounterService {
    return new Contract(address, _abi, signerOrProvider) as CounterService;
  }
}
