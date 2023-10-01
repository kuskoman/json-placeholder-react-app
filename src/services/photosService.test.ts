import { PhotosService } from "./photosService";

describe(`${PhotosService.name} instance`, () => {
  const service = new PhotosService();

  const examplePhoto = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  };

  const examplePhotoCreateModel = { ...examplePhoto, id: undefined };

  describe("getPhotos", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.getPhotos();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getPhoto", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getPhoto(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getPhoto(0)).rejects.toThrow("Failed to GET /photos/0: Not Found");
    });
  });

  describe("createPhoto", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createPhoto(examplePhotoCreateModel);
      expect(response.title).toEqual(examplePhotoCreateModel.title);
    });
  });

  describe("updatePhoto", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.updatePhoto(examplePhoto);
      expect(response.title).toEqual(examplePhoto.title);
    });
  });

  describe("deletePhoto", () => {
    it("should return response when fetch is successful", async () => {
      await expect(service.deletePhoto(1)).resolves.not.toThrow();
    });
  });

  describe("getPhotosByAlbumId", () => {
    it("should return response when fetch is successful", async () => {
      const albumId = 1;
      const response = await service.getPhotosByAlbumId(albumId);
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
