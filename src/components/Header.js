//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/digital.png')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        marginBottom:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:50
        
    },
    img:{
        
        width:100,
       height:50,
        resizeMode:'cover',
       
    }
});

//make this component available to the app
export default Header;
