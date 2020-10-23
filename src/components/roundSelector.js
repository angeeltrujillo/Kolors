import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function tripSelector() {
  const [isRound, setisRound] = useState(true);
  return (
    <View style={styles.container}>
        <Pressable style={isRound ? styles.toggleInactive : styles.toggleActive} onPress={ () => {
            setisRound(!isRound)
        }}>
            <Text style={isRound ? styles.textInactive : styles.textActive}>Sencillo</Text>
        </Pressable>
        <Pressable style={isRound ? styles.toggleActive : styles.toggleInactive} onPress={ () => {
            setisRound(!isRound)
        }}>
            <Text style={isRound ? styles.textActive : styles.textInactive}>Redondo</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F6F0FE',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    toggleActive: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F06E4',
        borderRadius: 20,
    },
    toggleInactive: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textActive: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    textInactive: {
        color: '#BFBFBF',
        fontFamily: 'Roboto-Medium',
        fontSize: 16
    }
});