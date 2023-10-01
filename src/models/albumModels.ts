export interface AlbumModel {
  userId: number;
  id: number;
  title: string;
}

export type AlbumCreateModel = Omit<AlbumModel, "id">;
