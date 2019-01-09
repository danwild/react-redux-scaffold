import React from "react";
import ReactDOM from "react-dom";
import List from "./List.jsx";
import MessageList from "./MessageList.jsx";
import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <Posts />
    </div>
    <div className="row">
      <MessageList />
    </div>
  </div>
);

export default App;