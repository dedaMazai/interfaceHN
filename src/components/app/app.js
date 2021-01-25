import React, {Component} from 'react';
import MainPage from '../mainPage';
import Article from '../article';
import Header from '../header';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import './app.css';


export default class App extends Component {
    render() {
        return (
            <>
                <Link to = "/"><Header/></Link>
                <Switch>
                    <Route path = '/' exact component={MainPage}/>
                    <Route path = '/card' exact component={Article}/>
                </Switch>
            </>
        )
    }
}
