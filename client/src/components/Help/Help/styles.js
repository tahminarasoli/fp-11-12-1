import { lighten, makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
card: {
 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(-1),
  background: ' #87C0F4',
  boxShadow: '1px 1px 2px rgba(189, 255, 255, 0.3), 1px -1px 2px rgba(81, 115, 146, 0.5), inset 10px 10px 20px rgba(81, 115, 146, 0.2), inset -10px -10px 20px rgba(81, 115, 146, 0.2), inset 10px -10px 20px rgba(189, 255, 255, 0.9), inset -10px 10px 25px rgba(81, 115, 146, 0.9)',
  borderRadius: 30, 
},
card1: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
 
  background: ' #F499AB',
  boxShadow: '1px 1px 2px rgba(255, 214, 239, 0.3), -1px -1px 2px rgba(146, 92, 103, 0.5), inset -10px 10px 20px rgba(146, 92, 103, 0.2), inset 10px -10px 20px rgba(146, 92, 103, 0.2), inset -10px -10px 20px rgba(255, 214, 239, 0.9), inset 10px 10px 25px rgba(146, 92, 103, 0.9)',
  borderRadius: 30, 
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

large: {
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: 10,
},
expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},



}));
