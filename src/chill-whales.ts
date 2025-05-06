import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import {
  DataChanged as DataChangedEvent,
  OperatorAuthorizationChanged as OperatorAuthorizationChangedEvent,
  OperatorRevoked as OperatorRevokedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenIdDataChanged as TokenIdDataChangedEvent,
  Transfer as TransferEvent,
  Withdrawal as WithdrawalEvent,
} from "../generated/ApexDeities/ApexDeities";
import { User, Whale } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";
import { createSlot, getSystemFeeAtomCollected } from "./utils";

const AddressZero = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export function handleTransfer(event: TransferEvent): void {
  if (event.params.from == AddressZero) {
    // This is a mint;
    let whale = new Whale(event.params.tokenId);

    let owner = User.load(event.params.to);

    if (!owner) {
      owner = new User(event.params.to);
      owner.holyShitsBalance = BigInt.fromU32(0);
      owner.steloBalance = BigInt.fromU32(0);
      owner.followers = [];
      owner.followerCount = BigInt.fromU32(0);
      owner.followings = [];
      owner.followingCount = BigInt.fromU32(0);

      owner.save();
    }

    whale.owner = owner.id;

    whale.save();
  } else {
    let whale = Whale.load(event.params.tokenId);
    if (whale) {
      let owner = User.load(event.params.to);

      if (!owner) {
        owner = new User(event.params.to);
        owner.holyShitsBalance = BigInt.fromU32(0);
        owner.steloBalance = BigInt.fromU32(0);
        owner.followers = [];
        owner.followerCount = BigInt.fromU32(0);
        owner.followings = [];
        owner.followingCount = BigInt.fromU32(0);

        owner.save();
      }
      whale.owner = owner.id;
      whale.save();
    }
  }
}
