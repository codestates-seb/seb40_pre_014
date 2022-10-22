import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bars from './components/Layout/Bars';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Bars />} />
    </Routes>
  );
};

export default App;
