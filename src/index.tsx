import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import './app/layout/style.css';
import { store, StoreContext } from './app/stores/store';
import { BrowserRouter } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)

root.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StoreContext.Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
