import { PublicationStarred } from "../generated/StarPublications/StarPublications";
import { Post, Alert } from "../generated/schema";
import { generateUniquePostId } from "./utils";

export function handlePublicationStarred(event: PublicationStarred): void {
  let feedAddress = event.params.feedAddress;
  let postId = event.params.postId;

  let uniquePostId = generateUniquePostId(feedAddress, postId);
  let post = Post.load(uniquePostId);
  if (post == null) {
    return;
  }

  post.isStarred = true;
  post.save();
}
