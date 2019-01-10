import React from "react";
import { connect } from "react-redux";

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';

// this is not the right way to do this..
// (not using theme base)
const styles = {
  list: {
    textAlign: 'right'
  },
  typography: {
    textAlign: 'left',
    marginLeft: '80px'
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};
const ConnectedList = ({ messages }) => (
  <Grid container justify='flex-end'>
  <Grid item xs={8}>
    <Typography variant="h6" style={styles.typography}>
      Error Messages
    </Typography>
    <div>
      <List style={styles.list}>
        {messages.map(el => (
          <ListItem key={el.id}>
            <ListItemAvatar>
              <Avatar>
                <ErrorIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={el.message}
            />
          </ListItem>
        ))}
      </List>
    </div>
  </Grid>
  </Grid>
  
);
const MessageList = connect(mapStateToProps)(ConnectedList);
export default MessageList;