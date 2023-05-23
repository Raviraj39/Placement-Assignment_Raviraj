import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
