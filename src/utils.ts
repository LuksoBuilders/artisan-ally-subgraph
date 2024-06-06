import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import {
  User,
  BackerBuck,
  SystemFeeAtomCollected,
  Slot,
  GlobalVars,
} from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function getUser(userAddress: Address): User {
  let user = User.load(userAddress);
  if (!user) {
    user = new User(userAddress);
    user.holyShitsBalance = BigInt.fromU32(0);
    user.save();
  }
  return user;
}

function getBackerBuckTokenId(fellowship: Address, owner: Address): Bytes {
  let fellowshipStr: string = fellowship.toHexString();
  let ownerStr: string = owner.toHexString();

  // Concatenate the strings
  let combine: string = fellowshipStr + ownerStr;

  return Bytes.fromByteArray(crypto.keccak256(ByteArray.fromUTF8(combine)));
}

export function getBackerBuck(fellowship: Address, owner: Address): BackerBuck {
  let backerBuck = BackerBuck.load(getBackerBuckTokenId(fellowship, owner));
  if (!backerBuck) {
    backerBuck = new BackerBuck(getBackerBuckTokenId(fellowship, owner));
    backerBuck.owner = getUser(owner).id;
    backerBuck.amount = BigInt.fromI32(0);
    backerBuck.contributions = BigInt.fromI32(0);
    backerBuck.purifiable = BigInt.fromI32(0);
    backerBuck.fellowship = fellowship;
  }
  return backerBuck;
}

export function getGlobalVars(): GlobalVars {
  let globalVars = GlobalVars.load(Bytes.fromI32(0));
  if (!globalVars) {
    globalVars = new GlobalVars(Bytes.fromI32(0));
    globalVars.totalFeeCollected = BigInt.fromI32(0);
    globalVars.totalRaisedAmount = BigInt.fromI32(0);
    globalVars.divineDungDepotBalance = BigInt.fromI32(0);
    globalVars.save();
  }
  return globalVars;
}

export function getSystemFeeAtomCollected(): SystemFeeAtomCollected {
  let systemFeeAtomCollected = SystemFeeAtomCollected.load(Bytes.fromI32(0));
  if (!systemFeeAtomCollected) {
    systemFeeAtomCollected = new SystemFeeAtomCollected(Bytes.fromI32(0));
    systemFeeAtomCollected.amount = BigInt.fromI32(0);
    systemFeeAtomCollected.save();
  }
  return systemFeeAtomCollected;
}

export function getBytesFromTokenIdNumber(tokenIdNumber: BigInt): Bytes {
  let reversedTokenIdBytes = Bytes.fromBigInt(tokenIdNumber);

  reversedTokenIdBytes.reverse();
  return Bytes.fromHexString(
    "0x00000000000000000000000000000000000000000000000000000000000000"
  ).concat(Bytes.fromByteArray(reversedTokenIdBytes));
}

export function createSlot(
  deityId: Bytes,
  deityTokenIdNumber: BigInt,
  index: BigInt
): void {
  let tokenIdStr: string = deityTokenIdNumber.toHexString();
  let indexStr: string = index.toHexString();

  // Concatenate the strings
  let concatenatedStr: string = tokenIdStr + indexStr;

  log.warning("Creating a slot", [
    deityTokenIdNumber.toHexString(),
    index.toHexString(),
    concatenatedStr,
  ]);

  let slot = new Slot(
    Bytes.fromByteArray(crypto.keccak256(ByteArray.fromUTF8(concatenatedStr)))
  );
  slot.deity = deityId;
  slot.index = index;
  slot.usedAt = BigInt.fromI32(0);
  slot.save();
}
