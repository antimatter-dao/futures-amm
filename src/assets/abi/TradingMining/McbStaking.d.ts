/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface McbStakingInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "calcUnlockTime(address,uint256)": FunctionFragment;
    "initialize(address,uint256)": FunctionFragment;
    "lockPeriod()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "redeem()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "restake()": FunctionFragment;
    "secondsUntilUnlock(address)": FunctionFragment;
    "setUnlockPeriod(uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "stakedBalances(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockTime(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calcUnlockTime",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "redeem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "restake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "secondsUntilUnlock",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnlockPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedBalances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unlockTime", values: [string]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcUnlockTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "restake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "secondsUntilUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnlockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Redeem(address,uint256)": EventFragment;
    "SetUnlockPeriod(uint256,uint256)": EventFragment;
    "Stake(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetUnlockPeriod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
}

export class McbStaking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: McbStakingInterface;

  functions: {
    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    calcUnlockTime(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calcUnlockTime(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    initialize(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,uint256)"(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "lockPeriod()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    name(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "name()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    redeem(overrides?: Overrides): Promise<ContractTransaction>;

    "redeem()"(overrides?: Overrides): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    restake(overrides?: Overrides): Promise<ContractTransaction>;

    "restake()"(overrides?: Overrides): Promise<ContractTransaction>;

    secondsUntilUnlock(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "secondsUntilUnlock(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setUnlockPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setUnlockPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "stakeToken()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    stakedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      unlockTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "stakedBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      unlockTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unlockTime(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "unlockTime(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcUnlockTime(
    account: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calcUnlockTime(address,uint256)"(
    account: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    stakeToken_: string,
    lockPeriod_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,uint256)"(
    stakeToken_: string,
    lockPeriod_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "lockPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  redeem(overrides?: Overrides): Promise<ContractTransaction>;

  "redeem()"(overrides?: Overrides): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  restake(overrides?: Overrides): Promise<ContractTransaction>;

  "restake()"(overrides?: Overrides): Promise<ContractTransaction>;

  secondsUntilUnlock(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "secondsUntilUnlock(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setUnlockPeriod(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setUnlockPeriod(uint256)"(
    period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stake(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  "stakeToken()"(overrides?: CallOverrides): Promise<string>;

  stakedBalances(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    balance: BigNumber;
    unlockTime: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "stakedBalances(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    balance: BigNumber;
    unlockTime: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "unlockTime(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcUnlockTime(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcUnlockTime(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256)"(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "lockPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    redeem(overrides?: CallOverrides): Promise<void>;

    "redeem()"(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    restake(overrides?: CallOverrides): Promise<void>;

    "restake()"(overrides?: CallOverrides): Promise<void>;

    secondsUntilUnlock(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "secondsUntilUnlock(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUnlockPeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUnlockPeriod(uint256)"(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    "stakeToken()"(overrides?: CallOverrides): Promise<string>;

    stakedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      unlockTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "stakedBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      unlockTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "unlockTime(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Redeem(account: string | null, redeemed: null): EventFilter;

    SetUnlockPeriod(previousLockPeriod: null, newLockPeriod: null): EventFilter;

    Stake(
      account: string | null,
      newStaked: null,
      totalStaked: null,
      unlockTime: null
    ): EventFilter;
  };

  estimateGas: {
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcUnlockTime(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcUnlockTime(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,uint256)"(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "lockPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(overrides?: Overrides): Promise<BigNumber>;

    "redeem()"(overrides?: Overrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    restake(overrides?: Overrides): Promise<BigNumber>;

    "restake()"(overrides?: Overrides): Promise<BigNumber>;

    secondsUntilUnlock(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "secondsUntilUnlock(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUnlockPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setUnlockPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    stakedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "stakedBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unlockTime(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "unlockTime(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcUnlockTime(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcUnlockTime(address,uint256)"(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256)"(
      stakeToken_: string,
      lockPeriod_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(overrides?: Overrides): Promise<PopulatedTransaction>;

    "redeem()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    restake(overrides?: Overrides): Promise<PopulatedTransaction>;

    "restake()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    secondsUntilUnlock(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "secondsUntilUnlock(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUnlockPeriod(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setUnlockPeriod(uint256)"(
      period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stake(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakedBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unlockTime(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unlockTime(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}