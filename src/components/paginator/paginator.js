import React, {Component} from 'react';
import { connect } from 'react-redux';

import './paginator.css';


class Paginator extends Component {
    render() {
        return(
            <button className="paginator">Paginator</button>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        page: state.page
    }
}

export default connect(mapStateToProps)(Paginator);