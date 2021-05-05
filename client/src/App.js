import React, {  useEffect } from 'react'
import Home from "./components/Home/Home"

import { useDispatch } from "react-redux";
import { show } from "./actions/show";

const App = () => {
  console.log("inside app")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(show());
  }, [dispatch]);
  
  return (
    <div>
      Hello from app
      <Home />
    </div>
  )
}

export default App
