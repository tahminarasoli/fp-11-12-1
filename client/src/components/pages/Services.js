import React from "react";
import {Container,  Typography, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
import home1 from '../../images/home1.png';


function Services() {

  const classes = useStyles();
  return (
  
    <div>
      <Container component='main' className={classes.root}>
       <Grid  container spacing={2} className={classes.container}>
       <Grid item xs={12} sm={12}>
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
      </Grid>
      <Grid 
          container  
          alignItems="row" 
          spacing={3} 
          className={classes.grid} >
          <Grid item  xs={12}
                      sm={12}
                      md={6}
                      lg={3}>
              <Paper 
              className={classes.box1}>
                <Typography 
                className={classes.title} 
                variant='h4'
                >
                  Shop for you
                  </Typography>
                  <Typography 
                  variant='h6' 
                  className={classes.paragraph1}
                   > If getting around the shop  becoming hard for you do not feel burdensome to ask for help. 
                Our team of volunteers are always there to shop for you
                 </Typography>
              </Paper>
            </Grid>
            <Grid item  
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}>
              <Paper 
              className={classes.box}>
              <Typography 
              className={classes.title} 
              variant='h4'
              >
                Shop with you
                </Typography>
              <Typography 
              variant='h6' 
              className={classes.paragraph1}
               >  If being in the shop on your own is a struggle and a difficulty, volunteers can give you a support and escort  you around</Typography>
              </Paper>
            </Grid>
            <Grid  item  
                   xs={12}
                   sm={12}
                   md={6}
                   lg={3}>
              <Paper className={classes.box1}>
              <Typography 
              className={classes.title}  
              variant='h4'
              >
                Deliver to you
                </Typography>
                <Typography 
                variant='h6' 
                className={classes.paragraph1}
                >
                  Volunteers deliver fresh groceries to your door
                  </Typography>
                  <img 
                  src = {home1}  
                  height='140'  
                  alt='girl'/>
                  </Paper>
            </Grid>
          </Grid>
     
     
      </Container>
    </div>
  );

}

export default Services;
