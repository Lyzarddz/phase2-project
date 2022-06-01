import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { GiMonsteraLeaf} from "react-icons/gi";
import { FaLeaf} from "react-icons/fa"

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

function NavBar({ loggedIn, logoutUser}) {
  const classes = useStyles();

  function logout(e) {
    e.preventDefault();
    logoutUser();
    
  }

  function loggedInLinks(){
    return (
      <ul>
        <FaLeaf/>
         <Button color="inherit" to="/" component={ Link }>Home </Button> 
         <FaLeaf/>
         <Button color="inherit" to="/create" component={ Link }>Add PlantyFo</Button> 
         <li>
           
           <a href="#" onClick={logout}>Logout
           </a>
           </li>
      </ul>
    )
  }

  function loggedOutLinks(){
    return(
      <ul >
        <FaLeaf />
          <Button color="inherit" to="/" component={ Link }>Home </Button> 
          <FaLeaf/>
          <Button color="inherit" to="/login" component={ Link }>Login</Button> 
          <FaLeaf/>
          <Button color="inherit" to="/signup" component={ Link } >Sign Up</Button> 
      </ul>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className= {classes.green}>
        <Toolbar>
          <h1 className='largeText'>   <GiMonsteraLeaf/></h1>
          <Typography variant="h4" className={classes.title}> 
            PlantyFo
          </Typography>
        { loggedIn ? loggedInLinks() :  loggedOutLinks()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;





