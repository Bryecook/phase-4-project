import React, { Component } from 'react'
import FavoriteCocktail from './FavoriteCocktail.js'

export default class UserCard extends Component {

    handleClick = () => {
        this.props.deleteProfile(this.props.user)
        this.props.logout(this.props.user)
        this.props.history.push('/login ')
    }

    
    render() {
        var resArr = [];
        this.props.favorites.forEach(function(item){
        var i = resArr.findIndex(x => x.name == item.name);
        if(i <= -1){
            resArr.push(item);
            }
        }); 
        console.log(resArr)
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>
                <img className='photo' src={this.props.user.picture} /> <br />
                <button onClick={this.handleClick} className='del-btn'>Delete Profile</button>
                {
                resArr.map((cocktail) => 
            <FavoriteCocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike} user= {this.props.user} refresh= {this.props.refresh} favorites = {this.props.favorites}/>)}


            </div>
        )
    }
}
