import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { BackerBuckPricesChange } from "../generated/ArtisanAlly/ArtisanAlly"
import { handleBackerBuckPricesChange } from "../src/artisan-ally"
import { createBackerBuckPricesChangeEvent } from "./artisan-ally-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let backerbuckInitialPrice = BigInt.fromI32(234)
    let backerbuckPriceGrowth = BigInt.fromI32(234)
    let newBackerBuckPricesChangeEvent = createBackerBuckPricesChangeEvent(
      backerbuckInitialPrice,
      backerbuckPriceGrowth
    )
    handleBackerBuckPricesChange(newBackerBuckPricesChangeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "backerbuckInitialPrice",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "backerbuckPriceGrowth",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
