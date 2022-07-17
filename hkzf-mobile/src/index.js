import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import store, { persistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

);
