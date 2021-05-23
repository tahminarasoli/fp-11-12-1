import React from 'react';
import useStyles from './styles';

import { Card, CardHeader, Avatar} from '@material-ui/core';

const Help = () => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <CardHeader
           avatar={
               <Avatar aria-label="recipe" className={classes.avatar}>
                 
               </Avatar>
           }>

           </CardHeader>
       </Card>
    )
}

export default Help;

