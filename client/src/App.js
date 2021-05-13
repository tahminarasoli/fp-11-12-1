import React, {  useEffect } from 'react'
import Home from "./components/Home/Home"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { show } from "./actions/show";
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  console.log("inside app")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(show());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
    </Switch>
  </BrowserRouter>
       
  )
}

export default App;
