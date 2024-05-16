import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BuilderTeamChanged } from "../generated/schema"
import { BuilderTeamChanged as BuilderTeamChangedEvent } from "../generated/FeeCollector/FeeCollector"
import { handleBuilderTeamChanged } from "../src/fee-collector"
import { createBuilderTeamChangedEvent } from "./fee-collector-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newTeam = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBuilderTeamChangedEvent = createBuilderTeamChangedEvent(newTeam)
    handleBuilderTeamChanged(newBuilderTeamChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BuilderTeamChanged created and stored", () => {
    assert.entityCount("BuilderTeamChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BuilderTeamChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newTeam",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
