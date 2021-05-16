import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

appBar: {
  background: 'rgba(197, 221, 235, 1)',
    borderRradius: 15,
    margin: ' 10px 0',
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
    background: 'linear-gradient( 35deg, rgba(37, 120, 180, 0.5), rgba(73, 138, 252, 1))',
    boxShadow: '10px 10px 20px rgba(149, 149, 149, 0.2), -10px -10px 20px rgba(149, 149, 149, 0.2), 10px -10px 20px rgba(255, 255, 255, 0.9), -10px 10px 25px rgba(149, 149, 149, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(149, 149, 149, 0.5)',
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
  }));

    
    
  