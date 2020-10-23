import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function departureDate() {
  
  return (
    <View style={styles.container}>
        <Pressable>
            <Text>Salida</Text>
            <Text>16</Text>
            <Text>Octubre</Text>
            <Text>2020</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginRight: 10,
        width: 140,
        height: 110,
        backgroundColor: '#F6F0FE',
        borderRadius: 5
    }
});