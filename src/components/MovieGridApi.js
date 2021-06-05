import React, { Component } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import MovieGrid from './MovieGrid';
import { useEffect, useState } from "react";
import { FlatGrid } from 'react-native-super-grid';




class MovieGridApi extends Component {
    constructor(props) {
        super(props);
        var mov=[];  // I declare the variable here
        mov.push(this.renderMovies)
    }
     

    

    state ={ movies: []};

    
    

    componentDidMount(){
        axios.get('https://www.api3.digimovieplex.com/api/get_Home_allMoviedetails')
        .then(response => this.setState({ movies: response.data.response}))
        
    }
    renderMovies(){
        return this.state.movies.map(movie =>
            <MovieGrid key={movie.num_movie_id} movie={movie}/>
            );
    }
   rndMov(mov){
       return (
           <MovieGrid key={mov.num_movie_id} movie={mov}/>

       );

   }

    render(){
        //console.log(this.state.movies.length)
        //console.log(this.state.movies)
        
        
        return(

            <FlatGrid
  itemDimension={140}
  data={this.state.movies}
  spacing={5.4}
  renderItem={({ item }) => ( <View>
                
    {this.rndMov(item)}
    </View>)}
/>
           

        );
    }
}

export default MovieGridApi;