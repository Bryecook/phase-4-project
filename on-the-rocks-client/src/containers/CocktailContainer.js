import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'

class CocktailContainer extends Component {


    render() {

        return (
            <div className="cocktail-collection">
            {
                this.props.cocktailArray.map((cocktail) => 
            <Cocktail cocktail={cocktail}/>)

            }
    
            </div>
        )
    }


}
export default CocktailContainer;