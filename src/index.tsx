import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import App from './App';
import './index.css';

import { setupStore } from './model/store'
const store = setupStore()

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
