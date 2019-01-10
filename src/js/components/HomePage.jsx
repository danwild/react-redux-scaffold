import React from "react";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Code from "@material-ui/icons/Code";

import PostList from "./PostList.jsx";
import MessageList from "./MessageList.jsx";
import PostForm from "./PostForm.jsx";
import ExternalPostList from "./ExternalPostList.jsx";

// custom styles
import { DARK_GREY } from "../styles/colors";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    textAlign: "center",
    marginBottom: "50px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  typography: {
    textAlign: "center",
    padding: theme.spacing.unit * 2,
    color: DARK_GREY
  },
  icon: {
    fontSize: "60px",
    top: "13px",
    position: "relative"
  }
});

function HomePage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography
            className={classes.typography}
            component="h2"
            variant="h2"
            gutterBottom
          >
            Crude CRUD with React+Redux <Code className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={6} className={classes.grid}>
          <PostForm />
        </Grid>

        <Grid item xs={6} className={classes.grid}>
          <PostList />
        </Grid>

        <Grid item xs={6} className={classes.grid}>
          <MessageList />
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <ExternalPostList />
        </Grid>
      </Grid>
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
