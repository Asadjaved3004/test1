import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
//Navigation


const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <View>
    <ImageBackground
    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6M9a0zEsSitiBgQVjdn67tWO0t4JCmnejw&s'}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
