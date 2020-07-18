import React, {Component} from 'react';
import { connect } from 'react-redux';

import './paginator.css';


class Paginator extends Component {
    render() {
        return(
            <div className="paginator">
                <button>Paginator</button>
            </div>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        page: state.page
    }
}

export default connect(mapStateToProps)(Paginator);