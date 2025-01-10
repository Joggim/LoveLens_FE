import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Home';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
