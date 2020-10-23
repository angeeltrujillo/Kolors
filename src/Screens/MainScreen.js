import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AppLoading } from 'expo';
import {useFonts} from 'expo-font';
import LogoSvg from '../components/logoSvg'
import Constants from 'expo-constants';
import headerImage from '../../assets/header.png'
import RoundSelector from '../components/roundSelector'
import OriginSelector from '../components/originSelector'
import DestinationSelector from '../components/destinationSelector'
import DepartureDate from '../components/departureDate'
import { connect } from 'react-redux';
import { toggleOriginModal } from '../actions/TripActions'




function MainScreen({navigation, trip}) {
  let [fontsLoaded, error] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf')
    });
  if (!fontsLoaded) {
    return <AppLoading />;  
  }
  else {
    return (
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <LogoSvg />
          <Text style={styles.headerText}>Reinventando la forma de viajar en autobús</Text>
          <Image source={headerImage} style={styles.headerImage}/>
        </View>
        <View style={[styles.travelOptions, {
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.2,
          shadowRadius: 5
        }]}>
          <RoundSelector></RoundSelector>
          <Text style={styles.textTravelOptions}>Origen</Text>
          <OriginSelector></OriginSelector>
          <Text style={styles.textTravelOptions}>Destino</Text>
          <DestinationSelector></DestinationSelector>
          <Text style={styles.textTravelOptions}>Fechas</Text>
            <View style={styles.datesContainer}>
              <DepartureDate></DepartureDate>
              <DepartureDate></DepartureDate>
            </View>
          <Pressable style={styles.navigateButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navigateButtonText}>Buscar</Text>
          </Pressable>
        </View>
      </View>
    );
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
  travelOptions: {
    position: 'relative',
    top: -50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    height: 450,
    zIndex: 2,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textTravelOptions: {
    marginLeft: 20,
    color: '#bfbfbf',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    alignSelf: 'flex-start'
  },
  navigateButton: {
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
  datesContainer: {
    flexDirection: 'row'
  }
});

const mapStateToProps = (state) => {
  return {
    trip: state.tripReducer.originModal
  }
};

const mapDispatchToProps = (state) => {
  return {
    toggleOrigin: () => dispatch(toggleOriginModal())
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
