import React from 'react';


import { Typography, Container, Paper, Grid } from '@material-ui/core';

import home2 from '../../images/home2.png';
import home1 from '../../images/home1.png';
import ReactPlayer from 'react-player';
import useStyles from './styles';


const Showcase = () => {
    const classes = useStyles();

    return (
      <div>
      <Container component='main' className={classes.root}>
        <Grid container spacing={2} className={classes.container} >
          
        <Grid item xs={12} sm={12} md={6} lg={6} >
          
        <ReactPlayer
        className ={classes.reactplayer}
        url="https://youtu.be/o9NAY3BrV7o"
        width = "400px"
        height = "300px"
        align='center'
      
/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} >
          <Typography  variant='h6' className={classes.paragraph}>Being able to shop for food is an important part of staying well and independent. Vulnerable people such as old people, people with limited movements, sick people... are struggling every time to find someone to help them with this task. Moreover, the COVID-19 pandemic deepens this issue because of the many restrictions that are imposed on us. We help vulnerable people to be in control of what food they purchase with our grocery delivery and escorted supermarket shopping services.
                </Typography>
               </Grid>
               </Grid>

               <Grid container spacing={2} >
          
            <Grid item xs={12} sm={12} md={6} lg={6}  >
            <Typography align='center'  variant='h3'className={classes.heading} >Services</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <img  src={home2} alt="home"  height='300' className={classes.image}/>
          </Grid>
         </Grid>
        <Grid/>
          <Grid container  alignItems="row" spacing={3} className={classes.grid} >
          <Grid item  xs={12}
                                sm={12}
                                md={6}
                                lg={3}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} variant='h4'>Shop for you</Typography>
                  <Typography variant='h6' className={classes.paragraph1} > If getting around the shop  becoming hard for you do not feel burdensome to ask for help. 
                Our team of volunteers are always there to shop for you </Typography>
              </Paper>
            </Grid>
            <Grid item  xs={12}
                                sm={12}
                                md={6}
                                lg={3}>
              <Paper className={classes.paper1}>
              <Typography className={classes.title} variant='h4'>Shop with you</Typography>
              <Typography variant='h6' className={classes.paragraph1} >  If being in the shop on your own is a struggle and a difficulty, volunteers can give you a support and escort  you around</Typography>
              </Paper>
            </Grid>
            <Grid  item  xs={12}
                                sm={12}
                                md={6}
                                lg={3}>
              <Paper className={classes.paper}>
              <Typography className={classes.title}  variant='h4'>Deliver to you</Typography>
                <Typography variant='h6' className={classes.paragraph1}>Volunteers deliver fresh groceries to your door</Typography>
                  <img src = {home1}  height='140'  alt='girl'/>
                  </Paper>
            </Grid>
          </Grid>
       
      
     
 
  </Container>
 
    </div>
  );
};
      
    


export default Showcase;
