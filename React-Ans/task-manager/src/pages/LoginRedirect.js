import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginRedirect = ({ token }) => {
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push('/dashboard');
    }
  }, [token, history]);

  return <div>Redirecting...</div>;
};

export default LoginRedirect;
