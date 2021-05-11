import './App.css';


import React from 'react'
import CocktailContainer from './containers/CocktailContainer'
import LogIn from './Login.js'
// import UserCard from './components/UserCard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


class App extends React.Component {

  handleLogIn = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    }

    fetch('http://localhost:3000/api/v1/login', reqPackage)
      .then(res => res.json())
      .then(data => {localStorage.token = data.token})
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <h1>Log In Here</h1>
            <LogIn handleLogIn={this.handleLogIn} />
          </Route>
          <Route exact path='/UserCard'>
            {/* <UserCard user={this.state.currentUser}/> */}
          </Route>
        </Switch>
        <div className="App">

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
