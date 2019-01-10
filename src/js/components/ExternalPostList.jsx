import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chat from "@material-ui/icons/Chat";

export class ExternalPostList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <Grid item xs={12} md={6}>
        <Typography variant="h6">3rd Party Posts</Typography>
        <div>
          <List>
            {this.props.articles.map(el => (
              <ListItem key={el.id}>
                <ListItemAvatar>
                  <Avatar>
                    <Chat />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
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
