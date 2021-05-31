import { makeStyles, fade } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
          textDecoration: 'none',
          color: ' #5B5B61',
          
        },
      },
    appBar: {
        background: 'rgba(197, 221, 235, 1)',
        display: 'flex',
     padding: '10px 10px',
       
    },
   
  

    button: {
 marginRight: '30px',
        position: 'relative',
        width: '160px',
        height: '50px',
        background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
        boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
        borderRadius: 30,
     
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
     
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '200px',
        },
      },
     
     
       
       
 
    
    
    profile: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '40vw',
        alignItems: "center"
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
 
    purple: {
      margin: '-20px',
    
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      width: "60px",
      height: "60px",
 
  },
  profile_button:  {
    margin: '25px',
      fontWeight: 'bold',
     fontSize: '10px',
      width: '160px',
      height: '50px',
      color: '#5B5B61',
      background: 'linear-gradient(135deg, #BBD2DF 0%, #CFE8F7 100%)',
      boxShadow: '2px 2px 4px rgba(118, 133, 141, 0.2), -2px -2px 4px rgba(118, 133, 141, 0.2), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 5px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
      borderRadius: 30,
  },
  menuButton : {
    margin: '-30px',
  },
  icon: {
    marginLeft: '5px',

  }




  
    
   
 

}));

 