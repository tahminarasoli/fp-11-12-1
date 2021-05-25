import React, { useEffect } from "react";
import Help from "./Help/Help";
import NeedHelp from "./Help/NeedHelp";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getHelps } from "../../actions/helpsActions";

const Helps = ({ setCurrentId, wantsToHelp }) => {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const helps = useSelector((state) => state.helps);

    useEffect(() => {
        dispatch(getHelps(token));
    }, [dispatch, token]);

    console.log(helps);

    const wantHelp = helps.filter((help) => help.wantsToHelp === true);
    const needHelp = helps.filter((help) => help.wantsToHelp === false);

    return (
        <>
            {wantsToHelp ? (
                <>
                    <Grid
                        className={classes.container}
                        container
                        alignItems="stretch"
                        spacing={3}
                    >
                        {needHelp.map((help) => (
                            <Grid
                                key={help._id}
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3}
                            >
                                <NeedHelp help={help} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        className={classes.container}
                        container
                        alignItems="stretch"
                        spacing={3}
                    >
                        {wantHelp.map((help) => (
                            <Grid
                                key={help._id}
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3}
                            >
                                <Help help={help} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : (
                <>
                    <Grid
                        className={classes.container}
                        container
                        alignItems="stretch"
                        spacing={3}
                    >
                        {wantHelp.map((help) => (
                            <Grid
                                key={help._id}
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3}
                            >
                                <Help help={help} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        className={classes.container}
                        container
                        alignItems="stretch"
                        spacing={3}
                    >
                        {needHelp.map((help) => (
                            <Grid
                                key={help._id}
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3}
                            >
                                <NeedHelp help={help} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </>
    );
};

export default Helps;
