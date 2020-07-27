import React, {Component} from 'react';
import SearchPage from '../searchPage';
import MainСard from '../mainСard';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' exact component={SearchPage}/>
                <Route path = '/card' exact component={MainСard}/>
            </Switch>
        )
    }
}
