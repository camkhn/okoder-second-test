import React from 'react'
import MainStackNavigator from './src/navigation/MainStackNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
 
export default function App() {
  Icon.loadFont();
  return <MainStackNavigator />
}