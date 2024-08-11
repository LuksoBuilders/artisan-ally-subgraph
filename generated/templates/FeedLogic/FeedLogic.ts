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

export class Followed extends ethereum.Event {
  get params(): Followed__Params {
    return new Followed__Params(this);
  }
}

export class Followed__Params {
  _event: Followed;

  constructor(event: Followed) {
    this._event = event;
  }

  get follower(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class MirrorCreated extends ethereum.Event {
  get params(): MirrorCreated__Params {
    return new MirrorCreated__Params(this);
  }
}

export class MirrorCreated__Params {
  _event: MirrorCreated;

  constructor(event: MirrorCreated) {
    this._event = event;
  }

  get postId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get mirrorOfPostId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get mirrorOfFeed(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get content(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
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

  get tokenId(): Bytes {
    return this._event.parameters[2].value.toBytes();
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

  get tokenId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get notified(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get operatorNotificationData(): Bytes {
    return this._event.parameters[4].value.toBytes();
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

export class PostCreated extends ethereum.Event {
  get params(): PostCreated__Params {
    return new PostCreated__Params(this);
  }
}

export class PostCreated__Params {
  _event: PostCreated;

  constructor(event: PostCreated) {
    this._event = event;
  }

  get postId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get postType(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get content(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get creator(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class PostDeleted extends ethereum.Event {
  get params(): PostDeleted__Params {
    return new PostDeleted__Params(this);
  }
}

export class PostDeleted__Params {
  _event: PostDeleted;

  constructor(event: PostDeleted) {
    this._event = event;
  }

  get postId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get deleter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReplyCreated extends ethereum.Event {
  get params(): ReplyCreated__Params {
    return new ReplyCreated__Params(this);
  }
}

export class ReplyCreated__Params {
  _event: ReplyCreated;

  constructor(event: ReplyCreated) {
    this._event = event;
  }

  get postId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get replyToPostId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get replyToFeed(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get content(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class TokenIdDataChanged extends ethereum.Event {
  get params(): TokenIdDataChanged__Params {
    return new TokenIdDataChanged__Params(this);
  }
}

export class TokenIdDataChanged__Params {
  _event: TokenIdDataChanged;

  constructor(event: TokenIdDataChanged) {
    this._event = event;
  }

  get tokenId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get dataKey(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get dataValue(): Bytes {
    return this._event.parameters[2].value.toBytes();
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

  get tokenId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get force(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get data(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Unfollowed extends ethereum.Event {
  get params(): Unfollowed__Params {
    return new Unfollowed__Params(this);
  }
}

export class Unfollowed__Params {
  _event: Unfollowed;

  constructor(event: Unfollowed) {
    this._event = event;
  }

  get follower(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FeedLogic extends ethereum.SmartContract {
  static bind(address: Address): FeedLogic {
    return new FeedLogic("FeedLogic", address);
  }

  _postCounter(): BigInt {
    let result = super.call("_postCounter", "_postCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try__postCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_postCounter", "_postCounter():(uint256)", []);
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

  bytesToAddress(_input: Bytes): Address {
    let result = super.call(
      "bytesToAddress",
      "bytesToAddress(bytes):(address)",
      [ethereum.Value.fromBytes(_input)]
    );

    return result[0].toAddress();
  }

  try_bytesToAddress(_input: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bytesToAddress",
      "bytesToAddress(bytes):(address)",
      [ethereum.Value.fromBytes(_input)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  exists(postId: Bytes): boolean {
    let result = super.call("exists", "exists(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(postId)
    ]);

    return result[0].toBoolean();
  }

  try_exists(postId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(postId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  getDataBatchForTokenIds(
    tokenIds: Array<Bytes>,
    dataKeys: Array<Bytes>
  ): Array<Bytes> {
    let result = super.call(
      "getDataBatchForTokenIds",
      "getDataBatchForTokenIds(bytes32[],bytes32[]):(bytes[])",
      [
        ethereum.Value.fromFixedBytesArray(tokenIds),
        ethereum.Value.fromFixedBytesArray(dataKeys)
      ]
    );

    return result[0].toBytesArray();
  }

  try_getDataBatchForTokenIds(
    tokenIds: Array<Bytes>,
    dataKeys: Array<Bytes>
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getDataBatchForTokenIds",
      "getDataBatchForTokenIds(bytes32[],bytes32[]):(bytes[])",
      [
        ethereum.Value.fromFixedBytesArray(tokenIds),
        ethereum.Value.fromFixedBytesArray(dataKeys)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getDataForTokenId(tokenId: Bytes, dataKey: Bytes): Bytes {
    let result = super.call(
      "getDataForTokenId",
      "getDataForTokenId(bytes32,bytes32):(bytes)",
      [
        ethereum.Value.fromFixedBytes(tokenId),
        ethereum.Value.fromFixedBytes(dataKey)
      ]
    );

    return result[0].toBytes();
  }

  try_getDataForTokenId(
    tokenId: Bytes,
    dataKey: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getDataForTokenId",
      "getDataForTokenId(bytes32,bytes32):(bytes)",
      [
        ethereum.Value.fromFixedBytes(tokenId),
        ethereum.Value.fromFixedBytes(dataKey)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getOperatorsOf(tokenId: Bytes): Array<Address> {
    let result = super.call(
      "getOperatorsOf",
      "getOperatorsOf(bytes32):(address[])",
      [ethereum.Value.fromFixedBytes(tokenId)]
    );

    return result[0].toAddressArray();
  }

  try_getOperatorsOf(tokenId: Bytes): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getOperatorsOf",
      "getOperatorsOf(bytes32):(address[])",
      [ethereum.Value.fromFixedBytes(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  isContract(_addr: Address): boolean {
    let result = super.call("isContract", "isContract(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);

    return result[0].toBoolean();
  }

  try_isContract(_addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isContract", "isContract(address):(bool)", [
      ethereum.Value.fromAddress(_addr)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isFollowing(follower: Address): boolean {
    let result = super.call("isFollowing", "isFollowing(address):(bool)", [
      ethereum.Value.fromAddress(follower)
    ]);

    return result[0].toBoolean();
  }

  try_isFollowing(follower: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isFollowing", "isFollowing(address):(bool)", [
      ethereum.Value.fromAddress(follower)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperatorFor(operator: Address, tokenId: Bytes): boolean {
    let result = super.call(
      "isOperatorFor",
      "isOperatorFor(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromFixedBytes(tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_isOperatorFor(
    operator: Address,
    tokenId: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperatorFor",
      "isOperatorFor(address,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromFixedBytes(tokenId)
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

  tokenIdsOf(tokenOwner: Address): Array<Bytes> {
    let result = super.call("tokenIdsOf", "tokenIdsOf(address):(bytes32[])", [
      ethereum.Value.fromAddress(tokenOwner)
    ]);

    return result[0].toBytesArray();
  }

  try_tokenIdsOf(tokenOwner: Address): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "tokenIdsOf",
      "tokenIdsOf(address):(bytes32[])",
      [ethereum.Value.fromAddress(tokenOwner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  tokenOwnerOf(tokenId: Bytes): Address {
    let result = super.call("tokenOwnerOf", "tokenOwnerOf(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_tokenOwnerOf(tokenId: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenOwnerOf",
      "tokenOwnerOf(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get tokenId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
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

export class DeletePublicationCall extends ethereum.Call {
  get inputs(): DeletePublicationCall__Inputs {
    return new DeletePublicationCall__Inputs(this);
  }

  get outputs(): DeletePublicationCall__Outputs {
    return new DeletePublicationCall__Outputs(this);
  }
}

export class DeletePublicationCall__Inputs {
  _call: DeletePublicationCall;

  constructor(call: DeletePublicationCall) {
    this._call = call;
  }

  get postId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DeletePublicationCall__Outputs {
  _call: DeletePublicationCall;

  constructor(call: DeletePublicationCall) {
    this._call = call;
  }
}

export class FollowCall extends ethereum.Call {
  get inputs(): FollowCall__Inputs {
    return new FollowCall__Inputs(this);
  }

  get outputs(): FollowCall__Outputs {
    return new FollowCall__Outputs(this);
  }
}

export class FollowCall__Inputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
    this._call = call;
  }
}

export class FollowCall__Outputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
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

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PublishCall extends ethereum.Call {
  get inputs(): PublishCall__Inputs {
    return new PublishCall__Inputs(this);
  }

  get outputs(): PublishCall__Outputs {
    return new PublishCall__Outputs(this);
  }
}

export class PublishCall__Inputs {
  _call: PublishCall;

  constructor(call: PublishCall) {
    this._call = call;
  }

  get content(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PublishCall__Outputs {
  _call: PublishCall;

  constructor(call: PublishCall) {
    this._call = call;
  }
}

export class PublishMirrorCall extends ethereum.Call {
  get inputs(): PublishMirrorCall__Inputs {
    return new PublishMirrorCall__Inputs(this);
  }

  get outputs(): PublishMirrorCall__Outputs {
    return new PublishMirrorCall__Outputs(this);
  }
}

export class PublishMirrorCall__Inputs {
  _call: PublishMirrorCall;

  constructor(call: PublishMirrorCall) {
    this._call = call;
  }

  get content(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get referenceFeed(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get referencePostId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class PublishMirrorCall__Outputs {
  _call: PublishMirrorCall;

  constructor(call: PublishMirrorCall) {
    this._call = call;
  }
}

export class PublishReplyCall extends ethereum.Call {
  get inputs(): PublishReplyCall__Inputs {
    return new PublishReplyCall__Inputs(this);
  }

  get outputs(): PublishReplyCall__Outputs {
    return new PublishReplyCall__Outputs(this);
  }
}

export class PublishReplyCall__Inputs {
  _call: PublishReplyCall;

  constructor(call: PublishReplyCall) {
    this._call = call;
  }

  get content(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get referenceFeed(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get referencePostId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class PublishReplyCall__Outputs {
  _call: PublishReplyCall;

  constructor(call: PublishReplyCall) {
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

  get tokenId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
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

export class SetDataBatchForTokenIdsCall extends ethereum.Call {
  get inputs(): SetDataBatchForTokenIdsCall__Inputs {
    return new SetDataBatchForTokenIdsCall__Inputs(this);
  }

  get outputs(): SetDataBatchForTokenIdsCall__Outputs {
    return new SetDataBatchForTokenIdsCall__Outputs(this);
  }
}

export class SetDataBatchForTokenIdsCall__Inputs {
  _call: SetDataBatchForTokenIdsCall;

  constructor(call: SetDataBatchForTokenIdsCall) {
    this._call = call;
  }

  get tokenIds(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get dataKeys(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get dataValues(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class SetDataBatchForTokenIdsCall__Outputs {
  _call: SetDataBatchForTokenIdsCall;

  constructor(call: SetDataBatchForTokenIdsCall) {
    this._call = call;
  }
}

export class SetDataForTokenIdCall extends ethereum.Call {
  get inputs(): SetDataForTokenIdCall__Inputs {
    return new SetDataForTokenIdCall__Inputs(this);
  }

  get outputs(): SetDataForTokenIdCall__Outputs {
    return new SetDataForTokenIdCall__Outputs(this);
  }
}

export class SetDataForTokenIdCall__Inputs {
  _call: SetDataForTokenIdCall;

  constructor(call: SetDataForTokenIdCall) {
    this._call = call;
  }

  get tokenId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get dataKey(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get dataValue(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetDataForTokenIdCall__Outputs {
  _call: SetDataForTokenIdCall;

  constructor(call: SetDataForTokenIdCall) {
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

  get tokenId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
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

  get tokenId(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
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

export class UnfollowCall extends ethereum.Call {
  get inputs(): UnfollowCall__Inputs {
    return new UnfollowCall__Inputs(this);
  }

  get outputs(): UnfollowCall__Outputs {
    return new UnfollowCall__Outputs(this);
  }
}

export class UnfollowCall__Inputs {
  _call: UnfollowCall;

  constructor(call: UnfollowCall) {
    this._call = call;
  }
}

export class UnfollowCall__Outputs {
  _call: UnfollowCall;

  constructor(call: UnfollowCall) {
    this._call = call;
  }
}
