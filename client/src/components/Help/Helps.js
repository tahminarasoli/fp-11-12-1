import React, { useEffect } from "react";
import Help from "./Help/Help";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getHelps } from "../../actions/helpsActions";

const Helps = ({ setCurrentId }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const helps = useSelector((state) => state.helps);

    useEffect(() => {
        dispatch(getHelps(token));
    }, [dispatch, token]);

    console.log(helps);

    return (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            <Grid item xs={12} sm={6}>
                {helps.map((help) => (
                    <Help
                        key={help._id}
                        help={help}
                        setCurrentId={setCurrentId}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default Helps;
