import './App.css';
import './index.js'
import CocktailContainer from './containers/CocktailContainer'
import React from 'react'
import LogIn from './Login.js'
import UserCard from './components/UserCard'
import AddUserForm from './components/AddUserForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";


class App extends React.Component {

  state = {
    cocktailArray: [],
    usersArray: [],
    currentUser: {},
    currentPage: {}

  }

  componentDidMount() {
    console.log('mounted')
  }

  getCocktails = () => {
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        cocktailArray: data
      }))
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
      .then(data => {
        localStorage.setItem('token', data.token)
        this.getUsers()
        this.setUser(data.name)
        this.getCocktails()
        this.setState({
          currentPage: <Redirect to='/CockTails' />
        })
        // <Redirect to='/CocktailContainer' />
      })
  }

  getUsers = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        usersArray: data
      }))
    console.log(this.state.usersArray)
  }

  addUser=(newuser)=>{
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newuser)
    }

    fetch('http://localhost:3000/api/v1/users', {reqPackage})
    .then(res => res.json())
    .then(user => this.setState({
        usersArray: [...this.state.usersArray, user]
    }))
  }

  setUser = (name) => {
    let user = this.state.usersArray.filter(user => user.name === name)[0]
    console.log(user)
    this.setState({
      currentUser: user
    })
  }

  like = (cocktail) => {
    console.log(cocktail)
  }

  dislike = (cocktail) => {
    console.log(cocktail, "dislike function")
  }

  handleLogout = () => {
    localStorage.clear()
    // return <Redirect to='/LogIn' />
    this.setState({
      currentPage: <Redirect to='/' />
    })
  }

  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Log In</Link>
            </li>
            <li>
              {localStorage.token ? <Link to='/Cocktails'>Cocktails</Link> : <Redirect to='/' />}
            </li>
            <li>
              <Link to='/UserCard'>User Profile</Link>
            </li>
            <li>
              <Link to='/NewUser'>Create New Profile</Link>
            </li>
            <li>
              <button onClick={() => this.handleLogout()}>Log Out</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" >
            <h1>Log In Here</h1>
            <LogIn handleLogIn={this.handleLogIn} />
          </Route>
          <Route exact path='/UserCard'>
            <UserCard user={this.state.currentUser} />
          </Route>
          <Route exact path='/Newuser'>
            <AddUserForm addUser={this.addUser}/>
          </Route>
        </Switch>

        <Switch >
          <Route exact path="/cocktails">
            <CocktailContainer cocktailArray={this.state.cocktailArray} like={this.like} dislike={this.dislike} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
