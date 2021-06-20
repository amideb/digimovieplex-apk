import * as React from 'react';
import { Button, ScrollView, View ,   Text, Switch, StyleSheet, StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BannerSlide from './BannerSlide';
import SignupForm from '../views/Signup';
import LoginForm from '../views/Login';
import MovieGridApi from './MovieGridApi';
import Logout from '../views/Logout';
import Header from './Header';
import BannerSlideApi from './BannerSlideApi';
import Banner from './Banner';
import Icon from 'react-native-vector-icons/Ionicons'; 
import TermsAndCondition from './TermsCondition';

import {VideoPlayerCon} from './VideoPlayerCon';
import MovieDetails from '../views/MovieDetails';
import MovieMain from '../views/MovieMain';
import LoginFun from './LoginFun';

import Profile from '../views/Profile';
import ChangePass from '../views/ChangePassword';
import UpdateProfileApi from './UpdateProfileApi';


 export function HomeScreen({ navigation }) {
  
  
  return (
    <View style={{ flex:1 }}>
        <StatusBar  
                    backgroundColor = "transparent"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
          <View style={styles.view}>
            
            <Icon
            style={{marginTop:40,
              marginLeft:3,
              
              }}  
            onPress={() => navigation.openDrawer()}  
            name="md-menu"  
            size={40}  
            />
            <Header  style={{ }}/>

          </View>
        <ScrollView style={styles.scrollView}>
        
        <BannerSlide style={styles.banner}/>
        
        <MovieGridApi/>
        
        </ScrollView>



      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}


    </View>
  );
}




function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
    <View style={styles.view}>
            
            <Icon
            style={{marginTop:30,
              marginLeft:3,
              
              }}  
            onPress={() => navigation.openDrawer()}  
            name="md-menu"  
            size={40}  
            />
            <Header  style={{ }}/>

            

         </View>
        <SignupForm/>
  </View>

  
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>
  );
}

function LoginScreen({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
    <View style={styles.view}>
            
            <Icon
            style={{marginTop:30,
              marginLeft:3,
              
              }}  
            onPress={() => navigation.openDrawer()}  
            name="md-menu"  
            size={40}  
            />
            <Header  style={{ }}/>

            

         </View>
         <LoginForm/>
  </View>
       
    )
}

function termsAndCondition({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <View style={styles.view}>
          
          <Icon
          style={{marginTop:30,
            marginLeft:3,
            
            }}  
          onPress={() => navigation.openDrawer()}  
          name="md-menu"  
          size={40}  
          />
          <Header  style={{ }}/>

          

       </View>
       <TermsAndCondition/>
</View>
     
  )
}

function logOutScreen({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
    <View style={styles.view}>
            
            <Icon
            style={{marginTop:30,
              marginLeft:3,
              
              }}  
            onPress={() => navigation.openDrawer()}  
            name="md-menu"  
            size={40}  
            />
            <Header  style={{ }}/>

            

         </View>
         <Logout/>
  </View>
       
    )
}

function videoScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <View style={styles.view}>
          
          <Icon
          style={{marginTop:30,
            marginLeft:3,
            
            }}  
          onPress={() => navigation.openDrawer()}  
          name="md-menu"  
          size={40}  
          />
          <Header  style={{ }}/>

          

       </View>
       
       <MovieMain  style={{ flex:1, justifyContent:'center', marginTop:5}}/>
       

</View>
     
  )
}

function movieDetailsScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  <View style={styles.view}>
          
          <Icon
          style={{marginTop:30,
            marginLeft:3,
            
            }}  
          onPress={() => navigation.openDrawer()}  
          name="md-menu"  
          size={40}  
          />
          <Header  style={{ }}/>

          

       </View>
       
       <MovieDetails style={{ flex:1, justifyContent:'center', marginTop:50}}/>
       

</View>
     
  )
}




const Drawer = createDrawerNavigator();

const MyDrawer = ()=> {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
       {/*  <Drawer.Screen name="Login" component={LoginScreen} /> */}
        <Drawer.Screen name="Signup" component={SignUpScreen} />
        <Drawer.Screen name="Logout" component={logOutScreen} />
        <Drawer.Screen name="Terms & Condition" component={termsAndCondition} />
        {/* <Drawer.Screen name="Video Player" component={videoScreen} /> */}
        {/* <Drawer.Screen name="Movie Details" component={movieDetailsScreen} /> */}

        <Drawer.Screen name="Login" component={LoginFun} />

        <Drawer.Screen name="Profile" component={Profile} />

        <Drawer.Screen name="Change Pass" component={ChangePass} />

        <Drawer.Screen name="Update Profile" component={UpdateProfileApi} />
      </Drawer.Navigator>
   // </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  view:{
    flex: 0.15, flexDirection:'row',  

  },
  banner:{
    
    height:20,
    marginTop:20,
    marginEnd:15
  },
  scrollView: {
    flex:2,
    
    marginHorizontal: 8,
  },
  
    
})



 


//make this component available to the app
export default MyDrawer;
