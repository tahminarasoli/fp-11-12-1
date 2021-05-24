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
          {helps.map((help) => (
            <Grid  key={help._id} item xs={12} sm={12} md={6} lg={3}  >
                 <Help
                        help={help}
                        setCurrentId={setCurrentId}
                    />
                    </Grid>
                ))}
           
        </Grid>
    );
    
};

export default Helps;
