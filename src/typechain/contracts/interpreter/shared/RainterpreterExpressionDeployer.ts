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
} from "../../../common";

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type StorageOpcodesRangeStruct = {
  pointer: PromiseOrValue<BigNumberish>;
  length: PromiseOrValue<BigNumberish>;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface RainterpreterExpressionDeployerInterface
  extends utils.Interface {
  functions: {
    "deployExpression((bytes[],uint256[]),uint256[])": FunctionFragment;
    "ensureIntegrity((uint256,uint256),bytes[],uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deployExpression" | "ensureIntegrity"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployExpression",
    values: [StateConfigStruct, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "ensureIntegrity",
    values: [
      StorageOpcodesRangeStruct,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployExpression",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensureIntegrity",
    data: BytesLike
  ): Result;

  events: {
    "DeployExpression(address,tuple,address,uint256)": EventFragment;
    "ValidInterpreter(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployExpression"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidInterpreter"): EventFragment;
}

export interface DeployExpressionEventObject {
  sender: string;
  config: StateConfigStructOutput;
  expressionAddress: string;
  contextScratch: BigNumber;
}
export type DeployExpressionEvent = TypedEvent<
  [string, StateConfigStructOutput, string, BigNumber],
  DeployExpressionEventObject
>;

export type DeployExpressionEventFilter =
  TypedEventFilter<DeployExpressionEvent>;

export interface ValidInterpreterEventObject {
  sender: string;
  interpreter: string;
}
export type ValidInterpreterEvent = TypedEvent<
  [string, string],
  ValidInterpreterEventObject
>;

export type ValidInterpreterEventFilter =
  TypedEventFilter<ValidInterpreterEvent>;

export interface RainterpreterExpressionDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RainterpreterExpressionDeployerInterface;

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
    deployExpression(
      config_: StateConfigStruct,
      finalMinStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  deployExpression(
    config_: StateConfigStruct,
    finalMinStacks_: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ensureIntegrity(
    storageOpcodesRange_: StorageOpcodesRangeStruct,
    sources_: PromiseOrValue<BytesLike>[],
    constantsLength_: PromiseOrValue<BigNumberish>,
    finalStacks_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      contextScratch_: BigNumber;
      stackLength_: BigNumber;
    }
  >;

  callStatic: {
    deployExpression(
      config_: StateConfigStruct,
      finalMinStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  filters: {
    "DeployExpression(address,tuple,address,uint256)"(
      sender?: null,
      config?: null,
      expressionAddress?: null,
      contextScratch?: null
    ): DeployExpressionEventFilter;
    DeployExpression(
      sender?: null,
      config?: null,
      expressionAddress?: null,
      contextScratch?: null
    ): DeployExpressionEventFilter;

    "ValidInterpreter(address,address)"(
      sender?: null,
      interpreter?: null
    ): ValidInterpreterEventFilter;
    ValidInterpreter(
      sender?: null,
      interpreter?: null
    ): ValidInterpreterEventFilter;
  };

  estimateGas: {
    deployExpression(
      config_: StateConfigStruct,
      finalMinStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployExpression(
      config_: StateConfigStruct,
      finalMinStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
