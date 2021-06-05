//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios'

// create a component
const Banner = () => {

    
    state ={ movies: []};
    state ={ movieUrl: []};

    
    

    componentDidMount=()=>{
        axios.get('https://www.api3.digimovieplex.com/api/get_Home_allMoviedetails')
        .then(response => {this.setState({ movies: response.data.response})  
        this.state.movies.map(movie=> this.setState({ movieUrl: `https://www.api3.digimovieplex.com/${movie.txt_banner1}`}))
    })
        
        
    }
   
    state ={ photos: []};

 
  
     console.log('Hi')
    console.log(this.state.movies.toString())
    console.log(movieUrl.toString())
    console.log('Hi1')
    
    console.log('Hi2')

    return (
        
        
         
        <View style={styles.container}>
          

      <View >
          <SliderBox 
          
          style={styles.box}
         
            images={this.state.movieUrl}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
          />

    </View>
        </View>
      );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      
     
    },
    box:{
        height:200
    },
    
   
  });

//make this component available to the app
export default Banner;
