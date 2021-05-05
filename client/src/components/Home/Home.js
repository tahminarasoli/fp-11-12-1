import React from 'react'

import { useSelector } from "react-redux";

const Home = () => {
    const dataFromDatabase = useSelector((state) => state.showHome);
    return (
        <div>
            <h1>Selamlar from Home</h1>
            <h1> {JSON.stringify(dataFromDatabase, null, 4)} </h1>
        </div>
    )
}

export default Home
