import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: '10',
    background: 'rgba(0, 0, 0, 0.75)',
  },
  
  modal: {
    padding: theme.spacing(2),
    width: '400px',
    height:'200px',
    borderRadius: 30,
    position: 'fixed',
    top: '30vh',
    left: '30%',
    zIndex: 100,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background:  '#87C0F4',
    boxShadow: '1px 1px 2px rgba(189, 255, 255, 0.3), 1px -1px 2px rgba(81, 115, 146, 0.5), inset 10px 10px 20px rgba(81, 115, 146, 0.2), inset -10px -10px 20px rgba(81, 115, 146, 0.2), inset 10px -10px 20px rgba(189, 255, 255, 0.9), inset -10px 10px 25px rgba(81, 115, 146, 0.9)',
  },
  
  header: {

color: 'white',
  },
  

 
  button: {
  margin: 'auto',
    position: 'relative',
    width: '220px',
    height: '60px',
    background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
    boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
    borderRadius: 30,
  },
      
}));
    
  
  