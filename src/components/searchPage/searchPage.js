import React, {Component} from 'react';
import Search from '../search';
import Result from '../result';
import { connect } from 'react-redux';

import './searchPage.css';


class SearchPage extends Component {
    render() {
        if (this.props.error){
            return <div className="error">
                <h1>Подождите 10 сек. и обновите страницу... </h1>
                <p>Превышен предел скорости работы API </p>
            </div>
        }
        return(
            <>
                 <div className="searchApp">
                    <Search/>
                </div>
                <br/>
                <div className="resultApp">
                    <Result/>
                </div>
            </>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        error: state.error
    }
}

export default connect(mapStateToProps)(SearchPage);