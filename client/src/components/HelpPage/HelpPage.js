import React, { useState } from "react";

import { Grow, Container, Grid } from "@material-ui/core";
import Helps from "../Help/Helps";
import Form from "../Form/Form";

const HelpPage = () => {
    const [wantsToHelp, setWantsToHelp] = useState(false);
    const [currentId, setCurrentId] = useState(false);
    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="baseline"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Helps
                            wantsTohelp={wantsToHelp}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form
                            wantsToHelp={wantsToHelp}
                            setWantsToHelp={setWantsToHelp}
                            currentId={currentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default HelpPage;
