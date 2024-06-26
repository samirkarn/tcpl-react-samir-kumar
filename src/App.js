import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products'; 
import Orders from './components/Orders';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
