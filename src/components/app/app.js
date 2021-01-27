import React, {Component} from 'react';
import MainPage from '../mainPage';
import Article from '../article';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path = '/' exact component={MainPage}/>
                    <Route path = '/card' exact component={Article}/>
                </Switch>
            </>
        )
    }
}
