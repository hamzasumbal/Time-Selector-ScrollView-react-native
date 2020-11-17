import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeSelector from './src/components/TimeSelector'
import Colors from './src/constants/Colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style = {styles.headerText}>Select Time</Text>
      <TimeSelector limit = {62.5} defaultOffsetHour = {12}/>
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
