import React from 'react';
import Help from './Help/Help';
import useStyles from './styles';
import { Grid, } from '@material-ui/core';
import { useSelector } from 'react-redux';

 const Helps = () => {
    const helps = useSelector((state) => state.helps);
    const classes = useStyles();

    console.log(helps)
    
    return (
        
        <Grid className={classes.container} container alignItems='stretch' spacing={3} >
       
            <Grid  item xs={12} sm={6}>
               <Help  />
                </Grid>
        

        </Grid>
    )   
};

export default Helps;