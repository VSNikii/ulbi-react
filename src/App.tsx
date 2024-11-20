import { BrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { router } from './route/Routes';
import React from 'react';

function App() {
  return (
    <>
      
        <div>
          <h1>Страница по умолчанию</h1>
            <Link to="/users">Пользователи</Link>
            <Link to="/todos">Задачи</Link>
        </div>
    </>
  );
}

export default App;
