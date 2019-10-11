import React from 'react';
import './App.css';
import Button from './components/button/button';
import Login from './components/login/login';
import Main from './components/main/main';
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }
  }
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/main" component={Main}/>
      </Switch>
    )
  }
}

export default App;
