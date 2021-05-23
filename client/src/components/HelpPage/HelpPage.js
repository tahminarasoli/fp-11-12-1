import React from 'react';

import { Grow, Container, Grid } from '@material-ui/core';
import   Helps  from '../Help/Helps';
import Form from '../Form/Form';


 const HelpPage = () => {
    return (
        
        <Grow in>
            <Container>
                <Grid container justify="flex-start" alignItems='baseline' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Helps />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>


                </Grid>

            </Container>
        </Grow>
     
    
    )
};

export default HelpPage;
