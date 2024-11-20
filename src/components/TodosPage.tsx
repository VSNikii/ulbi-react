import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types.tsx';
import axios from 'axios';
import { List } from './List.tsx';
import { TodoItem } from './TodoItem.tsx';

export const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      alert(e.message);
    }
  }
  
  return (
    <>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </>
  );
};
