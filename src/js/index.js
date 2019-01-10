import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// DEBUG - used to globally expose the redux store to console
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;