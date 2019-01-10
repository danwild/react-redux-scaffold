// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

// MUI
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Icon } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
const styles = {
  textField: {
    width: 300,
  },
};

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
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (

      <div>
        <Typography variant="h6">
          Add Post
        </Typography>

        <form onSubmit={this.handleSubmit}> 
          <div className="form-group">

            <TextField
              id="title"
              label="Title"
              style={styles.textField}
              value={title}
              onChange={this.handleChange}
              margin="normal"
            />

          </div>

          <Button variant="contained" color="primary" type="submit">
            Add <Icon>add</Icon>
          </Button>
        </form>
      </div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;