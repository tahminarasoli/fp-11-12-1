import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

appBar: {
  background: 'rgba(197, 221, 235, 1)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
   },
  heading: {
    textDecoration: 'none',
    textAlign: 'center',
    color: '#5B5B61',
    },

  image: {
  width: 150,
    marginLeft: '15px',
   },
  
  button: {
    position: 'relative',
    width: '220px',
    height: '60px',
    background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
    boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
    borderRadius: 30,
  },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px',
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    profile_button: {
      width: '220px',
      height: '60px',
      color: '#5B5B61',
      background: 'linear-gradient(135deg, #BBD2DF 0%, #CFE8F7 100%)',
     boxShadow: '2px 2px 4px rgba(118, 133, 141, 0.2), -2px -2px 4px rgba(118, 133, 141, 0.2), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 5px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
     borderRadius: 30,
    },
    
}));

    
    
  