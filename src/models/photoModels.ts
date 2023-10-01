export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type PhotoCreateModel = Omit<PhotoModel, "id">;
