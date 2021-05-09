import React from 'react';
import  {  Avatar, Button, Toolbar, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    
const user = null;

    return (
       
            <div className="app-bar">
            <img className="image" src={logo} alt="logo" />
            <h1 component={Link} to ="/" className="heading" >We help with shoping </h1>
            <Toolbar className="toolbar">
              {user ? (
            <div className="profile">
             <Avatar className="purple" src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
              <Typography className="user-name" variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className="logout" color="secondary">Log out</Button>
                  </div>
            ) : (
            <Button component={Link} to="/auth" className="button" variant="contained" >Log in</Button>
              )}
           </Toolbar>
            </div>
            
         
           
            
        
            
    );
};

export default Navbar;