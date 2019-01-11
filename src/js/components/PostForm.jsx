// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log("handleChange", event.target.value);
    console.log({ [event.target.id]: event.target.value });
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();

    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <div className="row">
        <h6>Add Post</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Forbidden: spam, money"
              value={title}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="submit"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
