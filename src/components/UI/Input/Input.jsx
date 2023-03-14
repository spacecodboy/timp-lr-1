import React from 'react';
import classes from './Input.module.css'

const Input = (props) => { //объект поле ввода
    return (
        <input className={classes.Inpt} {...props}/>
    );
};

export default Input;