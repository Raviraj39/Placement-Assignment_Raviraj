import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import LoginRedirect from './pages/LoginRedirect';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  const authenticateUser = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setToken('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/login-redirect">
          <LoginRedirect token={token} />
        </Route>
        <Route path="/dashboard">
          {token ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
