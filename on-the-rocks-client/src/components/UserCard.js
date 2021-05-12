import React, { Component } from 'react'

export default class UserCard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>
                <img src={this.props.user.picture}/>
            </div>
        )
    }
}


