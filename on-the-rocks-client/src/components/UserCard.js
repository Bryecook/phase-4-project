import React, { Component } from 'react'
import Cocktail from './Cocktail.js'

export default class UserCard extends Component {

    handleClick=(profile)=>{
        this.props.deleteProfile(this.props.profile)
    }

    unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    
    
    render() {
        console.log(this.props.user.favorites)

        var resArr = [];
        this.props.user.favorite.cocktails.forEach(function(item){
        var i = resArr.findIndex(x => x.name == item.name);
        if(i <= -1){
            resArr.push(item);
            }
        }); 
        console.log(resArr)
        return (
            <div>
                <h1>{this.props.user.name}'s Profile</h1>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Home Town: {this.props.user.hometown}</h3>                
                <img className='photo' src={this.props.user.picture}/> <br/>
                <button onClick={this.handleClick} className='del-btn'>Delete Profile</button>
                {
                resArr.map((cocktail) => 
            <Cocktail cocktail={cocktail} like={this.props.like} dislike={this.props.dislike} user= {this.props.user} refresh= {this.props.refresh}/>)

            }
               

            </div>
        )
    }
}


