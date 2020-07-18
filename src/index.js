import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/errorBoundry';
import {BrowserRouter} from 'react-router-dom';
import store from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));