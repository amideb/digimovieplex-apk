import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Picker,
  Keyboard,
  ToastAndroid,
  AsyncStorage,
} from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "react-navigation";

import AppButton from "./AppButton";

import { withNavigation } from "react-navigation";

export default LoginFun = ({ navigation, route, props }) => {
  /*  navigateS=({navigation})=>{
    navigation.navigate('loginDone')

  } */

  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  logIn = async () => {
    //console.log(user_name, password)

    Keyboard.dismiss();

    try {
      let item = { username: user_name, password: password };
      // console.log(item)
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

              //console.log(userInfo)

              ToastAndroid.show(`Welcome ${userInfo.name}`, ToastAndroid.LONG);

              AsyncStorage.setItem(
                "user_data",
                JSON.stringify(userInfo),

                () => {
                  AsyncStorage.getItem("user_data", (err, result) => {
                    console.log(result);
                  });
                }
              );

              

              navigation.navigate("Home");

              setUserName('')
              setPassword('')

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
  };

  forgetPass =()=>{
      navigation.navigate("ForgotPass")

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username*"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setUserName(val)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password*"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setPassword(val)}
      />

      <AppButton style={styles.button} onPress={logIn} title="LOG IN" />

      <AppButton style={styles.button} onPress={forgetPass} title="Forget Password" />
    </View>
  );
};

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
