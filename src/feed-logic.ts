import { BigInt } from "@graphprotocol/graph-ts";
import {
  PostCreated,
  ReplyCreated,
  MirrorCreated,
  PostDeleted,
  Followed,
  Unfollowed,
} from "../generated/templates/FeedLogic/FeedLogic";
import { Feed, Post, User } from "../generated/schema";
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
  post.isDeleted = false;
  post.isStarred = false;
  post.createdAt = event.block.timestamp;
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
  let post = Post.load(generateUniquePostId(event.address, event.params.postId));
  if (post == null) {
    return;
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
  let feed = Feed.load(event.address);
  if (feed == null) {
    return;
  }

  let follower = getUser(event.params.follower);

  if (!feed.followers.includes(follower.id)) {
    let newFollowers = feed.followers;
    newFollowers.push(follower.id);
    feed.followers = newFollowers;
    feed.followerCount = feed.followerCount.plus(BigInt.fromI32(1));
    feed.save();
  }
}

export function handleUnfollowed(event: Unfollowed): void {
  let feed = Feed.load(event.address);
  if (feed == null) {
    return;
  }

  let unfollower = getUser(event.params.follower);

  let index = feed.followers.indexOf(unfollower.id);
  if (index > -1) {
    let newFollowers = feed.followers;
    newFollowers.splice(index, 1);
    feed.followers = newFollowers;
    feed.followerCount = feed.followerCount.minus(BigInt.fromI32(1));
    feed.save();
  }
}
