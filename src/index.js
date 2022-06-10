import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <Provider store={store}>
        <App />
      </Provider>
    </Routers>
  </React.StrictMode>,
);
