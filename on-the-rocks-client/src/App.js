import './App.css';
import './index.js'
import CocktailContainer from './containers/CocktailContainer'
import React from 'react'
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

  state = {
    cocktailArray: [],
    usersArray: [],
    currentUser: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res => res.json())
    .then(data => this.setState({
      cocktailArray:data}))

  }



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

  like = (cocktail) => {
    
  }

  dislike = (cocktail) => {
    console.log(cocktail, "dislike function")
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
        
        <Switch >
          <Route exact path="/cocktails">
          <CocktailContainer cocktailArray = {this.state.cocktailArray} like= {this.like} dislike= {this.dislike}/>
          </Route> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
