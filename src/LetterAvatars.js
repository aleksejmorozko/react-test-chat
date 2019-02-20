import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';
import { StepButton } from '@material-ui/core';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
};

function LetterAvatars(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>{props.children}</Avatar>
    </Grid>
  );
}

function makeTbut(sSt){
  var stBut='';
  if (sSt.length > 0){

  }
  return stBut;
}


LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);