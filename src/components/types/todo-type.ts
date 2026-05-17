export type TodoType = {
  id: string;
  todoName: string;
  done: boolean;
};

export type TodosListProps = {
  todos: Array<TodoType>;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type TodoItemProps = {
  todo: TodoType;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
