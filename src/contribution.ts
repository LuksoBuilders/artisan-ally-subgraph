import {
    Address,
    BigInt,
    ByteArray,
    Bytes,
    crypto,
} from "@graphprotocol/graph-ts";
import {
    DataChanged,
    Contributed,
    Purified,
    Transfer
} from "../generated/templates/ContributionTemplate/Contribution";
import { dataSource } from '@graphprotocol/graph-ts'
import { User, Fellowship, BackerBuck, Slot } from "../generated/schema";
import { getGlobalVars, getBackerBuck } from "./utils";
import { log } from "@graphprotocol/graph-ts";


export function handleDataChanged(event: DataChanged): void {

}


export function handleContributed(event: Contributed): void {
    let context = dataSource.context()
    let fellowshipAddress = Address.fromBytes(context.getBytes('fellowshipId'))

    let fellowship = Fellowship.load(fellowshipAddress);
    if (fellowship) {
        fellowship.contributionAmount = fellowship.contributionAmount.plus(event.params.amount);
        fellowship.save()
    }

    let backerBuck = getBackerBuck(fellowshipAddress, event.params.contributer);
    backerBuck.contributions = backerBuck.contributions.plus(event.params.amount);
    backerBuck.purifiable = backerBuck.purifiable.plus(event.params.amount);
    backerBuck.save();
}


export function handlePurified(event: Purified): void {
    //let context = dataSource.context()
    //let fellowshipAddress = Address.fromBytes(context.getBytes('fellowshipId'))
    //let backerBuck = getBackerBuck(fellowshipAddress, event.transaction.from);
    //backerBuck.purifiable = backerBuck.purifiable.minus(event.params.amount);
    //backerBuck.save();
    //let globalVars = getGlobalVars();
    //globalVars.divineDungDepotBalance = globalVars.divineDungDepotBalance.plus(event.params.amount.times(BigInt.fromI32(100))).times((BigInt.fromI32(10).pow(18)));
    //globalVars.save();
}


export function handleTransfer(event: Transfer): void {

}