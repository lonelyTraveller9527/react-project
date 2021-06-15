import React, { Component } from 'react';
import Header from './common/Header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './app.scss'
import Domain from './components/Domain';
import Ssl from './components/Ssl';
import SslPord from './components/SslPord'
import TestRedux from './components/TestRedux'

import store from './store/index'
import { Provider } from 'react-redux'


class App extends Component {
  state = {
  }

  render() {
    return (
      <div
        id="app"
        style={{
          width: '1500px',
          margin: '0 auto',
          background: 'rgb(247, 247, 247)',
          overflow: 'hidden',
        }}
      >
        <div className="routerview">
          {/* <Header title="React project home" /> */}
          <Router>
            <Route path="/" component={Header} />
            {
              // (urlPath === '' || urlPath === "/")  &&
              <ul className="navlist">
                <li className="navlist-item">
                  <Link to={{pathname: "/domain/125", query: {id: '123'}, state: {name: 'jim'}}}>domain</Link>
                </li>
                <li className="navlist-item">
                  <Link to="/ssl">Ssl</Link>
                </li>
              </ul>
            }
            <Route path="/domain/:id" component={Domain} />
            <Route path="/ssl" component={Ssl} />
            {/* <Switch>
            </Switch> */}
          </Router>

          <Provider store={store}>
            <TestRedux />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
