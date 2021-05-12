import React, { Component } from 'react'

export default class UserCard extends Component {

    handleClick=(profile)=>{
        this.props.deleteProfile(this.props.profile)
    }

    render() {
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>
                <img className='photo' src={this.props.user.picture}/> <br/>
                <button onClick={this.handleClick} className='del-btn'>Delete Profile</button>
            </div>
        )
    }
}


