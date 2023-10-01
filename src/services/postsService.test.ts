import { PostsService } from "./postsService";

describe(`${PostsService.name} instance`, () => {
  describe("getPosts", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      const response = await service.getPosts();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getPost", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      const id = 1;
      const response = await service.getPost(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      const service = new PostsService();
      await expect(service.getPost(0)).rejects.toThrow("Failed to GET /posts/0: Not Found");
    });
  });

  describe("createPost", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      const examplePost = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
      };
      const examplePostCreateModel = { ...examplePost, id: undefined };
      const response = await service.createPost(examplePostCreateModel);
      expect(response.title).toEqual(examplePostCreateModel.title);
    });
  });

  describe("updatePost", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      const examplePost = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
      };
      const response = await service.updatePost(examplePost);
      expect(response.title).toEqual(examplePost.title);
    });
  });

  describe("deletePost", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      await expect(service.deletePost(1)).resolves.not.toThrow();
    });
  });

  describe("getPostsByUserId", () => {
    it("should return response when fetch is successful", async () => {
      const service = new PostsService();
      const userId = 1;
      const response = await service.getPostsByUserId(userId);
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
