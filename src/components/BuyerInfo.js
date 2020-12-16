import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'

function BuyerInfo(props) {
  return (
    <View style={[styles.InfoView, {
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 5
    }]}>
        <View>
            <Text style={styles.headerText}>Datos del comprador</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.textInput} placeholder='Nombre' placeholderTextColor='#8171B9'></TextInput>
            <TextInput style={styles.textInput} placeholder='Apellido' placeholderTextColor='#8171B9'></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.textInput} placeholder='Correo electrónico' placeholderTextColor='#8171B9' keyboardType='email-address'></TextInput>
            <TextInput style={styles.textInput} placeholder='Teléfono' placeholderTextColor='#8171B9' keyboardType='phone-pad'></TextInput>
        </View>
           
    </View>
  )
}

const styles = StyleSheet.create({
    InfoView: {
        marginTop: 12,
        marginBottom: 8,
        width: 335,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    headerText: {
        paddingLeft: 10,
        paddingTop: 10,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: '#2B1E5F',
    },
    textInput: {
        margin: 8,
        width: 150,
        height: 35,
        borderRadius: 4,
        backgroundColor: '#F6F0FE',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#8171B9',
        paddingHorizontal: 5
    }
})

export default BuyerInfo