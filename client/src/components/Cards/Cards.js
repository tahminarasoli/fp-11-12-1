import React from 'react';
import Card from './Card/Card';
import useStyles from './styles';

export const Cards = () => {
    const classes = useStyles();
    
    return (
        <>
            <h1>
            Cards
        </h1>
        <Card/>
        <Card/>
        <Card/>
        
        </>
    );
};

export default Cards;