import React from "react"; // ✅ Required for JSX

import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./Components/Blog/Redux/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);