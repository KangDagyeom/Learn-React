// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginForm from './components/LoginForm';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;