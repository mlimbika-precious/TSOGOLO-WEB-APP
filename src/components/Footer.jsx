import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
