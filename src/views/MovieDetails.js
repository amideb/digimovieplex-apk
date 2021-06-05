//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { VideoPlayerCon } from '../components/VideoPlayerCon';

// create a component
const MovieDetails = () => {
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
            <VideoPlayerCon style={styles.video} />
            </View>
           

           <ScrollView style={{marginTop:250, }}>
           
       <View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}> 
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Bhuban Babur Abhigyata | ভুবন বাবুর অভিজ্ঞতা</Text>

        </View>
           
           <View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}>
            <Text style={{textAlign:'center', margin:25}}>Seemabaddha is a bengali short film on a little boy who lives in a joint family. It shows how he spends his time during this pandemic. This movie has a very important message at the end.  </Text>
            </View>
           
           

           <View style={{backgroundColor:'#d3d3d3', margin:10, width:'95%', borderRadius:10,}}> 
           <Text style={{textAlign:'center', margin:10}} >Directed By: Abhijit Roy</Text>
           <Text style={{textAlign:'center', marginBottom:10}}>Produced By: Nirmitee Vigor Exertainment</Text>

          </View>

           <TouchableOpacity style={{backgroundColor:"rgba(208,2,27,1)", height:40, margin:10, width:'95%', borderRadius:10,}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3, color: "rgba(255,255,255,1)"}}>BUY TICKET</Text>

          </TouchableOpacity>

          

           </ScrollView>
           
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
        
    },
    
      
     
});

//make this component available to the app
export default MovieDetails;
