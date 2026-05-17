import TodoItem from './TodoItem';
import { type TodosListProps } from '../types/todo-type';

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodosListProps) {
  return (
    <div className='flex flex-col gap-2'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
