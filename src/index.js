import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Movies from './cus-component/admin/Movies';
import Admin from './cus-component/admin/Admin';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path='/rajpdl'>
            <Admin />
          </Route>
          <Route path="/">
            <App />
          </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
