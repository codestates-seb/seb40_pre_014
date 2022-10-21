import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

//BrowserRouter 추가하면서, react strict mode 삭제했습니다. 추후 문제시 추가하시면 됩니다.
