import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import { User, BackerBuck, SystemFeeAtomCollected } from "../generated/schema";

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
    backerBuck.fellowship = fellowship;
  }
  return backerBuck;
}

export function getSystemFeeAtomCollected(): SystemFeeAtomCollected {
  let systemFeeAtomCollected = SystemFeeAtomCollected.load(Bytes.fromI32(0));
  if (!systemFeeAtomCollected) {
    systemFeeAtomCollected = new SystemFeeAtomCollected(Bytes.fromI32(0));
    systemFeeAtomCollected.amount = BigInt.fromI32(0);
  }
  return systemFeeAtomCollected;
}

export function getBytesFromTokenIdNumber(tokenIdNumber: BigInt): Bytes {
  let tokenIdBytes = Bytes.fromBigInt(tokenIdNumber);
  let reversedTokenIdBytes = Bytes.fromUint8Array(tokenIdBytes.reverse());
  return Bytes.fromHexString(reversedTokenIdBytes.toHexString());
}
