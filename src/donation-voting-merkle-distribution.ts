import {
  Allocated as AllocatedEvent,
  Appealed as AppealedEvent,
  BatchPayoutSuccessful as BatchPayoutSuccessfulEvent,
  Claimed as ClaimedEvent,
  Distributed as DistributedEvent,
  DistributionUpdated as DistributionUpdatedEvent,
  FundsDistributed as FundsDistributedEvent,
  Initialized as InitializedEvent,
  PoolActive as PoolActiveEvent,
  RecipientStatusUpdated as RecipientStatusUpdatedEvent,
  Registered as RegisteredEvent,
  TimestampsUpdated as TimestampsUpdatedEvent,
} from "../generated/DonationVotingMerkleDistribution/DonationVotingMerkleDistribution";
import {
  Allocated,
  Appealed,
  BatchPayoutSuccessful,
  Claimed,
  Distributed,
  DistributionUpdated,
  FundsDistributed,
  Initialized,
  PoolActive,
  RecipientStatusUpdated,
  Registered,
  TimestampsUpdated,
} from "../generated/schema";

export function handleAllocated(event: AllocatedEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new Allocated(recipientId);
  entity.recipientId = event.params.recipientId;
  entity.amount = event.params.amount;
  entity.token = event.params.token;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAppealed(event: AppealedEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new Appealed(recipientId);
  entity.recipientId = event.params.recipientId;
  entity.data = event.params.data;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBatchPayoutSuccessful(
  event: BatchPayoutSuccessfulEvent
): void {
  const sender = event.params.sender.toHex();
  let entity = new BatchPayoutSuccessful(sender);
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleClaimed(event: ClaimedEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new Claimed(recipientId);
  entity.recipientId = event.params.recipientId;
  entity.recipientAddress = event.params.recipientAddress;
  entity.amount = event.params.amount;
  entity.token = event.params.token;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDistributed(event: DistributedEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new Distributed(recipientId);
  entity.recipientId = event.params.recipientId;
  entity.recipientAddress = event.params.recipientAddress;
  entity.amount = event.params.amount;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDistributionUpdated(
  event: DistributionUpdatedEvent
): void {
  let entity = new DistributionUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );
  entity.merkleRoot = event.params.merkleRoot;
  entity.metadata_protocol = event.params.metadata.protocol;
  entity.metadata_pointer = event.params.metadata.pointer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}


export function handleFundsDistributed(event: FundsDistributedEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new FundsDistributed(recipientId);
  entity.amount = event.params.amount;
  entity.grantee = event.params.grantee;
  entity.token = event.params.token;
  entity.recipientId = event.params.recipientId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  const profileId = event.params.profileId.toHex();
  let entity = new Initialized(profileId);
  entity.allo = event.params.allo;
  entity.profileId = event.params.profileId;
  entity.poolId = event.params.poolId;
  entity.data = event.params.data;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePoolActive(event: PoolActiveEvent): void {
  let entity = new PoolActive(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
  );
  entity.active = event.params.active;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRecipientStatusUpdated(
  event: RecipientStatusUpdatedEvent
): void {
  const sender = event.params.sender.toHex();
  let entity = new RecipientStatusUpdated(sender);
  entity.rowIndex = event.params.rowIndex;
  entity.fullRow = event.params.fullRow;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRegistered(event: RegisteredEvent): void {
  const recipientId = event.params.recipientId.toHex();
  let entity = new Registered(recipientId);
  entity.recipientId = event.params.recipientId;
  entity.data = event.params.data;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTimestampsUpdated(event: TimestampsUpdatedEvent): void {
  const sender = event.params.sender.toHex();
  let entity = new TimestampsUpdated(sender);
  entity.registrationStartTime = event.params.registrationStartTime;
  entity.registrationEndTime = event.params.registrationEndTime;
  entity.allocationStartTime = event.params.allocationStartTime;
  entity.allocationEndTime = event.params.allocationEndTime;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
