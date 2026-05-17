import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import { type TodoType } from '../types/todo-type';

export default function TodoForm() {
  const [todos, setTodos] = useState<Array<TodoType>>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const svg = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  );

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        todoName: input,
        done: false,
      },
    ]);
    setInput('');
  }

  return (
    <div className='flex flex-col gap-4'>
      <form
        onSubmit={handleSubmit}
        className='max-w-100 flex justify-between gap-5'
      >
        <input
          type='text'
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder='Write todo...'
          className='rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)] px-4 py-2 w-full focus:outline-0 focus:ring  focus:ring-green-400'
        />
        <button
          type='submit'
          className='p-2 shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-2xl transition-shadow active:shadow-none duration-100 cursor-pointer'
        >
          {svg}
        </button>
      </form>
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}
