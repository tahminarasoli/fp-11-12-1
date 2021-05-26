import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

    appBar: {
        background: 'rgba(197, 221, 235, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    },
    heading: window.matchMedia("(max-width: 700px)").matches ? {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#5B5B61',
        display: 'none'
    } : {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#5B5B61',
    },

    image: window.matchMedia("(max-width: 700px)").matches ? {
        width: "100px",
    } : {
        width: 150
    },

    button: {
        position: 'relative',
        width: '200px',
        height: '40px',
        background: 'linear-gradient(90deg, #70D3FC 0%, #346AD1 100%)',
        boxShadow: 'box-shadow: 10px 10px 20px rgba(38, 80, 127, 0.2), -10px -10px 20px rgba(38, 80, 127, 0.2), 10px -10px 20px rgba(90, 188, 255, 0.9), -10px 10px 25px rgba(38, 80, 127, 0.9), inset -1px 1px 2px rgba(90, 188, 255, 0.3), inset 1px -1px 2px rgba(38, 80, 127, 0.5)',
        borderRadius: 30,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '55%',

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
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
        width: "30%"
    },
    purple: window.matchMedia("(max-width: 700px)").matches ? {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        margin: "0 20px"
    } : {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width: "80px",
        height: "80px",
        margin: "0 20px"
    },
    profile_button: window.matchMedia("(max-width: 700px)").matches ? {

        width: '50px',
        height: '30px',
        color: '#5B5B61',
        background: 'linear-gradient(135deg, #BBD2DF 0%, #CFE8F7 100%)',
        boxShadow: '2px 2px 4px rgba(118, 133, 141, 0.2), -2px -2px 4px rgba(118, 133, 141, 0.2), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 5px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
        borderRadius: 30,
    } : {
        width: '250px',
        height: '70px',
        color: '#5B5B61',
        background: 'linear-gradient(135deg, #BBD2DF 0%, #CFE8F7 100%)',
        boxShadow: '2px 2px 4px rgba(118, 133, 141, 0.2), -2px -2px 4px rgba(118, 133, 141, 0.2), 2px -2px 4px rgba(255, 255, 255, 0.9), -2px 2px 5px rgba(118, 133, 141, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(118, 133, 141, 0.5)',
        borderRadius: 30,
    },
    menu: window.matchMedia("(max-width: 700px)").matches ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100vw",
        height: "90%",
    } : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100vw",
        height: "90%",
    },
    menuItem: {
        height: "100px",
        fontSize: "25px",
    }

}));