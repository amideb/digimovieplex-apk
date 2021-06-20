//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage, Button } from "react-native";
import AppButton from "../components/AppButton";

// create a component
const Profile = ({ navigation, route }) => {
  const [profile, setProfile] = useState("");

  AsyncStorage.getItem("user_data", (err, result) => {
    const parsedData = JSON.parse(result);
    setProfile(parsedData);
    //console.log(profile)
  });

  /*  getUserData = async ()=>{
        const storedData = await AsyncStorage.getItem('user_data');
        setProfile(JSON.parse(storedData))
        console.log(profile)

      }

      getUserData() */

  /* const storedData = await AsyncStorage.getItem('user_data');
      const profile = JSON.parse(storedData); */


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











































  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#d3d3d3", width:"80%", height:'75%',  borderRadius:15,
    
    justifyContent: "center",
    alignItems: "center",}}>

       <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Name</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >{  (!!profile.name) ? profile.name : <Text>Login Req</Text> }</Text>

        </View>

        <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Email</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >{  (!!profile.txt_emailid) ? profile.txt_emailid : <Text>Login Req</Text> }</Text>

        </View>

        <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Phone</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >+91{  (!!profile.num_mobile_no) ? profile.num_mobile_no : <Text>Login Req</Text> }</Text>

        </View>

        <View>
          <AppButton title="Update Profile"/>

        </View>
        

     

      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
});

//make this component available to the app
export default Profile;
