import { PhotoCreateModel, PhotoModel } from "../models/photoModels";
import { BaseService } from "./baseService";

export class PhotosService extends BaseService<PhotoModel, PhotoCreateModel> {
  async getPhotos() {
    return this.getAll("/photos");
  }

  async getPhoto(id: number) {
    return this.get(`/photos/${id}`);
  }

  async createPhoto(photo: PhotoCreateModel) {
    return this.post("/photos", photo);
  }

  async updatePhoto(photo: PhotoModel) {
    return this.put(`/photos/${photo.id}`, photo);
  }

  async deletePhoto(id: number) {
    return this.delete(`/photos/${id}`);
  }

  async getPhotosByAlbumId(albumId: number) {
    return this.getAll(`/photos?albumId=${albumId}`);
  }
}
