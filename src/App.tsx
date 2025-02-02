import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Home';
import LikePage from './pages/Like/Like';
import ChatPage from './pages/Chat/Chat';
import MyPage from './pages/MyPage/MyPage';
import LoginPage from './pages/Login/Login';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/like',
    element: <LikePage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
