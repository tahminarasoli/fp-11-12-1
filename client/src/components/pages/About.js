import React from "react";
import home  from '../../images/home.png';

import {Container,  Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function About() {

  const classes = useStyles();
  return (
    <div>
     <Container component='main' className={classes.root}>
       <Grid  container spacing={2} className={classes.container}>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Typography   variant='h6' className={classes.paragraph}>
          This is the final project from HYF class 11-12 group-1 students. In
            this project, we tried to give a bit back to society and participate
            in solving or at least lower an existing social problem and propose
            a solution for it. The issue that is addressed in this project is
            the challenge that vulnerable people such as old people, people with
            limited movement, sick people, etc... are facing to do their
            groceries and bring them to their address without extra costs. The
            goal of this app is to link those people who need help with their
            groceries to volunteers who are willing to help.
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
          <img  src={home} alt="home" align='right' width='100%' height='380' className={classes.image}/>
          </Grid>
      </Grid>
       
        </Container>
            
      
    </div>
  );
   
}

export default About;
