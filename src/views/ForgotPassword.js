//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet , TextInput, Keyboard, ToastAndroid} from 'react-native';
import AppButton from '../components/AppButton';



// create a component
const ForgotPass = ({navigation, route, props}) => {

    const [user_name, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    onChangeText = (key, val) => {
      this.setState({ [key]: val });
    };

    const fgPass= async ()=>{
        Keyboard.dismiss();

        try {
          let item = { user_email: user_name, new_password: password };
           console.log(item)
          if (item.username !== "" && item.password !== "") {
            let result = await fetch(
              "https://www.api3.digimovieplex.com/api/forgot_password",
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
                    user_id: data.response.num_user_id,
                  };
    
                  console.log(userInfo)
    
                  ToastAndroid.show(`Logged In! + ${JSON.stringify(userInfo)} `, ToastAndroid.SHORT);
    
                  
    
                  navigation.navigate("LoginFun");
    
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
          console.log("error loging in: ", err.message);
        }
    }

    

    return (
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User Email*"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setUserName(val)}
      />

      <TextInput
        style={styles.input}
        placeholder="New Password*"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
       onChangeText={(val) => setPassword(val)}
      />

      

      <AppButton style={styles.button} onPress={fgPass} title="Set Password" />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: "#d3d3d3",
  
      margin: 10,
      padding: 8,
      color: "white",
      borderRadius: 14,
      fontSize: 18,
      fontWeight: "500",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: "100%",
    },
  });

//make this component available to the app
export default ForgotPass;
