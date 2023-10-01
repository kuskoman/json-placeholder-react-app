import { API_URL } from "../consts/api";

type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

export abstract class BaseService<Model, CreateModel> {
  constructor(protected readonly apiUrl: string = API_URL) {}

  protected async get(path: string): Promise<Model> {
    return this.request("GET", path);
  }

  protected async getAll(path: string): Promise<Model[]> {
    return this.request("GET", path);
  }

  protected async post(path: string, body: CreateModel): Promise<Model> {
    return this.request("POST", path, body);
  }

  protected async put(path: string, body: Model): Promise<Model> {
    return this.request("PUT", path, body);
  }

  protected async delete(path: string): Promise<void> {
    return this.request("DELETE", path);
  }

  private async request<T>(method: RequestMethods, path: string, body?: any): Promise<T> {
    const options: RequestInit = { method };
    if (body) {
      options.body = JSON.stringify(body);
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await fetch(`${this.apiUrl}${path}`, options);
    if (!response.ok) {
      throw new Error(`Failed to ${method} ${path}: ${response.statusText}`);
    }
    return response.json();
  }
}
