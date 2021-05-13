import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'

class CocktailContainer extends Component {

    state = {
        // user: this.props.user,
        // cocktailArray: this.props.cocktailArray
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="cocktail-collection">
            {
                this.props.cocktailArray.map((cocktail) => 
            <Cocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike} user={this.props.user} refresh={this.props.refresh}/>)

            }
    
            </div>
        )
    }


}
export default CocktailContainer;