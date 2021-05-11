import React from 'react'

const LogIn = props => {
    return (
        <form onSubmit={props.handleLogIn}>
            <label>UserName</label>
            <input type='text' />
            <br/>
            <label>Password</label>
            <input type='password' />
            <br/>
            <input type='Submit' />
        </form>
    )
}

export default LogIn;