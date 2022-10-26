import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/login';
import Signup from './pages/signup';
import Tags from './pages/Tags';
import Users from './pages/Users';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
