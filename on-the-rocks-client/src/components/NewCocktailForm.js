import React, { Component } from 'react'

export default class NewCocktailForm extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        console.log('formsubmitted', this.props)
        this.props.createCocktail(this.state)

    }


    changeHandler = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>
                <h1>newcocktail form</h1>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type='text' name='name' placeholder='Name of Drink' onChange={this.changeHandler} ></input><br /><br />
                        <textarea type='text' name='name' placeholder='Ingredients needed' rows={10} onChange={this.changeHandler}  ></textarea><br /><br />
                        <textarea type='text' name='name' placeholder='Instructions' onChange={this.changeHandler} ></textarea><br /><br />
                        <input type='text' name='name' placeholder='Type of Glass' onChange={this.changeHandler} ></input><br /><br />
                        <input type='text' name='picture' placeholder='Image URL' onChange={this.changeHandler} ></input><br /><br />
                        <input type="submit" name="submit" value="Create New Cocktail" className="submit" />
                    </form>
                </div>
            </div>
        )
    }
}