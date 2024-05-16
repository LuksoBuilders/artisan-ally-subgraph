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

export class BackerBuckMinted extends ethereum.Event {
  get params(): BackerBuckMinted__Params {
    return new BackerBuckMinted__Params(this);
  }
}

export class BackerBuckMinted__Params {
  _event: BackerBuckMinted;

  constructor(event: BackerBuckMinted) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get systemFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get artisanShare(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get artisanAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class DataChanged extends ethereum.Event {
  get params(): DataChanged__Params {
    return new DataChanged__Params(this);
  }
}

export class DataChanged__Params {
  _event: DataChanged;

  constructor(event: DataChanged) {
    this._event = event;
  }

  get dataKey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get dataValue(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OperatorAuthorizationChanged extends ethereum.Event {
  get params(): OperatorAuthorizationChanged__Params {
    return new OperatorAuthorizationChanged__Params(this);
  }
}

export class OperatorAuthorizationChanged__Params {
  _event: OperatorAuthorizationChanged;

  constructor(event: OperatorAuthorizationChanged) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get operatorNotificationData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class OperatorRevoked extends ethereum.Event {
  get params(): OperatorRevoked__Params {
    return new OperatorRevoked__Params(this);
  }
}

export class OperatorRevoked__Params {
  _event: OperatorRevoked;

  constructor(event: OperatorRevoked) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get notified(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get operatorNotificationData(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

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

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get force(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get data(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Fellowship__getMintPriceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getCurrentSupplyPrice(): BigInt {
    return this.value0;
  }

  getTotalPrice(): BigInt {
    return this.value1;
  }
}

export class Fellowship extends ethereum.SmartContract {
  static bind(address: Address): Fellowship {
    return new Fellowship("Fellowship", address);
  }

  CALCULATION_DENOMINATOR(): BigInt {
    let result = super.call(
      "CALCULATION_DENOMINATOR",
      "CALCULATION_DENOMINATOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_CALCULATION_DENOMINATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "CALCULATION_DENOMINATOR",
      "CALCULATION_DENOMINATOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _apexDeities(): Address {
    let result = super.call("_apexDeities", "_apexDeities():(address)", []);

    return result[0].toAddress();
  }

  try__apexDeities(): ethereum.CallResult<Address> {
    let result = super.tryCall("_apexDeities", "_apexDeities():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _artisanAlly(): Address {
    let result = super.call("_artisanAlly", "_artisanAlly():(address)", []);

    return result[0].toAddress();
  }

  try__artisanAlly(): ethereum.CallResult<Address> {
    let result = super.tryCall("_artisanAlly", "_artisanAlly():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _backerbuckInitialPrice(): BigInt {
    let result = super.call(
      "_backerbuckInitialPrice",
      "_backerbuckInitialPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__backerbuckInitialPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_backerbuckInitialPrice",
      "_backerbuckInitialPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _backerbuckPriceGrowth(): BigInt {
    let result = super.call(
      "_backerbuckPriceGrowth",
      "_backerbuckPriceGrowth():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__backerbuckPriceGrowth(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_backerbuckPriceGrowth",
      "_backerbuckPriceGrowth():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _beaconProxyFactory(): Address {
    let result = super.call(
      "_beaconProxyFactory",
      "_beaconProxyFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__beaconProxyFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_beaconProxyFactory",
      "_beaconProxyFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _contributionBeacon(): Address {
    let result = super.call(
      "_contributionBeacon",
      "_contributionBeacon():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__contributionBeacon(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_contributionBeacon",
      "_contributionBeacon():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _contributionTokenAddress(): Address {
    let result = super.call(
      "_contributionTokenAddress",
      "_contributionTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__contributionTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_contributionTokenAddress",
      "_contributionTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _earlyAccessFinish(): BigInt {
    let result = super.call(
      "_earlyAccessFinish",
      "_earlyAccessFinish():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__earlyAccessFinish(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_earlyAccessFinish",
      "_earlyAccessFinish():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _endorsementBeacon(): Address {
    let result = super.call(
      "_endorsementBeacon",
      "_endorsementBeacon():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__endorsementBeacon(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_endorsementBeacon",
      "_endorsementBeacon():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _endorsementTokenAddress(): Address {
    let result = super.call(
      "_endorsementTokenAddress",
      "_endorsementTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__endorsementTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_endorsementTokenAddress",
      "_endorsementTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _feeCollector(): Address {
    let result = super.call("_feeCollector", "_feeCollector():(address)", []);

    return result[0].toAddress();
  }

  try__feeCollector(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_feeCollector",
      "_feeCollector():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _holyShitAddress(): Address {
    let result = super.call(
      "_holyShitAddress",
      "_holyShitAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__holyShitAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_holyShitAddress",
      "_holyShitAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  authorizedAmountFor(operator: Address, tokenOwner: Address): BigInt {
    let result = super.call(
      "authorizedAmountFor",
      "authorizedAmountFor(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(tokenOwner)
      ]
    );

    return result[0].toBigInt();
  }

  try_authorizedAmountFor(
    operator: Address,
    tokenOwner: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "authorizedAmountFor",
      "authorizedAmountFor(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(tokenOwner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(tokenOwner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(tokenOwner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(tokenOwner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(tokenOwner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  batchCalls(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("batchCalls", "batchCalls(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);

    return result[0].toBytesArray();
  }

  try_batchCalls(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("batchCalls", "batchCalls(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  founder(): BigInt {
    let result = super.call("founder", "founder():(uint256)", []);

    return result[0].toBigInt();
  }

  try_founder(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("founder", "founder():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getData(dataKey: Bytes): Bytes {
    let result = super.call("getData", "getData(bytes32):(bytes)", [
      ethereum.Value.fromFixedBytes(dataKey)
    ]);

    return result[0].toBytes();
  }

  try_getData(dataKey: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getData", "getData(bytes32):(bytes)", [
      ethereum.Value.fromFixedBytes(dataKey)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getDataBatch(dataKeys: Array<Bytes>): Array<Bytes> {
    let result = super.call(
      "getDataBatch",
      "getDataBatch(bytes32[]):(bytes[])",
      [ethereum.Value.fromFixedBytesArray(dataKeys)]
    );

    return result[0].toBytesArray();
  }

  try_getDataBatch(dataKeys: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getDataBatch",
      "getDataBatch(bytes32[]):(bytes[])",
      [ethereum.Value.fromFixedBytesArray(dataKeys)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getFounder(): BigInt {
    let result = super.call("getFounder", "getFounder():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getFounder(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getFounder", "getFounder():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMintPrice(
    currentSupply: BigInt,
    amount: BigInt
  ): Fellowship__getMintPriceResult {
    let result = super.call(
      "getMintPrice",
      "getMintPrice(uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(currentSupply),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return new Fellowship__getMintPriceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getMintPrice(
    currentSupply: BigInt,
    amount: BigInt
  ): ethereum.CallResult<Fellowship__getMintPriceResult> {
    let result = super.tryCall(
      "getMintPrice",
      "getMintPrice(uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(currentSupply),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Fellowship__getMintPriceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getOperatorsOf(tokenOwner: Address): Array<Address> {
    let result = super.call(
      "getOperatorsOf",
      "getOperatorsOf(address):(address[])",
      [ethereum.Value.fromAddress(tokenOwner)]
    );

    return result[0].toAddressArray();
  }

  try_getOperatorsOf(tokenOwner: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getOperatorsOf",
      "getOperatorsOf(address):(address[])",
      [ethereum.Value.fromAddress(tokenOwner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  isEarlyAccess(): boolean {
    let result = super.call("isEarlyAccess", "isEarlyAccess():(bool)", []);

    return result[0].toBoolean();
  }

  try_isEarlyAccess(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isEarlyAccess", "isEarlyAccess():(bool)", []);
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

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AuthorizeOperatorCall extends ethereum.Call {
  get inputs(): AuthorizeOperatorCall__Inputs {
    return new AuthorizeOperatorCall__Inputs(this);
  }

  get outputs(): AuthorizeOperatorCall__Outputs {
    return new AuthorizeOperatorCall__Outputs(this);
  }
}

export class AuthorizeOperatorCall__Inputs {
  _call: AuthorizeOperatorCall;

  constructor(call: AuthorizeOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get operatorNotificationData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class AuthorizeOperatorCall__Outputs {
  _call: AuthorizeOperatorCall;

  constructor(call: AuthorizeOperatorCall) {
    this._call = call;
  }
}

export class BatchCallsCall extends ethereum.Call {
  get inputs(): BatchCallsCall__Inputs {
    return new BatchCallsCall__Inputs(this);
  }

  get outputs(): BatchCallsCall__Outputs {
    return new BatchCallsCall__Outputs(this);
  }
}

export class BatchCallsCall__Inputs {
  _call: BatchCallsCall;

  constructor(call: BatchCallsCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class BatchCallsCall__Outputs {
  _call: BatchCallsCall;

  constructor(call: BatchCallsCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get subtractedAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get operatorNotificationData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get operatorNotificationData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get initialMetaData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class RevokeOperatorCall extends ethereum.Call {
  get inputs(): RevokeOperatorCall__Inputs {
    return new RevokeOperatorCall__Inputs(this);
  }

  get outputs(): RevokeOperatorCall__Outputs {
    return new RevokeOperatorCall__Outputs(this);
  }
}

export class RevokeOperatorCall__Inputs {
  _call: RevokeOperatorCall;

  constructor(call: RevokeOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get notify(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get operatorNotificationData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RevokeOperatorCall__Outputs {
  _call: RevokeOperatorCall;

  constructor(call: RevokeOperatorCall) {
    this._call = call;
  }
}

export class SetDataCall extends ethereum.Call {
  get inputs(): SetDataCall__Inputs {
    return new SetDataCall__Inputs(this);
  }

  get outputs(): SetDataCall__Outputs {
    return new SetDataCall__Outputs(this);
  }
}

export class SetDataCall__Inputs {
  _call: SetDataCall;

  constructor(call: SetDataCall) {
    this._call = call;
  }

  get dataKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get dataValue(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetDataCall__Outputs {
  _call: SetDataCall;

  constructor(call: SetDataCall) {
    this._call = call;
  }
}

export class SetDataBatchCall extends ethereum.Call {
  get inputs(): SetDataBatchCall__Inputs {
    return new SetDataBatchCall__Inputs(this);
  }

  get outputs(): SetDataBatchCall__Outputs {
    return new SetDataBatchCall__Outputs(this);
  }
}

export class SetDataBatchCall__Inputs {
  _call: SetDataBatchCall;

  constructor(call: SetDataBatchCall) {
    this._call = call;
  }

  get dataKeys(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get dataValues(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class SetDataBatchCall__Outputs {
  _call: SetDataBatchCall;

  constructor(call: SetDataBatchCall) {
    this._call = call;
  }
}

export class SetupCall extends ethereum.Call {
  get inputs(): SetupCall__Inputs {
    return new SetupCall__Inputs(this);
  }

  get outputs(): SetupCall__Outputs {
    return new SetupCall__Outputs(this);
  }
}

export class SetupCall__Inputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }

  get artisanAlly(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get apexDeities(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get feeCollector(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get holyShitAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get founderDeity(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get beaconProxyFactory(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get contributionBeacon(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get endorsementBeacon(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get backerbuckInitialPrice(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get backerbuckPriceGrowth(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get earlyAccessFinish(): BigInt {
    return this._call.inputValues[10].value.toBigInt();
  }
}

export class SetupCall__Outputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get force(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class TransferBatchCall extends ethereum.Call {
  get inputs(): TransferBatchCall__Inputs {
    return new TransferBatchCall__Inputs(this);
  }

  get outputs(): TransferBatchCall__Outputs {
    return new TransferBatchCall__Outputs(this);
  }
}

export class TransferBatchCall__Inputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
    this._call = call;
  }

  get from(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get to(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get amount(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get force(): Array<boolean> {
    return this._call.inputValues[3].value.toBooleanArray();
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class TransferBatchCall__Outputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
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
