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

export class BuilderTeamChanged extends ethereum.Event {
  get params(): BuilderTeamChanged__Params {
    return new BuilderTeamChanged__Params(this);
  }
}

export class BuilderTeamChanged__Params {
  _event: BuilderTeamChanged;

  constructor(event: BuilderTeamChanged) {
    this._event = event;
  }

  get newTeam(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BuilderWithdrawal extends ethereum.Event {
  get params(): BuilderWithdrawal__Params {
    return new BuilderWithdrawal__Params(this);
  }
}

export class BuilderWithdrawal__Params {
  _event: BuilderWithdrawal;

  constructor(event: BuilderWithdrawal) {
    this._event = event;
  }

  get builderTeam(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CollectorInitialized extends ethereum.Event {
  get params(): CollectorInitialized__Params {
    return new CollectorInitialized__Params(this);
  }
}

export class CollectorInitialized__Params {
  _event: CollectorInitialized;

  constructor(event: CollectorInitialized) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get apexDeities(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get levelManager(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get builderTeam(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get marketingTeam(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class DeityHarvested extends ethereum.Event {
  get params(): DeityHarvested__Params {
    return new DeityHarvested__Params(this);
  }
}

export class DeityHarvested__Params {
  _event: DeityHarvested;

  constructor(event: DeityHarvested) {
    this._event = event;
  }

  get deityId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DirectFeeInserted extends ethereum.Event {
  get params(): DirectFeeInserted__Params {
    return new DirectFeeInserted__Params(this);
  }
}

export class DirectFeeInserted__Params {
  _event: DirectFeeInserted;

  constructor(event: DirectFeeInserted) {
    this._event = event;
  }

  get founder(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class FeeInserted extends ethereum.Event {
  get params(): FeeInserted__Params {
    return new FeeInserted__Params(this);
  }
}

export class FeeInserted__Params {
  _event: FeeInserted;

  constructor(event: FeeInserted) {
    this._event = event;
  }

  get collectedAtomAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

export class MarketingTeamChanged extends ethereum.Event {
  get params(): MarketingTeamChanged__Params {
    return new MarketingTeamChanged__Params(this);
  }
}

export class MarketingTeamChanged__Params {
  _event: MarketingTeamChanged;

  constructor(event: MarketingTeamChanged) {
    this._event = event;
  }

  get newTeam(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MarketingWithdrawal extends ethereum.Event {
  get params(): MarketingWithdrawal__Params {
    return new MarketingWithdrawal__Params(this);
  }
}

export class MarketingWithdrawal__Params {
  _event: MarketingWithdrawal;

  constructor(event: MarketingWithdrawal) {
    this._event = event;
  }

  get marketingTeam(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class FeeCollector extends ethereum.SmartContract {
  static bind(address: Address): FeeCollector {
    return new FeeCollector("FeeCollector", address);
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

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TEAM_SHARES_NUMERATOR(): BigInt {
    let result = super.call(
      "TEAM_SHARES_NUMERATOR",
      "TEAM_SHARES_NUMERATOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TEAM_SHARES_NUMERATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TEAM_SHARES_NUMERATOR",
      "TEAM_SHARES_NUMERATOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  UPGRADE_INTERFACE_VERSION(): string {
    let result = super.call(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      []
    );

    return result[0].toString();
  }

  try_UPGRADE_INTERFACE_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  _builderTeam(): Address {
    let result = super.call("_builderTeam", "_builderTeam():(address)", []);

    return result[0].toAddress();
  }

  try__builderTeam(): ethereum.CallResult<Address> {
    let result = super.tryCall("_builderTeam", "_builderTeam():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _builderWithdrawals(): BigInt {
    let result = super.call(
      "_builderWithdrawals",
      "_builderWithdrawals():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__builderWithdrawals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_builderWithdrawals",
      "_builderWithdrawals():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _directFees(param0: BigInt): BigInt {
    let result = super.call("_directFees", "_directFees(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try__directFees(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_directFees",
      "_directFees(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _harvests(param0: BigInt): BigInt {
    let result = super.call("_harvests", "_harvests(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try__harvests(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_harvests", "_harvests(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _levelManager(): Address {
    let result = super.call("_levelManager", "_levelManager():(address)", []);

    return result[0].toAddress();
  }

  try__levelManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_levelManager",
      "_levelManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _marketingTeam(): Address {
    let result = super.call("_marketingTeam", "_marketingTeam():(address)", []);

    return result[0].toAddress();
  }

  try__marketingTeam(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_marketingTeam",
      "_marketingTeam():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _marketingWithdrawals(): BigInt {
    let result = super.call(
      "_marketingWithdrawals",
      "_marketingWithdrawals():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__marketingWithdrawals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_marketingWithdrawals",
      "_marketingWithdrawals():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _systemFeeCollectedAtom(): BigInt {
    let result = super.call(
      "_systemFeeCollectedAtom",
      "_systemFeeCollectedAtom():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__systemFeeCollectedAtom(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_systemFeeCollectedAtom",
      "_systemFeeCollectedAtom():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  buildersWithdrawableBalance(): BigInt {
    let result = super.call(
      "buildersWithdrawableBalance",
      "buildersWithdrawableBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_buildersWithdrawableBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "buildersWithdrawableBalance",
      "buildersWithdrawableBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deityHarvestableBalance(deityId: BigInt): BigInt {
    let result = super.call(
      "deityHarvestableBalance",
      "deityHarvestableBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );

    return result[0].toBigInt();
  }

  try_deityHarvestableBalance(deityId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deityHarvestableBalance",
      "deityHarvestableBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDirectFeePercent(deityId: BigInt): BigInt {
    let result = super.call(
      "getDirectFeePercent",
      "getDirectFeePercent(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );

    return result[0].toBigInt();
  }

  try_getDirectFeePercent(deityId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDirectFeePercent",
      "getDirectFeePercent(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getSystemFeePercent(deityId: BigInt): BigInt {
    let result = super.call(
      "getSystemFeePercent",
      "getSystemFeePercent(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );

    return result[0].toBigInt();
  }

  try_getSystemFeePercent(deityId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSystemFeePercent",
      "getSystemFeePercent(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(deityId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketingWithdrawableBalance(): BigInt {
    let result = super.call(
      "marketingWithdrawableBalance",
      "marketingWithdrawableBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_marketingWithdrawableBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marketingWithdrawableBalance",
      "marketingWithdrawableBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

export class ChangeBuilderTeamCall extends ethereum.Call {
  get inputs(): ChangeBuilderTeamCall__Inputs {
    return new ChangeBuilderTeamCall__Inputs(this);
  }

  get outputs(): ChangeBuilderTeamCall__Outputs {
    return new ChangeBuilderTeamCall__Outputs(this);
  }
}

export class ChangeBuilderTeamCall__Inputs {
  _call: ChangeBuilderTeamCall;

  constructor(call: ChangeBuilderTeamCall) {
    this._call = call;
  }

  get newBuilderTeam(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeBuilderTeamCall__Outputs {
  _call: ChangeBuilderTeamCall;

  constructor(call: ChangeBuilderTeamCall) {
    this._call = call;
  }
}

export class ChangeMarketingTeamCall extends ethereum.Call {
  get inputs(): ChangeMarketingTeamCall__Inputs {
    return new ChangeMarketingTeamCall__Inputs(this);
  }

  get outputs(): ChangeMarketingTeamCall__Outputs {
    return new ChangeMarketingTeamCall__Outputs(this);
  }
}

export class ChangeMarketingTeamCall__Inputs {
  _call: ChangeMarketingTeamCall;

  constructor(call: ChangeMarketingTeamCall) {
    this._call = call;
  }

  get newMarketingTeam(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeMarketingTeamCall__Outputs {
  _call: ChangeMarketingTeamCall;

  constructor(call: ChangeMarketingTeamCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class HarvestDeityCall extends ethereum.Call {
  get inputs(): HarvestDeityCall__Inputs {
    return new HarvestDeityCall__Inputs(this);
  }

  get outputs(): HarvestDeityCall__Outputs {
    return new HarvestDeityCall__Outputs(this);
  }
}

export class HarvestDeityCall__Inputs {
  _call: HarvestDeityCall;

  constructor(call: HarvestDeityCall) {
    this._call = call;
  }

  get deityId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class HarvestDeityCall__Outputs {
  _call: HarvestDeityCall;

  constructor(call: HarvestDeityCall) {
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

  get defaultAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get apexDeities(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get levelManager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get builderTeam(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get marketingTeam(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InsertFeeCall extends ethereum.Call {
  get inputs(): InsertFeeCall__Inputs {
    return new InsertFeeCall__Inputs(this);
  }

  get outputs(): InsertFeeCall__Outputs {
    return new InsertFeeCall__Outputs(this);
  }
}

export class InsertFeeCall__Inputs {
  _call: InsertFeeCall;

  constructor(call: InsertFeeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InsertFeeCall__Outputs {
  _call: InsertFeeCall;

  constructor(call: InsertFeeCall) {
    this._call = call;
  }
}

export class InsertMintFeeCall extends ethereum.Call {
  get inputs(): InsertMintFeeCall__Inputs {
    return new InsertMintFeeCall__Inputs(this);
  }

  get outputs(): InsertMintFeeCall__Outputs {
    return new InsertMintFeeCall__Outputs(this);
  }
}

export class InsertMintFeeCall__Inputs {
  _call: InsertMintFeeCall;

  constructor(call: InsertMintFeeCall) {
    this._call = call;
  }

  get founder(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InsertMintFeeCall__Outputs {
  _call: InsertMintFeeCall;

  constructor(call: InsertMintFeeCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get callerConfirmation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class WithdrawBuildersCall extends ethereum.Call {
  get inputs(): WithdrawBuildersCall__Inputs {
    return new WithdrawBuildersCall__Inputs(this);
  }

  get outputs(): WithdrawBuildersCall__Outputs {
    return new WithdrawBuildersCall__Outputs(this);
  }
}

export class WithdrawBuildersCall__Inputs {
  _call: WithdrawBuildersCall;

  constructor(call: WithdrawBuildersCall) {
    this._call = call;
  }
}

export class WithdrawBuildersCall__Outputs {
  _call: WithdrawBuildersCall;

  constructor(call: WithdrawBuildersCall) {
    this._call = call;
  }
}

export class WithdrawMarketingCall extends ethereum.Call {
  get inputs(): WithdrawMarketingCall__Inputs {
    return new WithdrawMarketingCall__Inputs(this);
  }

  get outputs(): WithdrawMarketingCall__Outputs {
    return new WithdrawMarketingCall__Outputs(this);
  }
}

export class WithdrawMarketingCall__Inputs {
  _call: WithdrawMarketingCall;

  constructor(call: WithdrawMarketingCall) {
    this._call = call;
  }
}

export class WithdrawMarketingCall__Outputs {
  _call: WithdrawMarketingCall;

  constructor(call: WithdrawMarketingCall) {
    this._call = call;
  }
}