import React, {Component} from 'react';
import MainPage from '../mainPage';
import Article from '../article';
import Header from '../header';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path = '/' exact component={MainPage}/>
                    <Route path = '/card' exact component={Article}/>
                </Switch>
            </>
        )
    }
}
