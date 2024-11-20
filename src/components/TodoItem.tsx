import React, { FC } from 'react';
import { ITodo } from '../types/types.tsx';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = (todo) => {
  
  return (
    <>
      <div>
        <input type='checkbox' checked={todo.todo.completed}/>
        {todo.todo.id} {todo.todo.title}
      </div>
    </>
  );
};
