import React, {Component} from 'react';
import Search from '../search';
import Result from '../result';
// import { connect } from 'react-redux';

import './searchPage.css';


export default class SearchPage extends Component {
    render() {
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
// const mapStateToProps =  (state) =>{
//     return {
//         showApp: state.showApp
//     }
// }

// export default connect(mapStateToProps)(Search);