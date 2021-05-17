import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
     header: {
     textAlign: 'center',
        color: '#5B5B61',
     },

     image: {
        position: 'flex',
     },
     container: {
      width: '90%',
      alignItems: 'center',
      margin: '50px 0',
      background: ' #C5DDEB',
      boxShadow: '-1px 1px 2px rgba(255, 255, 255, 0.3), 1px -1px 2px rgba(159, 174, 179, 0.5), inset 11px 11px 22px rgba(159, 174, 179, 0.2), inset -11px -11px 22px rgba(159, 174, 179, 0.2), inset 11px -11px 22px rgba(255, 255, 255, 0.9), inset -11px 11px 28px rgba(159, 174, 179, 0.9)',
      borderRadius: 30,
       display: 'flex',
        padding: '30px 50px',
      
      },
      
            paragraph: { 
               padding: '0 40px',
              textDecoration: 'none',
               color: theme.palette.text.secondary,
   
            },
         button: {
            margin: '30px 0',
           width: '260px',
            height: '60px',
            borderRadius: 30,
            background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
            boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
        },
       
}))