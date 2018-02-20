import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

//Components
import Home from './components/Home';
import Register from './containers/AuthContainers/Register';
import Login from './containers/AuthContainers/Login';
import Header from './containers/Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
