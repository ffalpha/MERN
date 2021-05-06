import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/auth/Login';
import Regsiter from './components/auth/Register';
const App = () => (
  <Router>
    {' '}
    <Fragment>
      <Navbar />

      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Regsiter} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
