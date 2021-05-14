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
        background: 'linear-gradient(135deg, #D4E8EE 0%, #BBD2DF 0%, #D4E8EE 100%)',
        boxShadow: '-11px -11px 22px rgba(157, 164, 167, 0.2), 11px 11px 22px rgba(157, 164, 167, 0.2), -11px 11px 22px rgba(255, 255, 255, 0.9), 11px -11px 28px rgba(157, 164, 167, 0.9), inset 1px -1px 2px rgba(255, 255, 255, 0.3), inset -1px 1px 2px rgba(157, 164, 167, 0.5)',
        borderRadius: 30,
          margin: ' 50px 80px',
          display: 'flex',
        
         
          alignItems: 'center',
          padding: '10px 50px',
         },
         paragraph: {
            textDecoration: 'none',
            color:   'rgba(115, 114, 124, 1)',

         },
         button: {
           width: '260px',
            height: '60px',
            margin: theme.spacing(3, 0, 2), 
            background: 'linear-gradient( 35deg, rgba(37, 120, 180, 0.5), rgba(73, 138, 252, 1))' ,
            borderRadius: 30,
            boxShadow: '10px 10px 20px rgba(149, 149, 149, 0.2), -10px -10px 20px rgba(149, 149, 149, 0.2), 10px -10px 20px rgba(255, 255, 255, 0.9), -10px 10px 25px rgba(149, 149, 149, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(149, 149, 149, 0.5)',
        },
       
}))