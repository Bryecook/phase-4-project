import React, { Component } from 'react';
import styles from '../App.css'

class Cocktail extends Component{

    state = {
        show: false,
    };

    toggleCocktail = () => {
        console.log("click")
        this.setState({ show: !this.state.show});
    }

    render(){
        let backgroundImage = this.props.cocktail.picture
        return(
            <div>
                {this.state.show === false ? 
                <div className = "card-front" onClick={this.toggleCocktail}>
                    <img className = "card-image" src= {backgroundImage}/>
                    <div className = "container">
                        <h5 className= "title">{this.props.cocktail.name}</h5>
                        <button type="button" className="like-button" onClick={this.props.like}>Add to favorites!</button>
                        <button type="button" className="dislike-button" onClick={this.props.dislike}>Remove from list</button>
                    </div>
                </div>
                :
                <div className= "card-back" onClick={this.toggleCocktail}>
                    <img className = "card-back-image" src= {backgroundImage}/>
                    <div className = "container">
                        <h5 className= "title">{this.props.cocktail.name}</h5>
                        <ul>
                            {this.props.cocktail.ingredients.map((ingredient) =>
                            <li>{ingredient}</li>)}
                        </ul>
                        <p>{this.props.cocktail.instructions}</p>
                        <button type="button" className="like-button" onClick={this.props.like}>Add to favorites!</button>
                        <button type="button" className="dislike-button" onClick={this.props.dislike}>Remove from list</button>
                    </div>
                </div>
            }
            </div>
        )
    }



}
export default Cocktail;