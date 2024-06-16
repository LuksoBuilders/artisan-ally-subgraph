import { BigInt } from "@graphprotocol/graph-ts";

// Function to calculate the effective growth factor
export function getEffectiveGrowthFactor(
    tokenIndex: BigInt,
    initialGrowthFactor: BigInt,
    eventualGrowthFactor: BigInt,
    diminishingFactor: BigInt,
    CALCULATION_DENOMINATOR: BigInt
): BigInt {
    let hundred = BigInt.fromString("100");

    // numerator = eventualGrowthFactor * CALCULATION_DENOMINATOR * 100n +
    //    (initialGrowthFactor - eventualGrowthFactor) * CALCULATION_DENOMINATOR * 100n *
    //    diminishingFactor / (diminishingFactor + tokenIndex * 100n);

    let numerator = eventualGrowthFactor.times(CALCULATION_DENOMINATOR).times(hundred)
        .plus(
            initialGrowthFactor.minus(eventualGrowthFactor)
            .times(CALCULATION_DENOMINATOR).times(hundred)
            .times(diminishingFactor)
            .div(diminishingFactor.plus(tokenIndex.times(hundred)))
        );

    return numerator.div(CALCULATION_DENOMINATOR.times(hundred));
}

// Function to calculate the price at a given index
export function getPriceAtIndex(
    i: BigInt,
    initialPrice: BigInt,
    initialGrowthFactor: BigInt,
    eventualGrowthFactor: BigInt,
    diminishingFactor: BigInt,
    CALCULATION_DENOMINATOR: BigInt
): BigInt {
    if (i.equals(BigInt.fromString("0"))) {
        return initialPrice;
    }

    let price = initialPrice;
    let one = BigInt.fromString("1");

    for (let j = one; j.le(i); j = j.plus(one)) {
        let effectiveGrowthFactor = getEffectiveGrowthFactor(j, initialGrowthFactor, eventualGrowthFactor, diminishingFactor, CALCULATION_DENOMINATOR);
        price = price.times(CALCULATION_DENOMINATOR.plus(effectiveGrowthFactor)).div(CALCULATION_DENOMINATOR);
    }
    return price;
}

// Class to hold the result of getMintPrice
class MintPriceResult {
    currentSupplyPrice: BigInt;
    totalPrice: BigInt;

    constructor(currentSupplyPrice: BigInt, totalPrice: BigInt) {
        this.currentSupplyPrice = currentSupplyPrice;
        this.totalPrice = totalPrice;
    }
}

// Function to calculate the current supply price and total price for the requested amount
export function getMintPrice(
    currentSupply: BigInt,
    amount: BigInt,
    initialPrice: BigInt,
    initialGrowthFactor: BigInt,
    eventualGrowthFactor: BigInt,
    diminishingFactor: BigInt,
    CALCULATION_DENOMINATOR: BigInt
): MintPriceResult {
    let currentSupplyPrice = getPriceAtIndex(currentSupply, initialPrice, initialGrowthFactor, eventualGrowthFactor, diminishingFactor, CALCULATION_DENOMINATOR);
    let totalPrice = currentSupplyPrice;
    let one = BigInt.fromString("1");

    for (let i = currentSupply.plus(one); i.lt(currentSupply.plus(amount)); i = i.plus(one)) {
        let effectiveGrowthFactor = getEffectiveGrowthFactor(i, initialGrowthFactor, eventualGrowthFactor, diminishingFactor, CALCULATION_DENOMINATOR);
        currentSupplyPrice = currentSupplyPrice.times(CALCULATION_DENOMINATOR.plus(effectiveGrowthFactor)).div(CALCULATION_DENOMINATOR);
        totalPrice = totalPrice.plus(currentSupplyPrice);
    }

    return new MintPriceResult(currentSupplyPrice, totalPrice);
}
