import React from "react";
import PropTypes from "prop-types";

// Routing
import { Route, Link } from "react-router-dom";
import {} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
const Index = () => <HomePage />;
const About = () => <AboutPage />;

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/" className="navbar-brand">
            React+Redux
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">
                Home
              </a>
              <a className="nav-item nav-link" href="/about">
                About
              </a>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default Nav;
