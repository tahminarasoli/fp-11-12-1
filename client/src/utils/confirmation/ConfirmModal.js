import React from "react";

import { Button, Grid, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const ConfirmModal = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='xl' className={classes.backdrop} onClick={props.onConfirm} />
            <Grid  container >
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.modal}>
                <Typography className={classes.header}>
                    <Typography variant='h6'>{props.title}</Typography>
                </Typography>

                <Typography paragraph='paragraph'>{props.message}</Typography>
                <Button
                    onClick={props.onConfirm}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    Ok
                </Button>
            </Grid>
            </Grid>
        </div>
    );
};

export default ConfirmModal;
