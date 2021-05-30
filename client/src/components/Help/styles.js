import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    borderRadius: 15,
   
    display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
  },
  heading: {
    textDecoration: 'none',
    color: '#5B5B61',
    textDecoration: 'underline',
    justify: 'center',
    padding: '10px',
    flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
          textDecoration: 'none',
          color: ' #5B5B61',
  },
},
  
}));