import { createBrowserRouter, useParams } from 'react-router-dom';
import { UsersPage } from '../components/UsersPage.tsx';
import { TodosPage } from '../components/TodosPage.tsx';
import React from 'react';
import App from '../App.tsx';
import { UserItemPage } from '../components/UserItemPage.tsx';
import { TodoItemPage } from '../components/TodoItemPage.tsx';


  
 export const router = createBrowserRouter([
    { path: '/users', element: <UsersPage /> },
    { path: '/todos', element: <TodosPage /> },
    { path: '*', element: <App /> },
    {path: '/users/:id', element: <UserItemPage/>},
    {path: '/todos/:id', element: <TodoItemPage/>}

  ]);


