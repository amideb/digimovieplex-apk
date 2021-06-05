//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import Video, { VideoPlayer } from 'react-native-video';
import * as ScreenOrientation from 'expo-screen-orientation';

//import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';



// create a component
export const VideoPlayerCon = () => {

    const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const onFullscreenUpdate = async ({fullscreenUpdate}) => {
    switch (fullscreenUpdate) {
        case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
            await ScreenOrientation.unlockAsync() // only on Android required
            break;
        case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT) // only on Android required
            break;
    }
}

//const showVideoInFullscreen = async () => { await videoRef.current.presentFullscreenPlayer() }
  


    return (
       

        //<View style={styles.container}>



        <Video
        
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://api3.digimovieplex.com/upload/video/1621017122988-OTT_S4-Teen%20er%20Namta%20Final%20Movie.mov',
          }}
          onReadyForDisplay ={status => setStatus(() => status)}
          //useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}


          useNativeControls={true}
    onFullscreenUpdate={onFullscreenUpdate}

         
          
          
        />
       
      // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        width:'100%',
        
    },
    
      video: {
          
          
         
        position: 'absolute',
        top: 0,
        left: 0,
        
        right: 0,
        
        width: '100%',
        height: 200,
        
        
      },
      
});

//make this component available to the app

