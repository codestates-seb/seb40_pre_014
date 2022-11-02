import React from 'react';
import { RecoilRoot } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Tags from './Pages/Tags';
import Users from './Pages/Users';
import Question from './Pages/quetion';
import Question_Detail from './Pages/question_detail';
// import { Layout } from './components/Layout/Layout';

import Nav from './components/Layout/Nav/Nav';
import Footer from './components/Layout/Footer/Footer';
import MainPage from './Pages/Main';

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
        <Route path="/question_detail" element={<Question_Detail />} />
        <Route path="/question" element={<Question />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
};

export default App;
