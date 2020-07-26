import React, {Component} from 'react';
import SearchPage from '../searchPage';
import MainСard from '../mainСard';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.css';


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' exact component={SearchPage}/>
                <Route path = '/card' exact component={MainСard}/>
            </Switch>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        mainCard: state.mainCard
    }
}



export default connect(mapStateToProps)(App);
