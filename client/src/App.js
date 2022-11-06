import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Tags from './pages/Tags';
import Users from './pages/Users';
import Question from './pages/quetion';
import Question_Detail from './pages/question_detail';
// import { Layout } from './components/Layout/Layout';

import Nav from './components/Layout/Nav/Nav';
import Footer from './components/Layout/Footer/Footer';
import MainPage from './pages/Main';

const App = () => {
  return (
    <RecoilRoot>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/question/:id" element={<Question_Detail />} />
        <Route path="/question" element={<Question />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
};

export default App;
