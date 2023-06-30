//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//React Router
import { RouterProvider } from 'react-router-dom';
import  { ContextProvider, router } from 'Components/utils';

//Global Styles
import './index.css';
import './extra.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
);

