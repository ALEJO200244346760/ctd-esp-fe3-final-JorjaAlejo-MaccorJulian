//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//React Router
import { RouterProvider } from 'react-router-dom';
import router from './Components/utils/react-router.config';

//Global Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

