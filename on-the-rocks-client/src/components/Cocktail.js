import React, { Component } from 'react';
import styles from '../App.css'

class Cocktail extends Component{

    state = {
        show: false

    };


    toggleCocktail = () => {
        this.setState({ show: !this.state.show});
    }

    render(){
        let backgroundImage = this.props.cocktail.picture
        let b= this.props.favorites.map(cocktail => cocktail.id)
        return(
            <div>
                {this.state.show === false ? 
                <div className = "card-front" >
                    <img className = "card-image" src= {backgroundImage} onClick={this.toggleCocktail}/>
                    <div className = "container">
                        <h5 className= "title">{this.props.cocktail.name}</h5>
                        {b.includes(this.props.cocktail.id) ?  
                        <button type="button" className="dislike-button" onClick={() => this.props.dislike(this.props.cocktail)}>Remove from list</button> : 
                        <button type="button" className="like-button" onClick={() => this.props.like(this.props.cocktail)}>Add to favorites!</button>
                        }
                       
                    </div>
                </div>
                :
                <div className= "card-back" >
                    <img className = "card-back-image" src= {backgroundImage} onClick={this.toggleCocktail}/>
                    <div className = "container">
                        <h5 className= "title">{this.props.cocktail.name}</h5>
                        <ul>
                            {this.props.cocktail.ingredients.map((ingredient) =>
                            <li>{ingredient}</li>)}
                        </ul>
                        <p className = "instructions" >{this.props.cocktail.instructions}</p>
                        {b.includes(this.props.cocktail.id) ?  
                        <button type="button" className="dislike-button" onClick={() => this.props.dislike(this.props.cocktail)}>Remove from list</button> : 
                        <button type="button" className="like-button" onClick={() => this.props.like(this.props.cocktail)}>Add to favorites!</button>
                        }
                    </div>
                </div>
            }
            </div>
        )
    }



}
export default Cocktail;