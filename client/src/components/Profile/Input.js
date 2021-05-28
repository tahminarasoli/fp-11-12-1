import React from "react";
import { TextField, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Input = ({
    name,
    handleChangeInput,
    label,
    half,
    autoFocus,
    type,
    id,
    defaultValue,
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                className={classes.input}
                name={name}
                onChange={handleChangeInput}
                variant="outlined"
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                defaultValue={defaultValue}
                id={id}
            />
        </Grid>
    );
};

export default Input;
