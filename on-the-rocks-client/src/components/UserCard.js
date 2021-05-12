import React, { Component } from 'react'
import Cocktail from './Cocktail.js'

export default class UserCard extends Component {

    render() {
        console.log(this.props.user.favorites)
        return (
            <div>
                <h1>{this.props.user.name}'s Favorites/Dislikes List</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>
                {
                this.props.user.favorite.cocktails.map((cocktail) => 
            <Cocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike}/>)

            }
                {/* <h3>Favorite Cocktails: {this.props.user.favorite.cocktails.map(cocktail => cocktail.name)}</h3> */}
            </div>
        )
    }
}


