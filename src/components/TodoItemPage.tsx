import React, { useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface TodoItemPageParams {
  id: string;
}

export const TodoItemPage = () => {
  const [todoInfo, setTodoInfo] = useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>();

  useEffect(() => {
    fetchTodoItem();
  }, []);

  async function fetchTodoItem() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + params.id);
      setTodoInfo(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
    <button>Назад</button>
      <div>
        {todoInfo?.completed} {todoInfo?.id} {todoInfo?.title}
      </div>
    </>
  );
};
