
import React from 'react';
import ReactDOM from 'react-dom/client';
>>>>>>> 5b12976786669be1646906d529f093a9c64ab560
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import App from "./App";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { StaffPage } from "./pages/StaffPage";
import { StartPage } from "./pages/StartPage";
import "./style/index.css";
=======
} from 'react-router-dom';
import App from './App';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { StaffPage } from './pages/StaffPage';
import { StartPage } from './pages/StartPage';
import './style/index.css';
>>>>>>> 5b12976786669be1646906d529f093a9c64ab560

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="about/:staffname" element={<StaffPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    
=======
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
>>>>>>> 5b12976786669be1646906d529f093a9c64ab560
  </React.StrictMode>
);
