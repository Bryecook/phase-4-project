import './App.css';
import './index.js'
import CocktailContainer from './containers/CocktailContainer'
import React from 'react'
import LogIn from './Login.js'
import UserCard from './components/UserCard'
import AddUserForm from './components/AddUserForm'
import NewCocktailForm from './components/NewCocktailForm'

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
    currentPage: {},
    favoriteCocktails: []
  }

  componentDidMount() {
    console.log('mounted')
    this.getUsers()
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
        cocktailArray: data,
      }))
  }


  getFavorites = () => {
    let faves = this.state.currentUser.favorite.cocktails
    this.setState({
      favoriteCocktails: faves,
      // cocktailArray: this.state.cocktailArray.map(cocktail => cocktail)
    })
    console.log(this.state.favoriteCocktails)
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
        this.getFavorites()
        this.setState({
          currentPage: <Redirect to='/CockTails' />
        })
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
    console.log(this.state.usersArray, "im in get users")

  }

  addUser=(newuser)=>{
    console.log('props', this.props)
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newuser)
    }
    
    fetch('http://localhost:3000/api/v1/users', reqPackage)
    .then(res => res.json())
    .then(user => this.setState({
      usersArray: [...this.state.usersArray, user]
      // console.log(newuser, 'made new user')
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

  createCocktail=(cocktail)=>{
    console.log('created', cocktail)
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(cocktail)
    }
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res => res.json())
    .then(data => this.setState({
      cocktailArray: [...this.state.cocktailArray, data]
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
    this.setState({
      favoriteCocktails: [...this.state.favoriteCocktails, cocktail]
    })
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
    .then(res => res.json())
    .then((cocktailJoiner) => {
      console.log(cocktailJoiner, 'added')
      this.setState({
        // favoriteCocktails: [...this.state.favoriteCocktails, cocktailJoiner.cocktail],
        cocktailArray: this.state.cocktailArray.map(cocktail => cocktail)
      },()=> console.log(this.state));
    });
    // this.getUsers()
    // this.getCocktails()
  };

  dislike = (cocktail) => {
    let b = this.state.currentUser.favorite.cocktail_favorite_joiners.filter(joiner => joiner.cocktail_id === cocktail.id)
    this.setState({
        favoriteCocktails: this.state.favoriteCocktails.filter(cocktailObject => {
          return cocktailObject != cocktail;
      },()=> console.log(this.state))
    })
    console.log('im in the dislike', this.state)

    // let a = this.state.currentUser.favorite.cocktail_favorite_joiners.filter(joiner => joiner.cocktail_id === cocktail.id)[0]
    fetch(`http://localhost:3000/api/v1/cocktail_favorite_joiners/${b.id}`, {
      method: "DELETE",
    });
    console.log('removed')
    // this.getUsers()
    // this.getFavorites()
    }
    

  handleLogout = () => {
    localStorage.clear()
    console.log('logged out')
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
              <Link to='/NewCocktail'>Create Cocktail</Link>
            </li>
            <li>
              <button onClick={() => this.handleLogout()}>Log Out</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={(routerProps) => <LogIn handleLogIn={this.handleLogIn} {...routerProps} />}>
            <h1>Log In Here</h1>
            <LogIn handleLogIn={this.handleLogIn} />
          </Route>
          <Route exact path='/UserCard' render={(routerProps) => <UserCard user={this.state.currentUser} favorites={this.state.favoriteCocktails} deleteProfile={this.deleteProfile} logout={this.handleLogout}  dislike={this.dislike} like={this.like} {...routerProps}/>}>
            
          </Route>
          <Route exact path='/Newuser' render={(routerProps) => <AddUserForm addUser={this.addUser} {...routerProps}/>}>
            
          </Route>
          <Route exact path='/NewCocktail'>
            <NewCocktailForm createCocktail={this.createCocktail}/>
          </Route>
        {/* </Switch>

        <Switch > */}
          <Route exact path="/cocktails">
            <CocktailContainer cocktailArray={this.state.cocktailArray} like={this.like} dislike={this.dislike} user={this.state.currentUser} favorites={this.state.favoriteCocktails}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
