import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Question from './Pages/quetion';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
