import React from 'react';
import {createRoot} from 'react-dom';
import App from './App';
import { Store } from './Store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider> 
)



