import React from 'react';
import ReactDOM from 'react-dom/client';

import {MantineProvider} from '@mantine/core';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import {StaffPage} from './pages/StaffPage';
import {StartPage} from './pages/StartPage';
import './style/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}>
      <Route
        index
        element={<StartPage />}
      />
      <Route
        path='about/:staffname'
        element={<StaffPage />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
