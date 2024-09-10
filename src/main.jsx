import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from "./pages/home.jsx"
import Settings from "./pages/settings.jsx"
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './components/AuthContext.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store.js';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeContext, { ThemeProvider } from './components/ThemeContext.jsx';
import ParticleBackground2 from './components/ParticleBackground2.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#ffffff"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const RootComponent = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<div>Loading persisted state...</div>} persistor={persistor}>
          <AuthProvider>
            <ThemeProvider>
              <ThemeManagerContainer />
            </ThemeProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
};

const ThemeManagerContainer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const appliedTheme = theme === 'light' ? lightTheme : darkTheme;
        return (
          <MuiThemeProvider theme={appliedTheme}>
            <CssBaseline />
            <ParticleBackground2 />
            <Router>
              <Routes>
                <Route path="/" element={<App theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/home" element={<ProtectedRoute element={<Home theme={theme} toggleTheme={toggleTheme} />} />} />
                <Route path="/settings" element={<ProtectedRoute element={<Settings theme={theme} toggleTheme={toggleTheme} />} />} />
              </Routes>
            </Router>
          </MuiThemeProvider>
        );
      }}
    </ThemeContext.Consumer >
  )
};


root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);


