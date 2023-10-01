import { PostCreateModel, PostModel } from "../models/postModels";
import { BaseService } from "./baseService";

export class PostsService extends BaseService<PostModel, PostCreateModel> {
  async getPosts() {
    return this.getAll("/posts");
  }

  async getPost(id: number) {
    return this.get(`/posts/${id}`);
  }

  async createPost(post: PostCreateModel) {
    return this.post("/posts", post);
  }

  async updatePost(post: PostModel) {
    return this.put(`/posts/${post.id}`, post);
  }

  async deletePost(id: number) {
    return this.delete(`/posts/${id}`);
  }

  async getPostsByUserId(userId: number) {
    return this.getAll(`/posts?userId=${userId}`);
  }
}
