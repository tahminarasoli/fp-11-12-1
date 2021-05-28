import React from "react";
import {Container,  Typography, Grid } from '@material-ui/core';
import useStyles from './styles';


function Services() {
  const classes = useStyles();
  return (
  
    <div>
      <Container component='main' className={classes.root}>
       <Grid  container className={classes.container}>
          
            <Typography   variant='h6' className={classes.paragraph}>
          You might think that going to do your groceries or shopping is 
          easy and fun, but this task is a wish for many people. Vulnerable
          
          people such as old people, people with limited movement, sick

          people... are struggling every time to find someone to help them
         with this task. Moreover, the COVID-19 pandemic deepens this
         issue because of the many restrictions that are imposed on us.
          
          There is a crucial need to develop an app to help these people to
          
          find volunteers easier to help do their groceries and deliver them to
          
          their addresses. At the same time motivate volunteers to connect
        
          and provide this service for free. The App will be an intermediate
         or a link to connect vulnerable people who need to do their
         
          groceries with volunteers who are willing to help. You might be a
         
          volunteer today, but someone who needs volunteers tomorrow!
        </Typography>
      </Grid>
     
      </Container>
    </div>
  );
}

export default Services;
