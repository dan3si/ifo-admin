import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AddEventsPage } from 'pages/AddEventsPage';
import { RemoveEventsPage } from 'pages/RemoveEventsPage';
import { MainPage } from 'pages/MainPage';

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

      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/addevents" exact component={AddEventsPage} />
        <Route path="/removeevents" exact component={RemoveEventsPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
