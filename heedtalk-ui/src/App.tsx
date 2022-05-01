import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  index element={<LoginPage />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
