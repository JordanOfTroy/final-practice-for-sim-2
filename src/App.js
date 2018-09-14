import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/login'
import Display from './components/Display/display'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          
          <Switch>
            <Route exact path = '/' component = {Login}/>
            <Route path = '/display' component = {Display}/>
          </Switch>
        </div>
      </HashRouter>
     
    );
  }
}

export default App;
