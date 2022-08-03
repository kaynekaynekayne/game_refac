import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import store from "./features/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);