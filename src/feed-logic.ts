import { BigInt } from "@graphprotocol/graph-ts";
import {
  PostCreated,
  ReplyCreated,
  MirrorCreated,
  PostDeleted,
  Followed,
  Unfollowed,
} from "../generated/templates/FeedLogic/FeedLogic";
import { Feed, Post, Alert } from "../generated/schema";
import { getUser, generateUniquePostId } from "./utils";

export function handlePostCreated(event: PostCreated): void {
  let feed = Feed.load(event.address);
  if (feed == null) {
    return;
  }

  let post = new Post(generateUniquePostId(event.address, event.params.postId));
  post.feed = feed.id;
  post.postType = "Normal";
  post.content = event.params.content;
  post.creator = event.params.creator;
  post.parents = [];
  post.isDeleted = false;
  post.isStarred = false;
  post.createdAt = event.block.timestamp;

  post.repliesCount = BigInt.fromI32(0);
  post.mirrorsCount = BigInt.fromI32(0);

  post.save();

  feed.postCount = feed.postCount.plus(BigInt.fromI32(1));
  feed.save();
}

export function handleReplyCreated(event: ReplyCreated): void {
  let feed = Feed.load(event.address);
  if (feed == null) {
    return;
  }

  let post = new Post(generateUniquePostId(event.address, event.params.postId));
  post.feed = feed.id;
  post.postType = "Reply";
  post.content = event.params.content;
  post.creator = event.params.creator;
  post.referenceFeed = event.params.replyToFeed;
  post.referencePost = generateUniquePostId(
    event.params.replyToFeed,
    event.params.replyToPostId
  );

  let parentPost = Post.load(
    generateUniquePostId(event.params.replyToFeed, event.params.replyToPostId)
  );

  if (parentPost) {
    post.parents = parentPost.parents.concat([parentPost.id]);
    parentPost.repliesCount = parentPost.repliesCount.plus(BigInt.fromI32(1));
    parentPost.save();

    // Create an alert for the parent post creator
    let alert = new Alert(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    alert.type = "reply";

    alert.recipient = parentPost.creator;
    alert.payload = [event.params.creator.toHexString(), post.id];
    alert.createdAt = event.block.timestamp.toString();
    alert.save();
  } else {
    post.parents = [];
  }

  post.repliesCount = BigInt.fromI32(0);
  post.mirrorsCount = BigInt.fromI32(0);

  post.isDeleted = false;
  post.isStarred = false;
  post.createdAt = event.block.timestamp;
  post.save();

  feed.postCount = feed.postCount.plus(BigInt.fromI32(1));
  feed.save();
}

export function handleMirrorCreated(event: MirrorCreated): void {
  let feed = Feed.load(event.address);
  if (feed == null) {
    return;
  }

  let post = new Post(generateUniquePostId(event.address, event.params.postId));
  post.feed = feed.id;
  post.postType = "Mirror";
  post.content = event.params.content;
  post.creator = event.params.creator;
  post.referenceFeed = event.params.mirrorOfFeed;
  post.referencePost = generateUniquePostId(
    event.params.mirrorOfFeed,
    event.params.mirrorOfPostId
  );
  post.isDeleted = false;
  post.isStarred = false;
  post.createdAt = event.block.timestamp;
  post.save();

  feed.postCount = feed.postCount.plus(BigInt.fromI32(1));
  feed.save();
}

export function handlePostDeleted(event: PostDeleted): void {
  let post = Post.load(
    generateUniquePostId(event.address, event.params.postId)
  );
  if (post == null) {
    return;
  }

  if (post.referencePost) {
    let parentPostId = post.referencePost as string;
    let parentPost = Post.load(parentPostId);
    if (parentPost) {
      if (post.postType == "Reply") {
        parentPost.repliesCount = parentPost.repliesCount.minus(
          BigInt.fromI32(1)
        );
        parentPost.save();
      }
    }
  }

  post.isDeleted = true;
  post.save();

  let feed = Feed.load(post.feed);
  if (feed != null) {
    feed.postCount = feed.postCount.minus(BigInt.fromI32(1));
    feed.save();
  }
}

export function handleFollowed(event: Followed): void {
  //let feed = Feed.load(event.address);
  //if (feed == null) {
  //  return;
  //}
  //
  //let follower = getUser(event.params.follower);
  //
  //if (!feed.followers.includes(follower.id)) {
  //  let newFollowers = feed.followers;
  //  newFollowers.push(follower.id);
  //  feed.followers = newFollowers;
  //  feed.followerCount = feed.followerCount.plus(BigInt.fromI32(1));
  //  feed.save();
  //
  //  // Create an alert for the feed owner
  //  let alert = new Alert(
  //    event.transaction.hash.concatI32(event.logIndex.toI32())
  //  );
  //
  //  alert.type = "follow";
  //
  //  alert.recipient = feed.owner;
  //  alert.payload = [follower.id.toHexString()];
  //  alert.createdAt = event.block.timestamp.toString();
  //  alert.save();
  //}
}

export function handleUnfollowed(event: Unfollowed): void {
  //let feed = Feed.load(event.address);
  //if (feed == null) {
  //  return;
  //}
  //
  //let unfollower = getUser(event.params.follower);
  //
  //let index = feed.followers.indexOf(unfollower.id);
  //if (index > -1) {
  //  let newFollowers = feed.followers;
  //  newFollowers.splice(index, 1);
  //  feed.followers = newFollowers;
  //  feed.followerCount = feed.followerCount.minus(BigInt.fromI32(1));
  //  feed.save();
  //}
}
