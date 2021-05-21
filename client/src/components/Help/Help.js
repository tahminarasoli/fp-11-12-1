import React from 'react';

import { Grow, Container, Grid } from '@material-ui/core';
import  { Cards } from '../Cards/Cards';
import Form from '../Form/Form';


 const Help = () => {
    return (
        
        <Grow in>
            <Container>
                <Grid container justify="flex-start" alignItems='baseline' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>


                </Grid>

            </Container>
        </Grow>
     
    
    )
};

export default Help;
