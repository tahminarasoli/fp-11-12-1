import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';

import image6 from '../../images/image6.png';
import image8 from '../../images/image8.png'
import image7 from '../../images/image7.png'

import './styles.css';
const useStyles = makeStyles((theme)=>({
      grid:{
            width: '100%',
            margin: '0px'
      },
      paper: {
            padding:theme.spacing(3),
            textAlign: 'center',
            background: theme.palette.success.light
      }
}));

const Showcase = () => {
      const classes = useStyles();

    return (
        <div>
           <div className='showcasecont'>
            
            <div className='cardcontent'>
            <p>Being able to shop for food is an important part of staying well and independent. Vulnerable people such as old people, people with limited movements, sick people... are struggling every time to find someone to help them with this task. Moreover, the COVID-19 pandemic deepens this issue because of the many restrictions that are imposed on us. We help vulnerable people to be in control of what food they purchase with our grocery delivery and escorted supermarket shopping services.</p>
            
            </div>
            <img src={image6} style={{width: 300, height:200,borderRadius:20}} alt= 'pic6' />
          </div>

       


          <div>
          <img className='servicepic' src={image8} style={{width: 400, height:300,borderRadius:10}} alt ='pic8'/>
          </div>
          
          <div className='grid'>
             <div className='gridservice first'>
          
              <h4>Shop for you</h4>
             <p>
             If getting around the shop  becoming hard for you do not feel burdensome to ask for help. 
             Our team of volunteers are always there to shop for you 
              </p>
        </div>
        <div className='gridservice middle'>
          
          <h4>Shop with you</h4>
         <p>
         If being in the shop on your own is a struggle and a difficulty, volunteers can give you a support and escort  you around
          </p>
    </div>
    <div className='gridservice third'>
          
          <h4>Deliver you</h4>
         <p>
         Volunteers deliver fresh  groceries to your door
          </p>
          <img src = {image7}  alt='pic7'/>
    </div>
      
 </div>
       
 </div>
       
        
      
    )
}

export default Showcase
