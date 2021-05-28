import React from "react";

import { Button, Paper } from "@material-ui/core";
import useStyles from "./styles";

const ConfirmModal = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Paper className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>

                <p>{props.message}</p>
                <Button
                    onClick={props.onConfirm}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    Ok
                </Button>
            </Paper>
        </div>
    );
};

export default ConfirmModal;
