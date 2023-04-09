import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter basename={'/'}>
      <App />
    </HashRouter>
  </Provider>
);

reportWebVitals();