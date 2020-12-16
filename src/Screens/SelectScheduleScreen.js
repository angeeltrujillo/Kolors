import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../components/logoSvg'
import CityItem from '../components/CityItem'
import headerImage from '../../assets/header.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { connect } from 'react-redux';
import TripInfo from '../components/TripInfo'
import { SetOriginTripId, SetReturnTripId } from '../actions/TripActions'


const MESES = ['enero','febrero', 'marzo', 'abril', 'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

const FormatDate = (date) => {
    const day = date.getDate()
    const month = MESES[date.getMonth()]
    const year = date.getFullYear()
    
    return `${day} de ${month} de ${year}`
}

function SelectScheduleScreen ( props ) {
  const { navigation } = props;
  const { TripType } = props.route.params
  const [ tripData, setTripData ] = useState([])


  const tripSegments = () => {
    fetch('https://run.mocky.io/v3/012f4ea3-2ecc-47c3-8181-1f25dd8c62a2')
    .then((response) => response.json())
    .then((json) => {
      setTripData(json.data.tripSegments[0])
    })
    .catch((error) => console.error(error))
  }

  useEffect( () => {
    tripSegments()
}, []);

const renderItem = ({ item }) => (
  <TripInfo {...item} onPress={() => {
    if (props.round == true && TripType == 'Salida') {
      props.SetOriginTripId(item.id)
      navigation.push('SelectScheduleScreen', {
        TripType: 'Regreso'
      })
    } else {
      if (props.round == true && TripType == 'Regreso') {
        props.SetReturnTripId(item.id)
        navigation.push('PassangerData')
      }
    }
    if (props.round == false) {
      props.SetOriginTripId(item.id)
      navigation.push('PassangerData')
    }
     
    }}
  />
);

    return (
        <View>
            <View style={styles.scheduleHeader}>
                <LogoSvg />
                <Text style={styles.headerText}>{TripType == 'Salida' ? 'Viaje de salida' : 'Viaje de regreso'}</Text>
                <Image source={headerImage} style={styles.scheduleImage}></Image>
                <View style={styles.destinations}>
                    <View style={styles.centerText}>
                      <Text style={styles.destinationText}>{TripType == 'Salida' ? props.originPoint.cityName : props.destinationPoint.cityName}</Text>
                      <Text style={styles.destinationSubText}>{TripType == 'Salida'? props.originPoint.name : props.destinationPoint.name}</Text>
                    </View>
                    <FontAwesome5 name="arrow-right" size={20} color="white" />
                    <View style={styles.centerText}>
                      <Text style={styles.destinationText}>{TripType == 'Salida' ? props.destinationPoint.cityName : props.originPoint.cityName}</Text>
                      <Text style={styles.destinationSubText}>{TripType == 'Salida' ? props.destinationPoint.name:  props.originPoint.name }</Text>
                    </View>
                </View>
                <Text style={styles.dateText}>{TripType == 'Salida' ? `Fecha de salida: ${FormatDate(props.startDate)}` : `Fecha de regreso: ${FormatDate(props.endDate)}`}</Text>
            </View>
            <FlatList contentContainerStyle={styles.listComponent}
            data={tripData}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scheduleHeader: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        height: 230,
        backgroundColor: '#5107E9'
      },
      scheduleImage: {
        position: "absolute",
        top: -5,
        left:200,
        height: 160,
        width: 220,
        zIndex: -1
      },
      headerText: {
        marginTop: 34,
        width: 250,
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'Roboto-Bold'
      },
      destinations:{
          marginTop: 18,
          flexDirection:'row',
          justifyContent: 'space-between',
          marginRight: 10
      },
      destinationText: {
          color: '#FFFFFF',
          fontFamily: 'Roboto-Medium',
          fontSize: 16
      },
      destinationSubText: {
        color: '#2B1E5F',
          fontFamily: 'Roboto-Medium',
          fontSize: 15
      },
      dateText: {
        marginTop: 10,
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 16
      },
      centerText: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      listComponent: {
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }
        

})

const mapStateToProps = (state) => {
    return {
      round: state.tripReducer.roundTrip,
      originPoint: state.tripReducer.originPoint,
      destinationPoint: state.tripReducer.destinationPoint,
      startDate: state.tripReducer.startDate,
      endDate: state.tripReducer.endDate,
      startTripId: state.tripReducer.startTripId,
      returnTripId: state.tripReducer.returnTripId
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      SetOriginTripId: (id) => dispatch(SetOriginTripId(id)),
      SetReturnTripId: (id) => dispatch(SetReturnTripId(id))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SelectScheduleScreen);