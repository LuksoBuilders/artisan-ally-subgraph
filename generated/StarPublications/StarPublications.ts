// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PublicationStarred extends ethereum.Event {
  get params(): PublicationStarred__Params {
    return new PublicationStarred__Params(this);
  }
}

export class PublicationStarred__Params {
  _event: PublicationStarred;

  constructor(event: PublicationStarred) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get feedAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get postId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class StarPublications extends ethereum.SmartContract {
  static bind(address: Address): StarPublications {
    return new StarPublications("StarPublications", address);
  }

  STAR_PRICE(): BigInt {
    let result = super.call("STAR_PRICE", "STAR_PRICE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_STAR_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("STAR_PRICE", "STAR_PRICE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isPublicationStarred(feedAddress: Address, postId: Bytes): boolean {
    let result = super.call(
      "isPublicationStarred",
      "isPublicationStarred(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(feedAddress),
        ethereum.Value.fromFixedBytes(postId)
      ]
    );

    return result[0].toBoolean();
  }

  try_isPublicationStarred(
    feedAddress: Address,
    postId: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isPublicationStarred",
      "isPublicationStarred(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(feedAddress),
        ethereum.Value.fromFixedBytes(postId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isStarred(param0: Address, param1: Bytes): boolean {
    let result = super.call("isStarred", "isStarred(address,bytes32):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromFixedBytes(param1)
    ]);

    return result[0].toBoolean();
  }

  try_isStarred(param0: Address, param1: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isStarred",
      "isStarred(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  steloToken(): Address {
    let result = super.call("steloToken", "steloToken():(address)", []);

    return result[0].toAddress();
  }

  try_steloToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("steloToken", "steloToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _steloTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StarPublicationCall extends ethereum.Call {
  get inputs(): StarPublicationCall__Inputs {
    return new StarPublicationCall__Inputs(this);
  }

  get outputs(): StarPublicationCall__Outputs {
    return new StarPublicationCall__Outputs(this);
  }
}

export class StarPublicationCall__Inputs {
  _call: StarPublicationCall;

  constructor(call: StarPublicationCall) {
    this._call = call;
  }

  get feedAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get postId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class StarPublicationCall__Outputs {
  _call: StarPublicationCall;

  constructor(call: StarPublicationCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawTokensCall extends ethereum.Call {
  get inputs(): WithdrawTokensCall__Inputs {
    return new WithdrawTokensCall__Inputs(this);
  }

  get outputs(): WithdrawTokensCall__Outputs {
    return new WithdrawTokensCall__Outputs(this);
  }
}

export class WithdrawTokensCall__Inputs {
  _call: WithdrawTokensCall;

  constructor(call: WithdrawTokensCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawTokensCall__Outputs {
  _call: WithdrawTokensCall;

  constructor(call: WithdrawTokensCall) {
    this._call = call;
  }
}