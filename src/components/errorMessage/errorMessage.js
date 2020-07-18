import React from 'react';
import './errorMessage.css';
import img from './error404.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Ошибка авторизации</span>
        </>
    )
}

export default ErrorMessage;