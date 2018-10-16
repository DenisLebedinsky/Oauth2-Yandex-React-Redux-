import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {browserHistory} from "react-router";
import {Link} from 'react-router'
import {getToken} from "./selectors";
import {appID} from "./config";

class App extends Component {
    componentDidMount() {
        if (this.props.token != '') {
            browserHistory.push('/')
            //выполним запрос на сервер и получим данные по пользователю,
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link className='btn'
                          to={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${appID}`}
                          target='_self'>Войти</Link>
                    <p>token: {this.props.token}</p>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        token: getToken(state)
    })
};

export default connect(mapStateToProps, null)(App);
