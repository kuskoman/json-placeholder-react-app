import { CommentsService } from "./commentsService";

describe(`${CommentsService.name} instance`, () => {
  const service = new CommentsService();
  const exampleComment = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "e@mail.com",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis",
  };

  const exampleCommentCreateModel = { ...exampleComment, id: undefined };

  describe("getComments", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.getComments();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getComment", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getComment(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getComment(0)).rejects.toThrow("Failed to GET /comments/0: Not Found");
    });
  });

  describe("createComment", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createComment(exampleCommentCreateModel);
      expect(response.name).toEqual(exampleCommentCreateModel.name);
    });
  });

  describe("updateComment", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.updateComment(exampleComment);
      expect(response.name).toEqual(exampleComment.name);
    });
  });

  describe("deleteComment", () => {
    it("should return response when fetch is successful", async () => {
      await expect(service.deleteComment(1)).resolves.not.toThrow();
    });
  });

  describe("getCommentsByPostId", () => {
    it("should return response when fetch is successful", async () => {
      const postId = 1;
      const response = await service.getCommentsByPostId(postId);
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
