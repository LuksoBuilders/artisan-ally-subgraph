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
import { Deity, User, Slot } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

const AddressZero = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export function handleDataChanged(event: DataChangedEvent): void {
  //let entity = new DataChanged(
  //  event.transaction.hash.concatI32(event.logIndex.toI32())
  //)
  //entity.dataKey = event.params.dataKey
  //entity.dataValue = event.params.dataValue
  //
  //entity.blockNumber = event.block.number
  //entity.blockTimestamp = event.block.timestamp
  //entity.transactionHash = event.transaction.hash
  //
  //entity.save()
  /*
  Mainnet addresses
 const apexDeitiesAddress = "0xb4E32a20aa27B5891Bfa592c392c9858A1DD3945";
 const holyShitAddress = "0x2fF8dF5F47Cd67AfE425a2acb28d6506838495Ee";

 
    Signer address is 0x4cB317AFAB0292D4fF48e158e006C8bC78547173
FellowshipLogic contract deployed at: 0x9C669d17Cc2416d0Ac7FEc4Dd5A91d40E51d7d6C
FellowshipBeacon contract deployed at: 0x534FD7aFb41b73cEC6d7d37f2245610Ec632AF07
BeaconProxyFactory contract deployed at: 0x20378EDEB17AC5af6430CC9e12B3D0bB084E68d8
LevelManager contract deployed at:  0x22957D2Fb820b7F3F0DF5503e77aCC1A5D3a66F7
SlotManager contract deployed at:  0x1b365Dc41a84479ecf285CFd9895D301a1F3E8aa
EndorsementTokenLogic contract deployed at: 0x9a32171D4ECf3e8c777136Ad212846b816c35287
EndorsementBeacon contract deployed at: 0xe3C3A38b5A72F161e233eC0A3B09a5144F5C6Ea9
ContributionTokenLogic contract deployed at: 0x4836133B5763e134E71a86eb29e345267523816E
ContributionTokenBeacon contract deployed at: 0x83A86e0531DA80Bb4D33DC11276AF793BD52323C
FeeCollector contract deployed at:  0xd7cD9902ec51010b99c7577fDa2F4c335A17E75f
Fee collector added as the experience manipulator
ArtisanAlly contract deployed at:  0x84d6022AeCb5d558Cb119A8632b79436f0575ee3
ArtisanAlly added as the Slot Manipulator
           
  
  */
}

export function handleOperatorAuthorizationChanged(
  event: OperatorAuthorizationChangedEvent
): void {}

export function handleOperatorRevoked(event: OperatorRevokedEvent): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleTokenIdDataChanged(event: TokenIdDataChangedEvent): void {
  let deity = Deity.load(event.params.tokenId);
  if (deity) {
    deity.metadata = event.params.dataValue;
    deity.save();
  }
}

function getTokenIdNumber(tokenId: Bytes): BigInt {
  let reversedTokenId = Bytes.fromHexString(tokenId.toHexString());
  return BigInt.fromUnsignedBytes(
    Bytes.fromUint8Array(reversedTokenId.reverse())
  );
}

function getTokenTier(tokenIdNumber: BigInt): string {
  if (tokenIdNumber < BigInt.fromI32(25)) {
    return "S";
  } else if (tokenIdNumber < BigInt.fromI32(50)) {
    return "A";
  } else if (tokenIdNumber < BigInt.fromI32(75)) {
    return "B";
  } else {
    return "C";
  }
}

function createSlot(
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

export function handleTransfer(event: TransferEvent): void {
  if (event.params.from == AddressZero) {
    // This is a mint;
    let deity = new Deity(event.params.tokenId);

    deity.xp = BigInt.fromU32(0);
    deity.level = BigInt.fromU32(0);

    let owner = User.load(event.params.to);

    if (!owner) {
      owner = new User(event.params.to);
      owner.holyShitsBalance = BigInt.fromU32(0);
      owner.save();
    }

    deity.owner = owner.id;
    deity.withdrawable = BigInt.fromU32(0);

    deity.tokenIdNumber = getTokenIdNumber(event.params.tokenId);
    deity.tier = getTokenTier(deity.tokenIdNumber);

    if (deity.tier == "S") {
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(0));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(1));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(2));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(3));
    } else if (deity.tier == "A") {
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(0));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(1));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(2));
    } else if (deity.tier == "B") {
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(0));
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(1));
    } else if (deity.tier == "C") {
      createSlot(deity.id, deity.tokenIdNumber, BigInt.fromI32(0));
    }

    deity.save();
  } else {
    let deity = Deity.load(event.params.tokenId);
    if (deity) {
      let owner = User.load(event.params.to);

      if (!owner) {
        owner = new User(event.params.to);
        owner.holyShitsBalance = BigInt.fromU32(0);
        owner.save();
      }
      deity.owner = owner.id;
      deity.save();
    }
  }
}

export function handleWithdrawal(event: WithdrawalEvent): void {}
