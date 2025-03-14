import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.js'
import { Provider } from 'react-redux'
import reduxStore from './redux.js'
import { BrowserRouter } from "react-router-dom"
const {store, persistor}= reduxStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </PersistGate>
 </Provider>
);