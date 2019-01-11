import React from "react";
import PropTypes from "prop-types";

import PostList from "./PostList.jsx";
import MessageList from "./MessageList.jsx";
import PostForm from "./PostForm.jsx";
import ExternalPostList from "./ExternalPostList.jsx";

function HomePage(props) {
  return (
    <div className="container">
      <h1>Crude CRUD with React+Redux</h1>

      <div className="row">
        <div className="col-sm">
          <PostForm />
        </div>
        <div className="col-sm">
          <PostList />
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <MessageList />
        </div>
        <div className="col-sm">
          <ExternalPostList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
