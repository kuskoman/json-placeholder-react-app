import { AlbumsService } from "./albumsService";

describe(`${AlbumsService.name} instance`, () => {
  const service = new AlbumsService();

  const exampleAlbum = {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  };

  const exampleAlbumCreateModel = { ...exampleAlbum, id: undefined };

  describe("getAlbums", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.getAlbums();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getAlbum", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getAlbum(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getAlbum(0)).rejects.toThrow("Failed to GET /albums/0: Not Found");
    });
  });

  describe("createAlbum", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createAlbum(exampleAlbumCreateModel);
      expect(response.title).toEqual(exampleAlbumCreateModel.title);
    });
  });

  describe("updateAlbum", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.updateAlbum(exampleAlbum);
      expect(response.title).toEqual(exampleAlbum.title);
    });
  });

  describe("deleteAlbum", () => {
    it("should return response when fetch is successful", async () => {
      await expect(service.deleteAlbum(1)).resolves.not.toThrow();
    });
  });
});
