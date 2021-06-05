import React, {Component} from 'react';
import { View } from 'react-native'
import BannerSlide from "./BannerSlide";
import axios from 'axios'

class BannerSlideApi extends Component {
    constructor(props) {
        super(props);
        
    }  

    state ={ movies: []};

    
    

    componentDidMount(){
        axios.get('https://www.api3.digimovieplex.com/api/get_Home_allMoviedetails')
        .then(response => this.setState({ movies: response.data.response}))
        
    }
    renderMovies(){
        return this.state.movies.map(movie =>
            <Banner key={movie.num_movie_id} movie={movie}/>
            );
    }
  

    render(){
        //console.log(this.state.movies.length)
        //console.log(this.state.movies)
        
        
        return(
            <View>
                {this.renderMovies()}
            </View>

           

        );
    }
}

export default BannerSlideApi;