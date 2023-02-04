import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './src/components/Styles'
import Home from './src/components/Home'
import SermonsNavBar from './src/components/SermonsNavBar'
import FBLogo from './src/components/Logo'



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style='auto'/>
      <Button
        title='Sermons'
        onPress={() => navigation.navigate('Sermons')}
      />
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


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{ headerTitle: (props) => <FBLogo {...props} /> }}
        />
        <Stack.Screen name='Sermons' component={Sermons} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


