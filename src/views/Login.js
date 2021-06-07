
import React, {useState, useEffect} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Picker,
  Keyboard,
  ToastAndroid,
  AsyncStorage 
} from 'react-native';


import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigator } from 'react-navigation';




import AppButton from '../components/AppButton'



import { withNavigation } from 'react-navigation';


export default class LoginForm extends React.Component    {

 
  

 /*  navigateS=({navigation})=>{
    navigation.navigate('loginDone')

  } */

  
 
  
  state = {
    user_name : '',  password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  logIn = async () => {
    const { user_name,  password } = this.state
    Keyboard.dismiss();  

    try {
      let item = { username: this.state.user_name, password: this.state.password };
       console.log(item)
      if (item.username !== "" && item.password !== "") {
        let result = await fetch(
          "https://www.api3.digimovieplex.com/api/user_signin",
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              let userInfo = {
                token: data.response.token,
                name: `${data.response.first_name} ${data.response.last_name}`,
                num_master_id: data.response.num_master_id,
                num_user_id: data.response.num_user_id,
                txt_user_id: data.response.txt_user_id,
                txt_emailid: data.response.txt_emailid,
                num_mobile_no: data.response.num_mobile_no,
                txt_profile_pic: data.response.txt_profile_pic,
              };
              
              console.log(userInfo)
             
             
              ToastAndroid.show("Logged In!", ToastAndroid.SHORT);

              AsyncStorage.setItem(
                'user_data',
                JSON.stringify(userInfo),
               
                    () => {
                      AsyncStorage.getItem('user_data', (err, result) => {
                        console.log(result);
                        console.log(result.name);
                      });
                    }
                 
              );
          

              

              
              //this.navigateS()
              
             
              
              
              //this.state.user_name=null;
              //this.state.password=null;

            

              
              
  
             // sessionStorage.setItem("auth", JSON.stringify(userInfo));
              //close();
              //window.location.reload(true);
             // console.log('user successfully logged in!: ', this.state)
              
            } else {
              console.log(data.message);
              ToastAndroid.show(`${data.message}`, ToastAndroid.SHORT);
            }
          });
          
      } else {
        console.log("Username and Password both are required");
      }
      
      // here place your login logic
      
    } catch (err) {
      console.log('error loging in: ', err.message)
    }
  }
 
  render() {

    
    return (
      <View style={styles.container}>
         <TextInput
          style={styles.input}
          placeholder='Username*'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('user_name', val)}
        />


        <TextInput
          style={styles.input}
          placeholder='Password*'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
       
        
        
        <AppButton style={styles.button} onPress={this.logIn} title="LOG IN"/>
       

        
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
    width:'100%'
 }
})


