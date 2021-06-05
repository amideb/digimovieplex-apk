/* //import liraries
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

// create a component
const SignupForm = () => {

    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    return (
   
        <SafeAreaView>

           <TextInput style={styles.input} placeholder={'Write a task'}  />
           <TextInput style={styles.input} placeholder={'Write a task'}  />
           <TextInput style={styles.input} placeholder={'Write a task'}  />
           <TextInput style={styles.input} placeholder={'Write a task'}  />





       
      </SafeAreaView>

           
    );
};

// define your styles

const styles = StyleSheet.create({
  input : {
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#FFBF00',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    marginBottom:10
  },
  });


//make this component available to the app
export default SignupForm;
 */

import React ,{useState, useEffect} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Picker
} from 'react-native'
import AppButton from '../components/AppButton'



export default class SignupForm extends React.Component {
  

  

  state = {
    first_name : '', last_name: '',  email: '', phone:'', password: '', confirm_password: ''
  };


  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { first_name, last_name,  email, phone, password, confirm_password } = this.state

    
    try {

      let item = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        usertype: 3,
        password: this.state.password,
        email: this.state.email,
        type:"both",
        phone:this.state.phone,
        
      };
  
      console.log(item);
  
      let result = await fetch(
        "https://www.api3.digimovieplex.com/api/user_signup",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) =>
            
            console.log(JSON.stringify(response.data))
        
      );

      // here place your signup logic
      console.log('user successfully signed up!: ', this.state)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
         <TextInput
          style={styles.input}
          placeholder='First Name*'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('first_name', val)}
        />


        <TextInput
          style={styles.input}
          placeholder='Last Name*'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('last_name', val)}
        />

         <TextInput
          style={styles.input}
          placeholder='Email*'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />

       <TextInput
       keyboardType={'phone-pad'}
          style={styles.input}
          placeholder='Phone*'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone', val)}
        />

        {/*  <TextInput
          style={styles.input}
          placeholder='User Type'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('user_type', val)}
        /> */}

        {/* <View style={styles.input}>
      <Picker
      selectedValue={this.state.user_type}
        
        onValueChange={(itemValue, itemIndex)=> this.setState({
          user_type: itemValue
        })}
      >
        <Picker.Item label="Producer/Film Maker" value="producer" />
        <Picker.Item label="Audience/Viewer" value="audience" />
      </Picker>
    </View> */}

        <TextInput
          style={styles.input}
          placeholder='Password*'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
       
        <TextInput
          style={styles.input}
          placeholder='Confirm Password*'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('confirm_password', val)}
        />
        
        <AppButton style={styles.button} onPress={this.signUp} title="Sign Up"/>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#d3d3d3",
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
   
    
 }
})
