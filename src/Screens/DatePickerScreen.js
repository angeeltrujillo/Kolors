import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../components/logoSvg'
import headerImage from '../../assets/header.png'
import { FontAwesome5 } from '@expo/vector-icons'
import Calendar from '../components/Calendar'
import { connect } from 'react-redux';


function DatePickerScreen (props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <LogoSvg />
                <Text style={styles.headerText}>Reinventando la forma de viajar en autobús</Text>
                <Image source={headerImage} style={styles.headerImage}/>
            </View>
            <View style={[styles.content, {
                shadowOffset: {
                width: 0,
                height: 3
                },
                shadowOpacity: 0.2,
                shadowRadius: 5
            }]}>
                <Calendar></Calendar>
                <View style={styles.btnView}>
                    <View style={styles.closeBtn}>
                        <FontAwesome5 name="times" size={24} color="white" onPress={ () => {
                            navigation.goBack()
                        }}/>
                    </View>
                    <View style={styles.aceptBtn}>
                        <FontAwesome5 name="check" size={24} color="white" onPress={ () => {
                            navigation.goBack()
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
      },
      mainHeader: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        height: 215,
        backgroundColor: '#5107E9'
      },
      headerText: {
        marginTop: 24,
        width: 250,
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'Roboto-Bold'
      },
      headerImage: {
        position: "absolute",
        top: -5,
        left:200,
        height: 160,
        width: 220,
        zIndex: -1
      },
      content: {
        position: 'relative',
        top: -50,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        height: 500,
        zIndex: 2,
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      closeBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF004A'
    },
    aceptBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#79D0B0'
    },
    btnView: {
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginLeft:20,
        width: 335,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
    return {
      startDate: state.tripReducer.startDate,
      endDate: state.tripReducer.endDate,
      roundTrip: state.tripReducer.roundTrip
    }
  };
  
export default connect(mapStateToProps)(DatePickerScreen);;
