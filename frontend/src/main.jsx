import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ReactApp } from "./ReactApp.jsx";
import "./index.css";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ReactApp />
      </Provider>
    </HashRouter>
    {/* <BrowserRouter> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
