import React, {Component} from 'react';
// import { connect } from 'react-redux';

import './search.css';


export default class Search extends Component {
    render() {
        return(
            <div className="search">
                <input className="searchInput" onkeyup="stule:background: #ff5e00;" type="text" placeholder="Искать здесь..."/>
                <button className="searchBut" type="submit">
                   <span role="img">
                        &#128269;
                   </span>
                </button>
            </div>
        )
    }
}
// const mapStateToProps =  (state) =>{
//     return {
//         showApp: state.showApp
//     }
// }

// export default connect(mapStateToProps)(Search);