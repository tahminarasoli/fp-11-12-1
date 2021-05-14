import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #CFE8F7 0%, #BBD2DF 100%)',
    boxShadow: '11px 11px 22px rgba(118, 133, 141, 0.2), -11px -11px 22px rgba(118, 133, 141, 0.2), 11px -11px 22px rgba(255, 255, 255, 0.9), -11px 11px 28px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
    borderRadius: 30,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2), 
     background: 'linear-gradient( 35deg, rgba(37, 120, 180, 0.5), rgba(73, 138, 252, 1))' ,
     borderRadius: 30,
    boxShadow: '10px 10px 20px rgba(149, 149, 149, 0.2), -10px -10px 20px rgba(149, 149, 149, 0.2), 10px -10px 20px rgba(255, 255, 255, 0.9), -10px 10px 25px rgba(149, 149, 149, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(149, 149, 149, 0.5)',
 },
 switch: {
    margin: theme.spacing(3, 0, 2), 
    background: 'linear-gradient( 35deg, rgba(37, 120, 180, 0.5), rgba(73, 138, 252, 1))' ,
    borderRadius: 30,
   boxShadow: '10px 10px 20px rgba(149, 149, 149, 0.2), -10px -10px 20px rgba(149, 149, 149, 0.2), 10px -10px 20px rgba(255, 255, 255, 0.9), -10px 10px 25px rgba(149, 149, 149, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(149, 149, 149, 0.5)',
 },
}));
