import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/container/App.jsx";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  document.getElementById("app")
//   document.getElementById("root")
);

// DEBUG - globally expose the redux store
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;