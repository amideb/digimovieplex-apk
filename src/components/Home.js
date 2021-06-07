//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import MyDrawer, { HomeOriginal } from '../components/Drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


// create a component
const Home = ({navigation, props, route}) => {

    const [active, setActive] = React.useState('');
    return (

      /*  <NavigationContainer>
            <Stack.Navigator independent={true} screenOptions={{headerShown: false}}>
              <Stack.Screen name="MyDrawer" component={MyDrawer}/>
            </Stack.Navigator>
       </NavigationContainer> */

       <MyDrawer/>
           
            

        
       // <HomeOriginal/>
        
    //         <Drawer.Section title="Some title">
    //   <Drawer.Item
    //     label="First Item"
    //     active={active === 'first'}
    //     onPress={() => setActive('first')}
    //   />
    //   <Drawer.Item
    //     label="Second Item"
    //     active={active === 'second'}
    //     onPress={() => setActive('second')}
    //   />
    // </Drawer.Section>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default Home;
