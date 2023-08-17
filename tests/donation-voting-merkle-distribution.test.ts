import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  afterAll,
  beforeAll,
  clearStore,
  describe
} from "matchstick-as/assembly/index";
import { handleAllocated } from "../src/donation-voting-merkle-distribution";
import { createAllocatedEvent } from "./donation-voting-merkle-distribution-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let recipientId = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let amount = BigInt.fromI32(234);
    let token = Address.fromString(
      "0x0000000000000000000000000000000000000002"
    );
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000003"
    );
    let newAllocatedEvent = createAllocatedEvent(
      recipientId,
      amount,
      token,
      sender
    );
    handleAllocated(newAllocatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test


  // More assert options:
  // https://thegraph.com/docs/en/developer/matchstick/#asserts

});
