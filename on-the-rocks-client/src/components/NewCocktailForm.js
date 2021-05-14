import React, { Component } from 'react'

export default class NewCocktailForm extends Component {

    submitHandler=(e)=>{
        console.log('formsubmitted', this.props)
        this.props.createCocktail(this.state)
        
    }

    render(){
        return (
            <div>
                <h1>Create Your Own Cocktail Here!</h1>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type='text' name='name' placeholder='Name of Drink'></input><br/><br/>
                        <textarea type='text' name='name' placeholder='Ingredients needed' rows={10} ></textarea><br/><br/>
                        <textarea type='text' name='name' placeholder='Instructions'></textarea><br/><br/>
                        <input type='text' name='name' placeholder='Type of Glass'></input><br/><br/>
                        <input type='text' name='picture' placeholder='Image URL'></input><br/><br/>
                        <input type="submit" name="submit" value="Create New Cocktail" className="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}