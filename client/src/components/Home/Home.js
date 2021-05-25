import React from 'react'

import { useSelector } from "react-redux";
import Showcase from '../Showcase/Showcase'
import Footer from '../Footer/Footer'


const Home = () => {
  
    const dataFromDatabase = useSelector((state) => state.showHome);
    return (
       
        <Showcase />
    
    
      
    );
  }
    


export default Home
