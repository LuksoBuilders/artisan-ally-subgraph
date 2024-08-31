import { BigInt } from "@graphprotocol/graph-ts";
import { Alert } from "../generated/schema";
import { Follow, Unfollow } from "../generated/FollowRegistry/FollowRegistry";
import { getUser, generateUniquePostId } from "./utils";

export function handleFollow(event: Follow): void {
  let follower = getUser(event.params.follower);
  let target = getUser(event.params.addr);

  // handling for follower
  let followerNewFollowings = follower.followings;
  followerNewFollowings.push(target.id);
  follower.followings = followerNewFollowings;
  follower.followingCount = follower.followingCount.plus(BigInt.fromI32(1));

  follower.save(); // Save the follower changes

  let alert = new Alert(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  alert.type = "follow";

  alert.recipient = target.id;
  alert.payload = [follower.id.toHexString()];
  alert.createdAt = event.block.timestamp.toString();
  alert.save();

  // handling for target

  let targetNewFollowers = target.followers;
  targetNewFollowers.push(follower.id);
  target.followers = targetNewFollowers;
  target.followerCount = target.followerCount.plus(BigInt.fromI32(1));

  target.save();
}

export function handleUnfollow(event: Unfollow): void {
  let unfollower = getUser(event.params.unfollower);
  let target = getUser(event.params.addr);

  // handling for unfollower
  let unfollowerNewFollowings = unfollower.followings;
  let indexFollowing = unfollowerNewFollowings.indexOf(target.id);
  if (indexFollowing !== -1) {
    unfollowerNewFollowings.splice(indexFollowing, 1);
  }
  unfollower.followings = unfollowerNewFollowings;
  unfollower.followingCount = unfollower.followingCount.minus(
    BigInt.fromI32(1)
  );

  unfollower.save();

  // handling for target
  let targetNewFollowers = target.followers;
  let indexFollower = targetNewFollowers.indexOf(unfollower.id);
  if (indexFollower !== -1) {
    targetNewFollowers.splice(indexFollower, 1);
  }
  target.followers = targetNewFollowers;
  target.followerCount = target.followerCount.minus(BigInt.fromI32(1));

  target.save();
}
