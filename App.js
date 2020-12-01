import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import TimeSelector from './src/components/TimeSelector'
import Colors from './src/constants/Colors'

// LIMITS has to callibrated if you are changing the styling of the TimeSelector component.
//LIMITS sets the limit of y-cordinates, that can help us detect the item in middle of the ScrollView.
const LIMITS = 62.5

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style = {styles.headerText}>Select Time</Text>
      {Platform.OS === "ios"?   <TimeSelector limit = {LIMITS} defaultOffsetHour = {12}/> : 
      <View style = {styles.AndroidView}>
        <Text style = {styles.AndroidText}>Sorry Android User,{"\n"} This works on iOS devices only</Text>
      </View>
      }
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
  },
  AndroidView : {
    height  : 350,
    justifyContent : "center",
  },
  AndroidText : {
    fontSize : 20,
    color : "white",
    textAlign : "center",
    lineHeight : 40
  }
});
