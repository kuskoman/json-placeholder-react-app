import { TodosService } from "./todosService";

describe(`${TodosService.name} instance`, () => {
  const service = new TodosService();

  const exampleTodo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  const exampleTodoCreateModel = { ...exampleTodo, id: undefined };

  describe("getTodos", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.getTodos();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getTodo", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getTodo(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getTodo(0)).rejects.toThrow("Failed to GET /todos/0: Not Found");
    });
  });

  describe("createTodo", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createTodo(exampleTodoCreateModel);
      expect(response.title).toEqual(exampleTodoCreateModel.title);
    });
  });

  describe("updateTodo", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.updateTodo({
        ...exampleTodo,
        completed: !exampleTodo.completed,
      });
      expect(response.completed).toEqual(!exampleTodo.completed);
    });
  });

  describe("deleteTodo", () => {
    it("should return response when fetch is successful", async () => {
      await expect(service.deleteTodo(1)).resolves.not.toThrow();
    });
  });
});
