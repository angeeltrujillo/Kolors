import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../components/logoSvg'
import CityItem from '../components/CityItem'
import headerImage from '../../assets/header.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { connect } from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator'
import BuyerInfo from '../components/BuyerInfo'
import PassagerInfo from '../components/PassangerInfo'

function PassangerData (props) {
    const { navigation } = props;
    
    const searchButton = () => {
      navigation.navigate('MainScreen')
    }
    if (props.round == true) {
    return (       
      <View style={styles.container}>
          <View style={styles.mainHeader}>
              <LogoSvg />
              <Image source={headerImage} style={styles.headerImage}/>
              <Text style={styles.ViajeSalida}>Viaje de salida</Text>
              <View style={styles.salidaContainer}>
                <View>
                  <Text style={styles.locationText}>{props.originPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.originPoint.name}</Text>
                </View>
                <View>
                  <FontAwesome5 name="arrow-right" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.locationText}>{props.destinationPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.destinationPoint.name}</Text>
                </View>
              </View>
              <Text style={styles.DateText}>{props.startDate.toString()}</Text>
              <Text style={styles.ViajeRegreso}>Viaje de regreso</Text>
              <View style={styles.salidaContainer}>
                <View>
                <Text style={styles.locationText}>{props.destinationPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.destinationPoint.name}</Text>
                </View>
                <View>
                  <FontAwesome5 name="arrow-right" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.locationText}>{props.originPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.originPoint.name}</Text>
                </View>
              </View>
              <Text style={styles.DateText}>{props.endDate.toString()}</Text>
          </View>
          <ScrollView contentContainerStyle={styles.infoScrollView}>
              <BuyerInfo></BuyerInfo>
              <PassagerInfo></PassagerInfo>
              <Pressable style={styles.navigateButton} onPress={searchButton}>
                <Text style={styles.navigateButtonText}>Comprar</Text>
            </Pressable>
          </ScrollView>
      </View>   
    )   
    }
    else {
      return (
        <View style={styles.container}>
          <View style={styles.mainHeader2}>
              <LogoSvg />
              <Image source={headerImage} style={styles.headerImage}/>
              <Text style={styles.ViajeSalida}>Viaje de salida</Text>
              <View style={styles.salidaContainer}>
                <View>
                  <Text style={styles.locationText}>{props.originPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.originPoint.name}</Text>
                </View>
                <View>
                  <FontAwesome5 name="arrow-right" size={20} color="white" />
                </View>
                <View>
                  <Text style={styles.locationText}>{props.destinationPoint.cityName}</Text>
                  <Text style={styles.locationSubText}>{props.destinationPoint.name}</Text>
                </View>
              </View>
              <Text style={styles.DateText}>{props.startDate.toString()}</Text>
          </View>
          <ScrollView contentContainerStyle={styles.infoScrollView}>
              <BuyerInfo></BuyerInfo>
              <PassagerInfo></PassagerInfo>
              <Pressable style={styles.navigateButton} onPress={searchButton}>
                <Text style={styles.navigateButtonText}>Comprar</Text>
            </Pressable>
          </ScrollView>
      </View> 
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
      },
      mainHeader: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        height: 350,
        backgroundColor: '#5107E9'
      },
      mainHeader2: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        height: 250,
        backgroundColor: '#5107E9'
      },
      headerImage: {
        position: "absolute",
        top: -5,
        left:200,
        height: 160,
        width: 220,
        zIndex: -1,
      },
      ViajeSalida: {
        color:'#2B1E5F',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 60
      },
      ViajeRegreso: {
        color:'#2B1E5F',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 15
      },
      locationText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 15
      },
      locationSubText: {
        color: '#BFBFBF',
        fontFamily: 'Roboto-Medium',
        fontSize: 15
      },
      salidaContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingRight: 5
      },
      DateText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        paddingTop: 5
      },
      infoScrollView: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      navigateButton: {
        marginTop: 10,
        width: 120,
        height: 40,
        backgroundColor: '#FF004A',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'center'
      },
      navigateButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
    
      },
});

const mapStateToProps = (state) => {
    return {
      round: state.tripReducer.roundTrip,
      originPoint: state.tripReducer.originPoint,
      destinationPoint: state.tripReducer.destinationPoint,
      startDate: state.tripReducer.startDate,
      endDate: state.tripReducer.endDate
    }
  };

 

export default connect(mapStateToProps)(PassangerData);
