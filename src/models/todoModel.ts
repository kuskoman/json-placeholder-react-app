export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoCreateModel = Omit<TodoModel, "id">;
