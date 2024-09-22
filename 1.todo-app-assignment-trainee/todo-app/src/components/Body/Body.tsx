import React, { useState, useEffect } from 'react';
import './Body.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Body = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'notCompleted'>('all');
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoItem: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleToggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as 'all' | 'completed' | 'notCompleted');
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all':
        return true;
      case 'completed':
        return todo.completed;
      case 'notCompleted':
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">+</button>
      </form>
      <div className='filter'>
        <h4>List</h4>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="notCompleted">To do</option>
        </select>
      </div>
      <ol>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'gray' : 'black' ,
                cursor: 'pointer',
              }}
              onClick={() => handleToggleCompleted(todo.id)}
            >
               {todo.text}
            </span>
            <button className='delete' onClick={() => handleDelete(todo.id)}>-</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Body;