import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Todo from './components/Todo'
import ConfirmationPage from './components/ConfirmationPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/confirm" component={ConfirmationPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;