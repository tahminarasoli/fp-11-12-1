import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: ' #87C0F4',
    boxShadow: '1px 1px 2px rgba(189, 255, 255, 0.3), 1px -1px 2px rgba(81, 115, 146, 0.5), inset 10px 10px 20px rgba(81, 115, 146, 0.2), inset -10px -10px 20px rgba(81, 115, 146, 0.2), inset 10px -10px 20px rgba(189, 255, 255, 0.9), inset -10px 10px 25px rgba(81, 115, 146, 0.9)',
    borderRadius: 30, 
  },
  card1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: ' #F499AB',
    boxShadow: '1px 1px 2px rgba(255, 214, 239, 0.3), -1px -1px 2px rgba(146, 92, 103, 0.5), inset -10px 10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(255, 214, 239, 0.9), inset 10px 10px 25px rgba(146, 92, 103, 0.9)',
    borderRadius: 30, 
  },
  

  
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  help: {
    display: 'flex',
   
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    borderRadius: 10,
  },
  contact: {
    background: ' #F499AB',
    boxShadow: '-1px 1px 2px rgba(255, 214, 239, 0.3), 1px -1px 2px rgba(146, 92, 103, 0.5), inset 10px 10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(255, 214, 239, 0.9), inset -10px 10px 25px rgba(146, 92, 103, 0.9)',
display: 'flex',

  },

  edit: {
    background: ' #F499AB',
            boxShadow: '-1px 1px 2px rgba(255, 214, 239, 0.3), 1px -1px 2px rgba(146, 92, 103, 0.5), inset 10px 10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(255, 214, 239, 0.9), inset -10px 10px 25px rgba(146, 92, 103, 0.9)',
   display: 'flex',
  },
 
    

  delete: {
    display: 'flex',
    background: ' #F499AB',
            boxShadow: '-1px 1px 2px rgba(255, 214, 239, 0.3), 1px -1px 2px rgba(146, 92, 103, 0.5), inset 10px 10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(255, 214, 239, 0.9), inset -10px 10px 25px rgba(146, 92, 103, 0.9)',
  },
  contact1: {
    display: 'flex',
    background: ' #87C0F4',
    boxShadow: '1px 1px 2px rgba(189, 255, 255, 0.3), 1px -1px 2px rgba(81, 115, 146, 0.5), inset 10px 10px 20px rgba(81, 115, 146, 0.2), inset -10px -10px 20px rgba(81, 115, 146, 0.2), inset 10px -10px 20px rgba(189, 255, 255, 0.9), inset -10px 10px 25px rgba(81, 115, 146, 0.9)',
   


  },
  

}));