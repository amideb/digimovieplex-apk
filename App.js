// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import BannerSlide from './src/components/BannerSlide';
// import Home from './src/components/Home';
// import MovieGrid from './src/components/MovieGrid';
// import LoginForm from './src/views/Login';
// import SignupForm from './src/views/Signup';

// export default function App() {
//   return (
//     <View style={styles.container}>
//      <Home/>
//      {/* // <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { BottomNavigation, Text, Drawer} from 'react-native-paper';
import Home from './src/components/Home';
import Search from './src/views/Search';
import Trending from './src/views/Trending';
import TVSeries from './src/views/TVSeries';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginDone from './src/views/LoginDone';
import  HomeScreen  from './src/components/Drawer'
import LoginForm from './src/views/Login';

const Stack = createStackNavigator();


function nav({navigation}){

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
     { key: 'home', title: 'Home', icon: 'home' }, 
    { key: 'trending', title: 'Trending', icon: 'fire' },
    { key: 'tvSeries', title: 'TV Series', icon: 'television-classic' },
    { key: 'search', title: 'Search', icon: 'magnify' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    trending: Trending,
    tvSeries: TVSeries,
    search: Search
  });


  return (  

    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );


}


/* const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
     { key: 'home', title: 'Home', icon: 'home' }, 
    { key: 'trending', title: 'Trending', icon: 'fire' },
    { key: 'tvSeries', title: 'TV Series', icon: 'television-classic' },
    { key: 'search', title: 'Search', icon: 'magnify' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    trending: Trending,
    tvSeries: TVSeries,
    search: Search
  });

  const [active, setActive] = React.useState('');
  
  return (  

    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
}; */

const App = () => {
  

  
  return (
    <NavigationContainer 
    >
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Home">
      
        <Stack.Screen name="Home" component={nav} />
        <Stack.Screen name="LoginDone" component={LoginDone} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};







const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
