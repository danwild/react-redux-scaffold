import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function AboutPage(props) {
  return (
    <div className="container">
      <h1>About</h1>
      <p>
        You were routed here with{" "}
        <a href="https://reacttraining.com/react-router">react-router-dom</a>.
      </p>
    </div>
  );
}

export default withRouter(AboutPage);
