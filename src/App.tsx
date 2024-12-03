import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FaceVerificationPage from './pages/FaceVerification/FaceVerification';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verification" element={<FaceVerificationPage />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
