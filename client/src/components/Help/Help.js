import React from 'react';

import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import home from '../../images/home.png';
import useStyles from './styles';




 const Help = () => {
    const classes = useStyles();

    return (
        <Container component='main' >
       <Paper className={classes.container} elevation={2} >
      <Typography className={classes.paragraph}>Being able to shop for food is an important part of staying well and independent. Vulnerable people such as old people, people with limited movements, sick people... are struggling every time to find someone to help them with this task. Moreover, the COVID-19 pandemic deepens this issue because of the many restrictions that are imposed on us. We help vulnerable people to be in control of what food they purchase with our grocery delivery and escorted supermarket shopping services.
</Typography>
<img className={classes.image} src={home} alt="home" />
</Paper>
<Typography className={classes.header} variant='h4'>Choose Help</Typography>
  <Grid container justify='center' >
  <Button component={Link} to="/" className={classes.button} >I Need a Help</Button>
  <Button component={Link} to="/" className={classes.button} >I Want to Help</Button>
  </Grid>
</Container>
    )
}

export default Help;
