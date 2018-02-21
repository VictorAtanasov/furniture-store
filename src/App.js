import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import * as userActions from './actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Home from './components/Home';
import Register from './containers/AuthContainers/Register';
import Login from './containers/AuthContainers/Login';
import Header from './components/Header';


class App extends Component {

  

  render() {
    let user = this.props.getUser();
    return (
      <BrowserRouter>
        <div>
          <Header
            logOut={this.props.logOut}
            user={user}
          />
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

function mapStateToProps(state){
  return{
      register: state.register
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
