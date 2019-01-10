import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function AboutPage(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          About Page.
        </Typography>
        <Typography component="p">
          You were routed here with{" "}
          <a href="https://reacttraining.com/react-router">react-router-dom</a>.
        </Typography>
      </Paper>
    </div>
  );
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(AboutPage));
