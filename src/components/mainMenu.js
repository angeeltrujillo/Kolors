import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, useWindowDimensions } from 'react-native';
import LogoSvg from './logoSvg'

export default function MainHeader() {

    let [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../fonts/Roboto/Roboto-Bold.ttf'),
        });
  return (
    <View style={styles.menuContainer}>
        <Text>Reinventando la forma de viajar en autobús</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    menuContainer: {
      height: 215,
      backgroundColor: '#00FF00'
  }
});