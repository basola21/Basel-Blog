import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import configureStore from "./redux/store";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configureStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
);
