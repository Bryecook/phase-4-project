import React, { Component } from 'react'
import Cocktail from './Cocktail.js'

export default class UserCard extends Component {

    handleClick = () => {
        this.props.deleteProfile(this.props.user)
        this.props.logout(this.props.user)
        this.props.history.push('/login ')
    }



    render() {
        console.log(this.props.user.favorites)
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>
                <img className='photo' src={this.props.user.picture} /> <br />
                <button onClick={this.handleClick} className='del-btn'>Delete Profile</button>
                {
                    this.props.user.favorite.cocktails.map((cocktail) =>
                        <Cocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike} />)

                }


            </div>
        )
    }
}
