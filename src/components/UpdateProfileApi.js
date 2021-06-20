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
  ScrollView,
} from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "react-navigation";

import AppButton from "./AppButton";

import { withNavigation } from "react-navigation";

export default UpdateProfileAi = ({ navigation, route, props }) => {
  /*  navigateS=({navigation})=>{
    navigation.navigate('loginDone')

  } */

  const [profile, setProfile] = useState("");

  AsyncStorage.getItem("user_data", (err, result) => {
    const parsedData = JSON.parse(result);
    setProfile(parsedData);
    //console.log(profile)
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dob, setDob] = useState("");

  const [gender, setGender] = useState("");

  const [firstAddress, setFirstAddress] = useState("");

  const [secondAddress, setSecondAddress] = useState("");

  const [zipCode, setZipCode] = useState("");

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  updateProfile = async () => {
    //console.log(user_name, password)

    Keyboard.dismiss();

    try {
      let item = {
        user_id: profile.num_user_id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        dateofbirth: dob,
        gender: gender,
        first_address: firstAddress,
        second_address: secondAddress,
        pin_code: zipCode,
      };
      console.log(item);
      if (item.first_name !== "" && item.last_name !== "") {
        let result = await fetch(
          "https://www.api3.digimovieplex.com/api/update_profile",
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
                token: profile.token,
                name: `${item.first_name} ${item.last_name}`,
                num_master_id: profile.num_master_id,
                num_user_id: profile.num_user_id,
                txt_user_id: profile.txt_user_id,
                txt_emailid: item.email,
                num_mobile_no: item.phone,
                txt_profile_pic: profile.txt_profile_pic,
                txt_user_dob: item.dateofbirth,
                txt_gender: item.gender,
                txt_address_1: item.first_address,
                txt_address_2: item.second_address,
                num_pin_code: item.pin_code,
              };

              console.log(userInfo);

              ToastAndroid.show(`Update Success`, ToastAndroid.LONG);

              AsyncStorage.setItem(
                "user_data",
                JSON.stringify(userInfo),

                () => {
                  AsyncStorage.getItem("user_data", (err, result) => {
                    console.log(result);
                  });
                }
              );

              // navigation.navigate("Home");

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
        console.log("Dta Required");
      }

      // here place your login logic
    } catch (err) {
      console.log("error updating in: ", err.message);
    }
  };

  forgetPass = () => {
    navigation.navigate("ForgotPass");
  };

  return (
    <ScrollView
      style={{ flex: 1, marginTop: 20, paddingTop: 40, paddingBottom: 100 }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="First Name*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setFirstName(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setLastName(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Phone*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setPhone(val)}
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="DOB* [YYYY-MM-DD]"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setDob(val)}
        />

        {/* <TextInput
        style={styles.input}
        placeholder="Gender*"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setGender(val)}
      /> */}

        <View style={styles.input}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label="Male" value="M" />
            <Picker.Item label="Female" value="F" />
            <Picker.Item label="Other" value="O" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="First Address*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setFirstAddress(val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Second Address*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setSecondAddress(val)}
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Pincode*"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => setZipCode(val)}
        />

        <AppButton
          style={styles.button}
          onPress={updateProfile}
          title="UPDATE"
        />

        <View
          style={{
            width: 350,
            height: 55,

            margin: 10,
            padding: 8,
            color: "white",
            borderRadius: 14,
            fontSize: 18,
            fontWeight: "500",
          }}
        ></View>
      </View>
    </ScrollView>
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
    marginBottom: 40,
  },
});
