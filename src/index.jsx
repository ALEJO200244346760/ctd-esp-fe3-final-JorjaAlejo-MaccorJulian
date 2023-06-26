//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './Components/utils/global.context';

//React Router
import { RouterProvider } from 'react-router-dom';
import router from './Components/utils/react-router.config';

//Global Styles
import './index.css';
import './extra.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

