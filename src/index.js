import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { store } from "./store/index";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "react-toastify/dist/ReactToastify.css";
import "@reach/dialog/styles.css";
import 'assets/css/fm.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
