import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeSelector from './src/components/TimeSelector'
import Colors from './src/constants/Colors'

// LIMITS has to callibrated if you are changing the styling of the TimeSelector component.
//LIMITS sets the limit of y-cordinates, that can help us detect the value of time in middle of the ScrollView.
const LIMITS = 62.5

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style = {styles.headerText}>Select Time</Text>
      <TimeSelector limit = {LIMITS} defaultOffsetHour = {12}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gradientEnd,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText : {
    color : "white",
    fontSize : 32,
    marginBottom : 40
  }
});
