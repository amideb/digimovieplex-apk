//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import Header from '../components/Header';
import { VideoPlayerCon } from '../components/VideoPlayerCon';

import Icon from 'react-native-vector-icons/Ionicons'; 



// create a component
const MovieDetails = ({navigation, route}) => {

  //  const { movie } = route.movie;

  const { movie } = route.params;

  const { movieUrl } = route.params;

    //console.log(props.movie.num_movie_id)

    

    

    //console.log(`Hi ${movie.num_movie_id} `)
    return (

        <View style={{ flex:1, justifyContent:'center', marginTop:15}}>


          <View style={{flex: 0.1, flexDirection:'row', } }>
          
     

          

       </View>
       


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      


            
       <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', width:'100%'}}> 
        <VideoPlayerCon movieUrl={movieUrl}  style={styles.video} />
        </View>


<ScrollView style={{marginTop:220, }}>

<View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}> 
<Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >{movie.txt_movie_title}</Text>

</View>

<View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}>
<Text style={{textAlign:'center', margin:25}}>{movie.txt_synopsis}</Text>
</View>



<View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}> 
<Text style={{textAlign:'center', margin:10}} >Directed By: {movie.txt_director}</Text>
<Text style={{textAlign:'center', marginBottom:10}}>Produced By:{movie.txt_producer}</Text>

</View>

<TouchableOpacity style={{backgroundColor:"rgba(208,2,27,1)", height:40, margin:10, width:'95%', borderRadius:10,}}>
<Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3, color: "rgba(255,255,255,1)"}}>BUY TICKET : {movie.num_movie_price_inr}</Text>

</TouchableOpacity>



</ScrollView>

</View>






        </View>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        width:'100%'
    },
    video:{
        marginBottom:20,
        width:'100%'
        
    },
    
      
     
});

//make this component available to the app
export default MovieDetails;
