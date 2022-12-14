import { AppBar, Button, IconButton, Typography, Toolbar } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fkexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign:"left"
    },
    link:{
        textDecoration : "none",
        boxShadow : "none",
        color : "white"
    }
}));
function Navbar(){
    let userId = 5;
    const classes = useStyles();

    return(
        <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.link} to="/">Home</Link>
          </Typography>
          <Typography variant="h6">
          <Link className={classes.link} to={'/users/'  + userId}>User</Link>
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar;