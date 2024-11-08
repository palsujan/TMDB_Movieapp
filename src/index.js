import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from "axios";
import { REACT_APP_ACCESS } from './utlis/constants';
import { Provider } from 'react-redux';
import { store } from './utlis/store';

// Setup axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${REACT_APP_ACCESS}`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <React.StrictMode>
        <RouterProvider router={router}/>
          {/* <App />
        </RouterProvider> */}
      </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
