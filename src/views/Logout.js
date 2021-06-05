//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet , AsyncStorage, Button} from "react-native";

// create a component
const Logout = () => {

  const deleteStorage=()=>{

    AsyncStorage.removeItem('user_data', (err, result) => {
      console.log(result);
    });


  }
  return (
    <View style={styles.container}>
      <Button
  onPress={deleteStorage}
  title=" Sign Out"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
export default Logout;
