import { BaseService } from "./baseService";

interface TestModel {
  id: number;
}

class ClassExtendingBaseService extends BaseService<TestModel, TestModel> {
  public getModel(path: string) {
    return this.get(path);
  }

  public createModel(path: string, body: TestModel) {
    return this.post(path, body);
  }

  public updateModel(path: string, body: TestModel) {
    return this.put(path, body);
  }

  public deleteModel(path: string) {
    return this.delete(path);
  }
}

const service = new ClassExtendingBaseService();

describe(`Class extending ${BaseService}`, () => {
  describe("get", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getModel(`/todos/${id}`);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getModel("/todos/invalid")).rejects.toThrow("Failed to GET /todos/invalid: Not Found");
    });
  });

  describe("post", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createModel("/todos", { id: 201 });
      expect(response.id).toEqual(201);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.createModel("/invalid", { id: 1 })).rejects.toThrow("Failed to POST /invalid: Not Found");
    });
  });

  describe("put", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.updateModel("/posts/1", { id });
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.updateModel("/invalid", { id: 1 })).rejects.toThrow("Failed to PUT /invalid: Not Found");
    });
  });
});
