import { UserCreateModel, UserModel } from "../models/userModels";
import { BaseService } from "./baseService";

export class UsersService extends BaseService<UserModel, UserCreateModel> {
  async getUsers() {
    return this.getAll("/users");
  }

  async getUser(id: number) {
    return this.get(`/users/${id}`);
  }

  async createUser(user: UserCreateModel) {
    return this.post("/users", user);
  }

  async updateUser(user: UserModel) {
    return this.put(`/users/${user.id}`, user);
  }

  async deleteUser(id: number) {
    return this.delete(`/users/${id}`);
  }
}
