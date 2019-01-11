import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);

// DEBUG - used to globally expose the redux store to console
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;
