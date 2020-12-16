import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable} from 'react-native';
import Constants from 'expo-constants';
import LogoSvg from '../components/logoSvg'
import CityItem from '../components/CityItem'
import headerImage from '../../assets/header.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { connect } from 'react-redux';
import { SetOrigin, SetDestination } from '../actions/TripActions'
import LoadingIndicator from '../components/LoadingIndicator'
import {originSuggestions} from '../utils/ApiCalls'

function originModalScreen (props) {
    const { navigation } = props;
    const { apiUrl, modalType } = props.route.params
    const [ originData, setOriginData ] = useState([])
    const [ filterData, setFilterData ] = useState([])

    // Clean this up. Move API calls to a single file
    const originSuggestions = () => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
            if (modalType == 'Destino') {
                setOriginData(json.data.destinationSuggestions)
                setFilterData(json.data.destinationSuggestions)
            } else {
                setOriginData(json.data.originSuggestions)
                setFilterData(json.data.originSuggestions)
            }
        })
        .catch((error) => console.error(error))
    }
    
    useEffect( () => {
        originSuggestions()
    }, []);

    const handleSearch = (text) => {
        console.log(text)
        const response = originData.filter((item) => {
            return item.name.includes(text) || item.cityName.includes(text)
        })
        setFilterData(response)
    }

    const renderItem = ({ item }) => (
        <CityItem cityName={item.cityName} stateCode={item.stateCode}
        type={item.type} name={item.name} onPress={() => {
            if (modalType == 'Destino') {
                props.setDestination(item)
            } else {
                props.setOrigin(item)
            }
            navigation.navigate('MainScreen')
        }
        }/>
      );

    return (
        <View style={{flex:1}}>
        <View style={styles.modalHeader}>
            <LogoSvg />
            <Text style={styles.modalText}>{modalType}</Text>
            <Image source={headerImage} style={styles.modalImage}></Image>
            <View style={styles.textInputView}>
                <FontAwesome5 style={styles.textInputIcon} name="bus-alt" size={24} color="#8171B9" />
                <TextInput style={styles.textInputArea} onChangeText={text => handleSearch(text)} placeholder="Buscar">
                </TextInput>
            </View>
        </View>
        <FlatList
                contentContainerStyle={styles.listContainer}
                data={filterData}
                extraData={filterData}
                renderItem={renderItem}
                ListEmptyComponent={LoadingIndicator}
                keyExtractor={(item) => item.id}

        />
        <View style={styles.btnView}>
            <View style={styles.closeBtn}>
                <FontAwesome5 name="times" size={24} color="white" onPress={ () => {
                    navigation.goBack()
                }}/>
            </View>
        </View>
        
    </View>   
    )
}

const styles = StyleSheet.create({
    modalHeader: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        height: 215,
        backgroundColor: '#5107E9'
      },
      modalText: {
        marginTop: 34,
        width: 250,
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'Roboto-Bold'
      },
      modalImage: {
        position: "absolute",
        top: -5,
        left:200,
        height: 160,
        width: 220,
        zIndex: -1
      },
      textInputView: {
          marginTop: 22,
          backgroundColor: '#F4EDFD',
          width: 335,
          height: 40,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center'
      },
      textInputArea: {
          marginLeft: 5,
          width: 250,
          height: 40,
          fontFamily: 'Roboto-Medium',
          fontSize: 16,
          color: '#2B1E5F'
      },
      textInputIcon: {
          marginLeft: 10
      },
      listContainer: {
          alignItems: 'center'
      },
      itemView: {
          marginTop: 8,
          marginBottom: 8,
          width: 335,
          height: 55,
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
      },
      cityNameText: {
          marginLeft: 8,
          fontSize: 14,
          fontFamily: 'Roboto-Medium',
          color: '#2B1E5F'
      },
      cityNameView: {
          flexDirection: 'row'
      },
      stateNameText: {
        marginLeft: 3,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#2B1E5F'
      },
      closeBtn: {
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FF004A'
      },
      btnView: {
          marginLeft:20,
          marginTop: 40,
          marginBottom: 80,
          width: 335,
          justifyContent: 'center',
          alignItems: 'center',
        }
});

const mapDispatchToProps = (dispatch) => {
    return {
        setOrigin: (OriginPoint) => {
            dispatch(SetOrigin(OriginPoint))
        },
        setDestination: (DestinationPoint) => {
            dispatch(SetDestination(DestinationPoint))
        }
    }
}
 

export default connect(null, mapDispatchToProps)(originModalScreen);
