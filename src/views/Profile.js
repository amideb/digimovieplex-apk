//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

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

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#d3d3d3", width:"80%", height:'75%',  borderRadius:15,
    
    justifyContent: "center",
    alignItems: "center",}}>

       <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Name</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >{profile.name}</Text>

        </View>

        <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Email</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >{profile.txt_emailid}</Text>

        </View>

        <View style={{backgroundColor:'#fffaf0', margin:10, width:'95%', borderRadius:10,}}> 
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >Phone</Text>
       <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center', margin:3}} >+91{profile.num_mobile_no}</Text>

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
