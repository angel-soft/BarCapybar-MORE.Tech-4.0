import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
