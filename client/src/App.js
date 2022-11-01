import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Tags from './Pages/Tags';
import Users from './Pages/Users';
import Question from './Pages/quetion';
import Question_Detail from './Pages/question_detail';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question_detail" element={<Question_Detail />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
