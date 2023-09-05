import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
root.render(
    <h1> Hello </h1>
);*/
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
/*
const customStyle = {
  color: "red",
  border: "1px solid black"
}

customStyle.color = "blue";
*/


root.render(
  <App />
);
