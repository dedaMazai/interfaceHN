import React from 'react';
import './errorMessage.css';
import img from './error404.jpg';
import { connect } from 'react-redux';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Ошибка авторизации</span>
            {console.log(this.props.errorMassage)}
        </>
    )
}

const mapStateToProps =  (state) =>{
    return {
        errorMassage: state.errorMassage
    }
}

export default connect(mapStateToProps)(ErrorMessage);