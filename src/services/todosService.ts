import { TodoCreateModel, TodoModel } from "../models/todoModel";
import { BaseService } from "./baseService";

export class TodosService extends BaseService<TodoModel, TodoCreateModel> {
  async getTodos() {
    return this.getAll("/todos");
  }

  async getTodo(id: number) {
    return this.get(`/todos/${id}`);
  }

  async createTodo(todo: TodoCreateModel) {
    return this.post("/todos", todo);
  }

  async updateTodo(todo: TodoModel) {
    return this.put(`/todos/${todo.id}`, todo);
  }

  async deleteTodo(id: number) {
    return this.delete(`/todos/${id}`);
  }

  async getTodosByUserId(userId: number) {
    return this.getAll(`/todos?userId=${userId}`);
  }
}
