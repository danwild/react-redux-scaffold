import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class ExternalPostList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <div className="row">
          <h6>3rd Party Posts</h6>
        </div>
        <div className="row external-posts">
          <ul className="list-group">
            {this.props.articles.map(el => (
              <li className="list-group-item" key={el.id}>
                <i className="fa fa-user" />
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(ExternalPostList);
