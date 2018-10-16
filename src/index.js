import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
