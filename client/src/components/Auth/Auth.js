
import React, { useState } from 'react';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';


import useStyles from './styles';
import logo1 from '../../images/logo1.png'
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, register } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phoneNamber: '', city: '', zipCode: '', streetName: '', box: '' };

const Auth = () => {
    const classes =  useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();



    const showPasswordHandler = () => setShowPassword((prevShowPassword) => !prevShowPassword);   //togling off/on

    const submitHandler = (e) => {
        e.preventDefault();
     
        if(isRegister) {
           dispatch(register(formData, history))
        } else {
            dispatch(login(formData, history))
        }
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsRegister((prevIsRegister) => !prevIsRegister);
        showPasswordHandler(false)
      };

   return (
       <Container component='main' maxWidth="xs" >
           <Paper className={classes.paper} elevation={2}>
               <img className={classes.avatar} src={logo1} alt='logo1'height='50'/>
              <Typography variant="h5">{isRegister ? 'Sign Up' : 'Log In'}</Typography>
    <form className={classes.form} onSubmit={submitHandler}>
     <Grid container spacing={2}>
           {
             isRegister && (
                   <>
                   <Input   name="firstName" label="First Name" changeHandler={changeHandler} half />
                   <Input  name="lastName" label="Last Name" changeHandler={changeHandler} half />
                  </>
               )}
               <Input   name ="email" label="Email Address" changeHandler={changeHandler} type="email" />
               <Input   name="password" label="Password" changeHandler={changeHandler} type={showPassword ? "text" : "password"} showPasswordHandler={showPasswordHandler}  />
               { isRegister && (
                   <>
                    <Input name="confirmPassword" label="Repeat Password" changeHandler={changeHandler} type="password" half />
              <Input name="phoneNamber" label="Phone Number" changeHandler={changeHandler} type="phoneNumber" half/> 
              <Input name="city" label="City" changeHandler={changeHandler} type="city"  half /> 
              <Input name="zipCode" label="Zip Code" changeHandler={changeHandler} type="zipCode"  half /> 
               <Input name="streetName" label="Street Name" changeHandler={changeHandler} type="streetName"  half /> 
               <Input name="box" label="Box" changeHandler={changeHandler} type="box"  half/> 
               </>
               )}
               </Grid>
               <Button type="submit" fullWidth variant="contained"  className={classes.submit}>
                   {isRegister ? 'Sign Up' : 'Log In'}
               </Button>
               <Grid container justify="center">
                    <Grid item >
                        <Button  className={classes.switch} variant='contained' onClick={switchMode}>
                            { isRegister ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
               </Grid>
               </form>
           </Paper>
           </Container>
   );
};

export default Auth;
