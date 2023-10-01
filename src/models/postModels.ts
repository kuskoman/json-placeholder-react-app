export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostCreateModel = Omit<PostModel, "id">;
