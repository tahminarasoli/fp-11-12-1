import React from 'react';
import  { AppBar,  Avatar, Button, Toolbar, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
 
    
const user = null;

    return (
       
            <AppBar className={classes.appBar} position="static" >
              <div className={classes.brandContainer}>
            <img className={classes.image} src={logo} alt="logo" />
            <Typography component={Link} to ="/" className={classes.heading} variant="h2" >We help with shoping </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
              {user ? (
            <div className={classes.profile}>
             <Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary">Log out</Button>
                  </div>
            ) : (
            <Button component={Link} to="/auth" className={classes.button} fullWidth variant="contained" >Log in</Button>
              )}
           </Toolbar>
            </AppBar>
            
         
           
            
        
            
    );
};

export default Navbar;