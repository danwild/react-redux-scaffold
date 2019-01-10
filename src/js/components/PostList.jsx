import React from "react";
import { connect } from "react-redux";

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

const mapStateToProps = state => {
  return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
  <Grid item xs={12} md={6}>
    <Typography variant="h6">
      My posts
    </Typography>
    <div>
      <List>
        {articles.map(el => (
          <ListItem key={el.id}>
            <ListItemAvatar>
              <Avatar>
                <LibraryBooks />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={el.title}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  </Grid>
);
const PostList = connect(mapStateToProps)(ConnectedList);
export default PostList;