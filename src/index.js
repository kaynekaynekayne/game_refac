import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameService from './services/game_service';
import store from "./store";
import { Provider } from "react-redux";

// const gameService=new GameService(process.env.REACT_APP_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);