export interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type CommentCreateModel = Omit<CommentModel, "id">;
