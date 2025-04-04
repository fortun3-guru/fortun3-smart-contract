/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface CounterServiceInterface extends utils.Interface {
  functions: {
    "exchange(uint256)": FunctionFragment;
    "exchangeRate()": FunctionFragment;
    "f3Token()": FunctionFragment;
    "owner()": FunctionFragment;
    "payForConsult()": FunctionFragment;
    "payForMinting()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setExchangeRate(uint256)": FunctionFragment;
    "setF3Token(address)": FunctionFragment;
    "setUSDCToken(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdcToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exchange"
      | "exchangeRate"
      | "f3Token"
      | "owner"
      | "payForConsult"
      | "payForMinting"
      | "renounceOwnership"
      | "setExchangeRate"
      | "setF3Token"
      | "setUSDCToken"
      | "transferOwnership"
      | "usdcToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exchange",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "f3Token", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payForConsult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payForMinting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setExchangeRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setF3Token",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUSDCToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;

  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "f3Token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payForConsult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payForMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setF3Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUSDCToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdcToken", data: BytesLike): Result;

  events: {
    "ConsultPaid(address,uint256)": EventFragment;
    "Exchange(address,uint256,uint256)": EventFragment;
    "MintingPaid(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConsultPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintingPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ConsultPaidEventObject {
  user: string;
  receiptId: BigNumber;
}
export type ConsultPaidEvent = TypedEvent<
  [string, BigNumber],
  ConsultPaidEventObject
>;

export type ConsultPaidEventFilter = TypedEventFilter<ConsultPaidEvent>;

export interface ExchangeEventObject {
  user: string;
  usdcAmount: BigNumber;
  f3Amount: BigNumber;
}
export type ExchangeEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ExchangeEventObject
>;

export type ExchangeEventFilter = TypedEventFilter<ExchangeEvent>;

export interface MintingPaidEventObject {
  user: string;
  receiptId: BigNumber;
}
export type MintingPaidEvent = TypedEvent<
  [string, BigNumber],
  MintingPaidEventObject
>;

export type MintingPaidEventFilter = TypedEventFilter<MintingPaidEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface CounterService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterServiceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    exchange(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    f3Token(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payForConsult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    payForMinting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setF3Token(
      _f3Token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUSDCToken(
      _usdcToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdcToken(overrides?: CallOverrides): Promise<[string]>;
  };

  exchange(
    usdcAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

  f3Token(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  payForConsult(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  payForMinting(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeRate(
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setF3Token(
    _f3Token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUSDCToken(
    _usdcToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdcToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    exchange(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

    f3Token(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    payForConsult(overrides?: CallOverrides): Promise<BigNumber>;

    payForMinting(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setExchangeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setF3Token(
      _f3Token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUSDCToken(
      _usdcToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdcToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ConsultPaid(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      receiptId?: null
    ): ConsultPaidEventFilter;
    ConsultPaid(
      user?: PromiseOrValue<string> | null,
      receiptId?: null
    ): ConsultPaidEventFilter;

    "Exchange(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      usdcAmount?: null,
      f3Amount?: null
    ): ExchangeEventFilter;
    Exchange(
      user?: PromiseOrValue<string> | null,
      usdcAmount?: null,
      f3Amount?: null
    ): ExchangeEventFilter;

    "MintingPaid(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      receiptId?: null
    ): MintingPaidEventFilter;
    MintingPaid(
      user?: PromiseOrValue<string> | null,
      receiptId?: null
    ): MintingPaidEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    exchange(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

    f3Token(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payForConsult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    payForMinting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setF3Token(
      _f3Token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUSDCToken(
      _usdcToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdcToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    exchange(
      usdcAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    f3Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payForConsult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    payForMinting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setF3Token(
      _f3Token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUSDCToken(
      _usdcToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdcToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
