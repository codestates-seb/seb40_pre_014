import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Tags from './Pages/Tags';
import Users from './Pages/Users';

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
