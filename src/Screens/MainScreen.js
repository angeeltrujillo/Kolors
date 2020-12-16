import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import LogoSvg from '../components/logoSvg'
import Constants from 'expo-constants';
import headerImage from '../../assets/header.png'
import RoundSelector from '../components/roundSelector'
import CitySelector from '../components/CitySelector'
import DatePicker from '../components/DatePicker'
import { connect } from 'react-redux';
import { toggleOriginModal } from '../actions/TripActions'


function MainScreen(props) {
  const { navigation } = props;
  const searchButton = () => {
    if (props.round) {
      if (props.originPoint.name && props.destinationPoint.name && props.startDate && props.endDate) {
        navigation.navigate('SelectScheduleScreen', {
          TripType: 'Salida'
        })
      } else {
        Alert.alert(
          "Seleccione Origen/Destino",
          "Seleccione Origen/Destino"
          [
            { text: "OK" }
          ],
          { cancelable: true }
        )
      }
    } else {
      if (props.originPoint.name && props.destinationPoint.name && props.startDate) {
        navigation.navigate('SelectScheduleScreen', {
          TripType: 'Salida'
        })
      } else {
        Alert.alert(
          "Seleccione Origen/Destino",
          "Seleccione Origen/Destino"
          [
            { text: "OK" }
          ],
          { cancelable: true }
        )
      }
    }
  }

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
        <CitySelector onPress={ () => navigation.navigate('ModalScreen', { 
          apiUrl: 'https://run.mocky.io/v3/084fb9f7-706c-4f1c-aa94-fd352c59ad8a',
          modalType: 'Origen'
        })} iconName="bus-alt" selectorType="Origen"></CitySelector>
        <Text style={styles.textTravelOptions}>Destino</Text>
        <CitySelector onPress={ () => props.originPoint.name ? navigation.navigate('ModalScreen', { 
          apiUrl: 'https://run.mocky.io/v3/47c7bbff-197b-4a30-b19e-8232653da18b',
          modalType: 'Destino'
        }) : Alert.alert(
          "Elige de donde sales",
          "Elige de donde sales"
          [
            { text: "OK" }
          ],
          { cancelable: true }
        )} iconName="map-marker-alt" selectorType="Destino"></CitySelector>
        <Text style={styles.textTravelOptions}>Fechas</Text>
          <View style={styles.datesContainer}>
            <DatePicker round={props.round}></DatePicker>
          </View>
          <Pressable style={styles.navigateButton} onPress={searchButton}>
          <Text style={styles.navigateButtonText}>Buscar</Text>
        </Pressable>
      </View>
    </View>
  );
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
    height: 480,
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
  datesContainer: {
    flexDirection: 'row'
  }
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOrigin: () => dispatch(toggleOriginModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
