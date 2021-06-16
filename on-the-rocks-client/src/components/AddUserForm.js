import React, { Component } from "react";

export default class AddUserForm extends Component {

    handlesubmit=(e)=>{
        e.preventDefault()
        console.log('formsubmitted', this.props)
        this.props.addUser(this.state)
        this.props.history.push('/breweries')
        // this.props.history.location.pathname = '/Cocktails'
    }

    changeHandler=(e)=>{
      let {name, value} = e.target
      this.setState({
        [name]: value
      })
    }

    render(){
        return (
          <div className='wrapper'>
              <h1>Create New Profile Below</h1>
              <form onSubmit={this.handlesubmit}>
                <p>Name</p>
                <input type='text' name='name' placeholder='Enter Name Here' onChange={this.changeHandler} /> <br/> <br/>
                <p>Age</p>
                <input type='number' name='age' placeholder='How old are you' onChange={this.changeHandler} /> <br/> <br/>
                <p>Hometown</p>
                <input type='text' name='hometown' placeholder='Whats your hometown' onChange={this.changeHandler} /> <br/> <br/>
                <p>Profile Picture</p>
                <input type='text' name='picture' placeholder='Profile Picture' onChange={this.changeHandler} /> <br/> <br/>
                <p>Not so secure password</p>
                <input type='text' name='password' placeholder='Enter your password' onChange={this.changeHandler} /> <br/> <br/>
                <input type="submit" name="submit" value="Create New Profile" className="submit"/>
              </form>
          </div>
        )
    }
}

