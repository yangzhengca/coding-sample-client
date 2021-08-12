import React from "react";
import { AppBar, Typography, } from "@material-ui/core";
import useStyles from "./styles";
import ffun from "../../images/ffun.png";
import { Link } from "react-router-dom";




const Navbar = () => {
  const classes = useStyles();
  
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        
        <img
          className={classes.image}
          src={ffun}
          alt="ffun"
          height="60"
        />
        <Typography component={Link} to='/' className={classes.heading} variant="h4" align="center">
          Dashboard 
        </Typography>
      </div>
     
      <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            
          </div>
    </AppBar>
  );
};

export default Navbar;
