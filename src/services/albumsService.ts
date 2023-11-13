import { AlbumCreateModel, AlbumModel } from "../models/albumModels";
import { BaseService } from "./baseService";

export class AlbumsService extends BaseService<AlbumModel, AlbumCreateModel> {
  async getAlbums(page = 1, limit = 10) {
    return this.getAll(`/albums?_page=${page}&_limit=${limit}`);
  }

  async getAlbum(id: number) {
    return this.get(`/albums/${id}`);
  }

  async createAlbum(album: AlbumCreateModel) {
    return this.post("/albums", album);
  }

  async updateAlbum(album: AlbumModel) {
    return this.put(`/albums/${album.id}`, album);
  }

  async deleteAlbum(id: number) {
    return this.delete(`/albums/${id}`);
  }

  async getAlbumsByUserId(userId: number) {
    return this.getAll(`/albums?userId=${userId}`);
  }
}
