import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LotPage from './containers/LotPage';
import Account from './containers/Account';

ReactDOM.render((
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/lot' component={LotPage} />
        <Route exact path='/account' component={Account} />
      </div>

    </Router>
    ), document.getElementById('root'));
registerServiceWorker();
