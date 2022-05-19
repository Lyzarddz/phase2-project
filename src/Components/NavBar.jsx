import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  green: {
    backgroundColor: "#8fbc8f" 
  },
  gray: {
    backgroundColor: "#778899"
  }

}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className= {classes.green}>
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
            PlantyFo
          </Typography>
          <Button color="inherit" to="/" component={ Link }>Home </Button> 
          <Button color="inherit" to="/login" component={ Link }>Login</Button> 
          <Button color="inherit" to="/signup" component={ Link }>Sign Up</Button> 
          <Button color="inherit" to="/create" component={ Link }>Add PlantyFo</Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;





