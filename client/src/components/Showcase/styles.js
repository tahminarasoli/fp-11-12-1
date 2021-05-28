import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    container: {
        alignItems: 'center',
        margin: '50px 0',
        background: ' #C5DDEB',
        boxShadow: '-1px 1px 2px rgba(255, 255, 255, 0.3), 1px -1px 2px rgba(159, 174, 179, 0.5), inset 11px 11px 22px rgba(159, 174, 179, 0.2), inset -11px -11px 22px rgba(159, 174, 179, 0.2), inset 11px -11px 22px rgba(255, 255, 255, 0.9), inset -11px 11px 28px rgba(159, 174, 179, 0.9)',
        borderRadius: "30",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-between"

    },
    heading: {
        textDecoration: 'none',
        color: '#5B5B61',
        fontSize: '50px'
    },
    paragraph: {
        padding: '0 40px',
        textDecoration: 'none',
        color: theme.palette.text.secondary,

    },
    paper: {
        margin: '20px auto',
        padding: "4px",
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '300px',
        minHeight: '350px',
        background: ' #87C0F4',
        boxShadow: '1px 1px 2px rgba(189, 255, 255, 0.3), 1px -1px 2px rgba(81, 115, 146, 0.5), inset 10px 10px 20px rgba(81, 115, 146, 0.2), inset -10px -10px 20px rgba(81, 115, 146, 0.2), inset 10px -10px 20px rgba(189, 255, 255, 0.9), inset -10px 10px 25px rgba(81, 115, 146, 0.9)',
        borderRadius: 30,
    },
    paper1: {
        margin: '30px auto',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '300px',
        minHeight: '350px',
        background: ' #F499AB',
        boxShadow: '-1px 1px 2px rgba(255, 214, 239, 0.3), 1px -1px 2px rgba(146, 92, 103, 0.5), inset 10px 10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(255, 214, 239, 0.9), inset -10px 10px 25px rgba(146, 92, 103, 0.9)',
        borderRadius: 30,
    },
    title: {
        textDecoration: 'underline',
        margin: '30px 0',

    },
    paragraph1: {

        margin: '30px 0',
        padding: '0 40px',

    },
    img1: {
        width: "300px",
        height: "300px"
    }
}));