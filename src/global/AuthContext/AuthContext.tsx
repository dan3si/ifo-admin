import React, { useState } from 'react';
import API_URL from 'global/API';

const contextObject: any = null;
export const AuthContext = React.createContext(contextObject);

export const AuthProvider = ({ children }: any) => {
  const cookieAuthToken = document.cookie
  .split(';')
  .find(((el: string) => el.includes('authToken')))
  ?.split('=')[1];

  const [authToken, setAuthToken] = useState(cookieAuthToken || '');

  const setAuth = async (password: string) => {
    const response = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      body: password,
    });
    
    const data = await response.text();

    if (data === 'invalid') {
      return 'invalid';
    }
    
    setAuthToken(data);
    document.cookie = `authToken=${data}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
    return 'success';
  }

  const checkAuth = async (history: any) => {
    const response = await fetch(`${API_URL}/auth/check`, {
      method: 'POST',
      body: authToken,
    })

    const result = await response.text();

    if (result === 'invalid') {
      document.cookie = 'authToken=';
      setAuthToken('');
      history.push('/signin');
      return false;
    }

    return true;
  }

  return (
    <AuthContext.Provider value={{ setAuth, checkAuth, authToken }}>
      {children}
    </AuthContext.Provider>
  );
}
