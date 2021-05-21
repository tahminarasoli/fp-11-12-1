import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { Button, Paper, TextField, Typography, } from '@material-ui/core';
import logo1 from "../../images/logo1.png";
import useStyles from './styles';



export const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ wantsToHelp,  setWantsToHelp ] = useState(false);
 

    const [ cardData, setCardData ] = useState({
        helpTitle: '',
        description: '',
        dateAndTimeChoice: '',
        wantsToHelp: '',

    })
    
    const changeHandler = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit =  (e) => 
    {
       

}

    const handleClear = () => 
    {

    }
    const switchMode = () => {
        setWantsToHelp ((prevWantsToHelp) => !prevWantsToHelp);
       
    };


    return (
        <Paper className={classes.paper}>
             <img
                    src={logo1}
                    alt="logo1"
                    height="50"
                />
            <Typography 
            variant="h5"
            >{wantsToHelp ?   'Desire For Help' : 'Reguest For Help'}
            </Typography>
            <Button
             className={classes.switch}
             fullWidth
             variant="contained"
             color="primary"
             onClick={switchMode}
                >
                {wantsToHelp
                 ?  " I Need a Help?"
                 : "I Want to Help? "}
                        </Button>
            <form 
            autoComplete="off"
             noValidate 
             className={`${classes.root} ${classes.form}`} 
             onSubmit={handleSubmit}
             > {   wantsToHelp && (
             
              <>

            <TextField 
             className={classes.input}
             name="helpTitle" 
             label="How you can help?" 
             variant="outlined" 
             id="name"
             value={cardData.helpTitle}
             fullWidth
             changeHandler={changeHandler}
             onChange={(e) => setCardData({...cardData, helpTitle: e.target.value})}
            />
             
             <TextField 
              className={classes.input}
             name="description" 
             label="Describe All The Details"
             variant="outlined" 
             value={cardData.description}
             fullWidth 
             changeHandler={changeHandler}
             onChange={(e) => setCardData({...cardData, description: e.target.value})}
            />
            
            <TextField
       className={classes.input}
        name="dateAndTimeChoice"
        id="dateAndTimeChoice"
        label="Choose Date and Time "
        type="datetime-local"
        variant="outlined" 
        defaultValue="2021-05-24T17:30"
        fullWidth
        className={classes.textField}
        changeHandler={changeHandler}
        onChange={(e) => setCardData({...cardData, dateAndTimeChoice: e.target.value})}
        InputLabelProps={{
        shrink: true,
       }}
      />
      </>
                 )}
            
      { !wantsToHelp && (
                 <>

             <TextField 
             className={classes.input}
             name="helpTitle" 
             label="What do you need?"
             variant="outlined" 
             id="name"
             value={cardData.helpTitle}
             fullWidth
             changeHandler={changeHandler}
             onChange={(e) => setCardData({...cardData, helpTitle: e.target.value})}
            />
             
             <TextField 
              className={classes.input}
             name="description" 
             label="Describe All The Details"
             variant="outlined" 
             value={cardData.description}
             fullWidth 
             changeHandler={changeHandler}
             onChange={(e) => setCardData({...cardData, description: e.target.value})}
            />
            
            <TextField
        className={classes.input}
        name="dateAndTimeChoice"
        id="dateAndTimeChoice"
        label="Choose Date and Time "
        type="datetime-local"
        variant="outlined" 
        defaultValue="2021-05-24T17:30"
        fullWidth
        className={classes.textField}
        changeHandler={changeHandler}
        onChange={(e) => setCardData({...cardData, dateAndTimeChoice: e.target.value})}
        InputLabelProps={{
          shrink: true,
       }}
      />
      
 </>
    )}
          <Button
            className={classes.buttonSubmit} 
            variant="contained" 
            color="primary" 
            type="submit"
            fullWidth
            >
          Submit
           </Button>
           <Button
            className={classes.buttonClear} 
            variant="contained" 
            color='#5B5B61'
            onClick={handleClear}
            fullWidth
            >
           Clear
           </Button>
          
           </form>
            </Paper>

    );
};

export default Form;
