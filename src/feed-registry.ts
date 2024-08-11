import { BigInt } from "@graphprotocol/graph-ts";
import { FeedCreated } from "../generated/FeedRegistry/FeedRegistry";
import { Feed, User } from "../generated/schema";
import { getUser } from "./utils";

import { FeedLogic } from "../generated/templates";

export function handleFeedCreated(event: FeedCreated): void {
  let feed = new Feed(event.params.feed);
  let user = getUser(event.params.owner);

  feed.postCount = BigInt.fromI32(0);
  feed.followerCount = BigInt.fromI32(0);
  feed.followers = [];

  user.feed = feed.id;
  user.save();
  feed.save();

  // Create a new FeedLogic data source
  FeedLogic.create(event.params.feed);
}
