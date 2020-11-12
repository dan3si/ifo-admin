import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AddEventsPage } from 'pages/AddEventsPage';
import { RemoveEventsPage } from 'pages/RemoveEventsPage';
import { MainPage } from 'pages/MainPage';
import { SignInPage } from 'pages/SignInPage';
import { AuthProvider } from 'global/AuthContext';

function App() {
  return (
    <>
      <head>
        <link
          rel="shortcut icon"
          href="./logo.png"
          type="image/png"
        />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
      </head>

      <AuthProvider>
        <BrowserRouter>
          <Route path="/" exact component={MainPage} />
          <Route path="/addevents" exact component={AddEventsPage} />
          <Route path="/removeevents" exact component={RemoveEventsPage} />
          <Route path="/signin" exact component={SignInPage} />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
