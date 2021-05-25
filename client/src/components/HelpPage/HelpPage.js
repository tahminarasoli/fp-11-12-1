import React, { useState, useEffect } from "react";

import { Grow, Container, Grid, Paper, TextField, AppBar, Button } from "@material-ui/core";
import Paginate from  '../../Pagination'
import Helps from "../Help/Helps";
import Form from "../Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const HelpPage = () => {
    const classes = useStyles();
    const [wantsToHelp, setWantsToHelp] = useState(false);
    const [currentId, setCurrentId] = useState(false);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                    className={classes.gridContainer}
                >
                      
                    <Grid item xs={12} sm={6} md={9}>
                        <Helps
                            wantsToHelp={wantsToHelp}
                            setCurrentId={setCurrentId}
                        />
                      
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Form
                            wantsToHelp={wantsToHelp}
                            setWantsToHelp={setWantsToHelp}
                            currentId={currentId}
                        />
                            <Paginate align='center'/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default HelpPage;
