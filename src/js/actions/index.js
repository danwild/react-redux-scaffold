import { ADD_ARTICLE, DELETE_ARTICLE, HANDLE_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function deleteArticle(payload) {
  return { type: DELETE_ARTICLE, payload }
};

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}