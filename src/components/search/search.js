import React, {Component} from 'react';
import gotService from '../../services/gotService';
import { connect } from 'react-redux';
import ErrorMessage from '../errorMessage';
import {onError} from '../../actions';

import './search.css';

class Search extends Component {

    gotService = new gotService();

    updateRepositories = () => {
        this.gotService.getRepositories()
            .then(this.onTelLoaded)
            .catch((e) => {this.props.onError(e)});
    }

    onTelLoaded = (tel) => {
        console.log(tel)
    }
    render() {
        if (this.props.error){
            return <ErrorMessage/>
        }
        return(
            <div className="search">
                <input className="searchInput" onkeyup="stule:background: #ff5e00;" type="text" placeholder="Искать здесь..."/>
                <button className="searchBut" type="submit" onClick={this.updateRepositories}>
                   <span role="img">
                        &#128269;
                   </span>
                </button>
            </div>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        error: state.error
    }
}

const mapDispatchToProps = {
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);