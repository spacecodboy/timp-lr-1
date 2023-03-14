import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => { //объект кнопка
    return (
        <button {...props} className={classes.Btn}>
            {children}
        </button>
    );
};

export default Button;