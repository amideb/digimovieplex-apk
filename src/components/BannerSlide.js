//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Header from './Header';
import MovieGrid from './MovieGrid';




// create a component
/* const BannerSlide = (props) => {

    constructor(props){
        super(props);


    }
    return (
        <View style={styles.container}>
            <Text>BannerSlide</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BannerSlide; */

export default class BannerSlide extends Component {
  
    constructor(props) {
        super(props);
        
        

        


      this.state = {
        images: [
          "https://source.unsplash.com/1024x768/?nature",
          "https://source.unsplash.com/1024x768/?water",
          "https://source.unsplash.com/1024x768/?girl",
          "https://source.unsplash.com/1024x768/?tree",
         
        ]
      };
    }
    
   
    
   
    render() {
      
      
      
      return (
        
         
        <View style={styles.container}>
          

      <View >
          <SliderBox 
          
          style={styles.box}
         
            images={this.state.images}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
          />

    </View>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
    
      
      
      
     
    },
    box:{
      flex:1,
      width:'96%',
        height:200,
        borderRadius:15,
        
    },
    
   
  });
