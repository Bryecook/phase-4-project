import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'

class CocktailContainer extends Component {


    render() {

        return (
            <div className="cocktail-collection">
                <h3>Welcome {this.props.user.name}</h3> 
            {
                this.props.cocktailArray.map((cocktail) => 
            <Cocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike}/>)

            }
    
            </div>
        )
    }


}
export default CocktailContainer;