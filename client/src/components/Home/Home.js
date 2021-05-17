import React from 'react'

import { useSelector } from "react-redux";
import Showcase from '../Showcase/Showcase'
import Footer from '../Footer/Footer'

import useStyles from './styles';

const Home = () => {
  
    const dataFromDatabase = useSelector((state) => state.showHome);
    return (
        <div>
        <Showcase />
      <Footer />
     </div>
      
    );
  }
    


export default Home
