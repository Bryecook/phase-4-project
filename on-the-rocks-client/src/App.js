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

  getFavorites = () => {
    fetch('http://localhost:3000/api/v1/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        favoritesArray: data
      }))
  }

  refresh = (updatedCocktail) => {
    this.setState({
      cocktailArray: this.state.cocktailArray.map(cocktail => cocktail.id === updatedCocktail.id ? updatedCocktail : cocktail)
    })
  }

  getFavoriteJoiners = () => {
    fetch('http://localhost:3000/api/v1/cocktail_favorite_joiners', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        favoriteJoinersArray: data
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
    console.log(newuser, 'made new user')
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

  deleteProfile=(profile)=>{
    console.log('delete this', profile)
    fetch(`http://localhost:3000/api/v1/users/${profile.id}`,{
      method: 'DELETE',
    })
    this.setState({
      usersArray: this.state.usersArray.filter((user => {
        return user !== profile
      }))
    })
  }


  setUser = (name) => {
    let user = this.state.usersArray.filter(user => user.name === name)[0]
    console.log(user)
    this.setState({
      currentUser: user
    })
  }


  like = (cocktail) => {
    let newJoiner = {
      cocktail_id: cocktail.id,
      favorite_id: this.state.currentUser.favorite.id
    }
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newJoiner)
    }
    fetch('http://localhost:3000/api/v1/cocktail_favorite_joiners', reqPackage)
    this.setState({
      cocktailArray: this.state.cocktailArray.map(cocktailObject => cocktailObject.id === cocktail.id ? cocktail : cocktailObject
      )
    })
  }

  dislike = (cocktail) => {
    console.log(this.state.currentUser.favorite.cocktail_favorite_joiners)
    let a = this.state.currentUser.favorite.cocktail_favorite_joiners.filter(joiner => joiner.cocktail_id === cocktail.id)[0]
    fetch(`http://localhost:3000/api/v1/cocktail_favorite_joiners/${a.id}`, {
      method: "DELETE",
    });

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
            <UserCard user={this.state.currentUser} deleteProfile={this.deleteProfile} dislike={this.dislike} refresh={this.refresh}/>
          </Route>
          <Route exact path='/Newuser'>
            <AddUserForm addUser={this.addUser}/>
          </Route>
        </Switch>

        <Switch >
          <Route exact path="/cocktails">
            <CocktailContainer cocktailArray={this.state.cocktailArray} like={this.like} dislike={this.dislike} user={this.state.currentUser} refresh={this.refresh}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
