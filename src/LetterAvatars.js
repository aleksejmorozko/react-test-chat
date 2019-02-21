import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
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
  blueGrey: {
    margin: 10,
    color: '#fff',
    backgroundColor: blueGrey[500],
  },
  blue: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
  },
  green: {
    margin: 0,
    color: '#fff',
    backgroundColor: green[500],
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  var avColor= classes.green;
  var pName='';
  switch (props.avType){
    case 'chat': avColor = classes.green; break;
    case 'name': avColor = classes.blue; pName=props.children; break;
  }
  
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={avColor}>{makeTbut(props.children)}</Avatar>{pName}
    </Grid>
  );
}


function makeTbut(sSt){
  var stBut='';
  var stAr=sSt.split(/\s/);
  
  if (stAr.length > 1){
    stAr.forEach(element => {
      stBut=stBut + element[0].toUpperCase();
    });
  }else{
    stBut=sSt[0].toUpperCase();
  }
  return stBut;
}


LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);