import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './src/components/Styles'
import Home from './src/components/Home'
import SermonsNavBar from './src/components/SermonsNavBar'
import FBLogo from './src/components/Logo'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style='auto'/>
      
    </View>
  )
}

const Sermons = () => {
  return (
    <View styles={styles.container}>
      <SermonsNavBar/>
      <StatusBar styles='auto'/>
    </View>
  )
}


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const homeIcon = <FontAwesome5 name={'home'}/>

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeScreen}
          options={{ 
            headerRight: (props) => <FBLogo {...props} />,
            tabBarIcon: () => (
              <FontAwesome5 name='home' size={30} />
            )
            }}
        />
        <Tab.Screen 
          name='Sermons' 
          component={Sermons} 
          options={{
            headerRight: (props) => <FBLogo {...props} />,
            tabBarIcon: () => (
              <FontAwesome5 name='church' size={30} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}


