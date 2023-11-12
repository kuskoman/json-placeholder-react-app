import { CommentCreateModel, CommentModel } from "../models/commentModels";
import { BaseService } from "./baseService";

export class CommentsService extends BaseService<CommentModel, CommentCreateModel> {
  async getComments() {
    return this.getAll("/comments");
  }

  async getComment(id: number) {
    return this.get(`/comments/${id}`);
  }

  async createComment(comment: CommentCreateModel) {
    return this.post("/comments", comment);
  }

  async updateComment(comment: CommentModel) {
    return this.put(`/comments/${comment.id}`, comment);
  }

  async deleteComment(id: number) {
    return this.delete(`/comments/${id}`);
  }

  async getCommentsByPostId(postId: number) {
    return this.getAll(`/comments?postId=${postId}`);
  }
}
