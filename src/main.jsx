import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import App from './App.jsx';

const isAuthenticated = true; // or false depending on your authentication logic

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route */}
        {/*   path="/private" */}
        {/*   element={ */}
        {/*     <PrivateRoute> */}
        {/*       <Home /> */}
        {/*     </PrivateRoute> */}
        {/*   } */}
        {/*   isAuthenticated={isAuthenticated} */}
        {/*   redirectPath="/login" */}
        {/* /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

