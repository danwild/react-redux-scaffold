import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  };
}

class ConnectedList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log("handleClick");
    console.log(id);
    event.preventDefault();
    this.props.deleteArticle({ id });
  }

  render() {
    return (
      <div>
        <div className="row my-posts">
          <h6>My Posts</h6>
          <ul className="list-group">
            {this.props.articles.map(el => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={el.id}
              >
                {el.title}
                <span
                  className="badge badge-primary badge-pill"
                  onClick={() => this.handleClick(el.id)}
                >
                  <i className="fa fa-trash" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default PostList;
