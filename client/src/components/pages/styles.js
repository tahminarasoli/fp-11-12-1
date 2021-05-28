import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},

container: {
  width: "100%",
  alignItems: "center",
  margin: "50px 0",
  background: " #C5DDEB",
  boxShadow:
    "-1px 1px 2px rgba(255, 255, 255, 0.3), 1px -1px 2px rgba(159, 174, 179, 0.5), inset 11px 11px 22px rgba(159, 174, 179, 0.2), inset -11px -11px 22px rgba(159, 174, 179, 0.2), inset 11px -11px 22px rgba(255, 255, 255, 0.9), inset -11px 11px 28px rgba(159, 174, 179, 0.9)",
  borderRadius: 30,
  display: "flex",
  padding: "50px 50px",
},
paragraph: {

    padding: '30px 0',
    textDecoration: 'none',
    color: theme.palette.text.secondary,

},

      paper: {
        width: '400px',
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: 'linear-gradient(135deg, #CFE8F7 0%, #BBD2DF 100%)',
        boxShadow: '11px 11px 22px rgba(118, 133, 141, 0.2), -11px -11px 22px rgba(118, 133, 141, 0.2), 11px -11px 22px rgba(255, 255, 255, 0.9), -11px 11px 28px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
        borderRadius: 30,
      },
      large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        borderRadius: 10,
      },
      input: {
        width: '97%',
        margin: '10px 0',
        background:'linear-gradient(135deg, #BBD2DF 0%, #CFE8F7 100%)',
    boxShadow: '2px 2px 4px rgba(134, 140, 143, 0.2), -2px -2px 4px rgba(134, 140, 143, 0.2), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 5px rgba(134, 140, 143, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(134, 140, 143, 0.5)',
      },
    
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
     
      buttonSubmit: {
        margin: theme.spacing(2, 0, 2), 
        background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
        boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
        borderRadius: 30,
      }
    }));