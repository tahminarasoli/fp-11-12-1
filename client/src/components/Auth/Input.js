import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from  '@material-ui/core';

import useStyles from './styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


 const Input = ( { name, changeHandler,label, half, autoFocus, type, showPasswordHandler,required  }) => {
    const classes = useStyles();
    return (
  <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
            className={classes.input}
            name={name}
            onChange={changeHandler}
            variant="outlined"
            required={required}
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' || name === "confirmPassword" ? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={showPasswordHandler}>
                            {type ==="password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
             } : null }
            />
            </Grid>
            );
            };

export default Input;