import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

// MUI
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

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
      <Grid item xs={12} md={6}>
        <Typography variant="h6">My posts</Typography>
        <div>
          <List>
            {this.props.articles.map(el => (
              <ListItem key={el.id}>
                <ListItemAvatar>
                  <Avatar>
                    <LibraryBooks />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el.title} />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon onClick={() => this.handleClick(el.id)} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    );
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
export default PostList;
