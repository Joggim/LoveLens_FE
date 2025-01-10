import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CameraPage from './pages/Camera/Camera';
import ProfileSetupPage from './pages/ProfileSetup/ProfileSetup';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/camera',
    element: <CameraPage />,
  },
  {
    path: '/profile-setup',
    element: <ProfileSetupPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
