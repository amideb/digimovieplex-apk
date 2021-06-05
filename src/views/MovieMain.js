//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { VideoPlayerCon } from '../components/VideoPlayerCon';

// create a component
const MovieMain = () => {
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
            <VideoPlayerCon style={styles.video} />
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
        
    },
    
      
     
});

//make this component available to the app
export default MovieMain;
