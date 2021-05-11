import React, { Component } from 'react'

export default class UserCard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
            </div>
        )
    }
}


