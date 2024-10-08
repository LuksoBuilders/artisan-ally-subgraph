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

export class FeedCreated extends ethereum.Event {
  get params(): FeedCreated__Params {
    return new FeedCreated__Params(this);
  }
}

export class FeedCreated__Params {
  _event: FeedCreated;

  constructor(event: FeedCreated) {
    this._event = event;
  }

  get feed(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FeedRegistry extends ethereum.SmartContract {
  static bind(address: Address): FeedRegistry {
    return new FeedRegistry("FeedRegistry", address);
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

  _feedBeacon(): Address {
    let result = super.call("_feedBeacon", "_feedBeacon():(address)", []);

    return result[0].toAddress();
  }

  try__feedBeacon(): ethereum.CallResult<Address> {
    let result = super.tryCall("_feedBeacon", "_feedBeacon():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _feeds(param0: Address): Address {
    let result = super.call("_feeds", "_feeds(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try__feeds(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("_feeds", "_feeds(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createFeed(feedOwner: Address): Address {
    let result = super.call("createFeed", "createFeed(address):(address)", [
      ethereum.Value.fromAddress(feedOwner)
    ]);

    return result[0].toAddress();
  }

  try_createFeed(feedOwner: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("createFeed", "createFeed(address):(address)", [
      ethereum.Value.fromAddress(feedOwner)
    ]);
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

  get feedBeacon(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get beaconProxyFactory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateFeedCall extends ethereum.Call {
  get inputs(): CreateFeedCall__Inputs {
    return new CreateFeedCall__Inputs(this);
  }

  get outputs(): CreateFeedCall__Outputs {
    return new CreateFeedCall__Outputs(this);
  }
}

export class CreateFeedCall__Inputs {
  _call: CreateFeedCall;

  constructor(call: CreateFeedCall) {
    this._call = call;
  }

  get feedOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateFeedCall__Outputs {
  _call: CreateFeedCall;

  constructor(call: CreateFeedCall) {
    this._call = call;
  }

  get feed(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
