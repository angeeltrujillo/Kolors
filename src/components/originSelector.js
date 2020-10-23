import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image, TextInput, FlatList} from 'react-native'
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'
// Modal shit, TextInput and FlatList
import LogoSvg from './logoSvg'
import headerImage from '../../assets/header.png'

    const Item = ({ cityName, stateCode, name, type, onPress}) => {
      let ICONS  = {
          'city':'city',
          'attraction':'map-marker-alt',
          'mall':'store'
    }
      let STATES = {
          'VE':'Veracruz',
          'PU':'Puebla',
          'CX':'Ciudad de México'
      }
      let stateName = STATES[stateCode]
      let iconName = ICONS[type]
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.itemView, {
                shadowOffset: {
                width: 0,
                height: 3
                },
                shadowOpacity: 0.2,
                shadowRadius: 5
            }]}>
                <View>
                    <FontAwesome5 style={styles.textInputIcon} name={iconName} size={24} color="#8171B9" />
                </View>
                <View>
                    <View style = {styles.cityNameView}>
                        <Text style={styles.cityNameText}>{cityName},</Text>
                        <Text style={styles.stateNameText}>{stateName}</Text>
                    </View>
                    <View>
                        <Text style={styles.cityNameText}>{(type == 'city') ? 'Todas las paradas' : name}</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    )
  };

export default function originSelector() {
    const [modalVisible, setModalVisible] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [originData, setOriginData] = useState([])
    const [textInputValue, onTextChange] = useState('')
    const [selectedId, setSelectedId] = useState(null);

    const originSuggestions = () => {
        return fetch('https://run.mocky.io/v3/084fb9f7-706c-4f1c-aa94-fd352c59ad8a')
        .then((response) => response.json())
        .then((json) => {
            setOriginData(json.data.originSuggestions)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
    
    useEffect(() => {
        originSuggestions()
    }, []);

    const renderItem = ({ item }) => (
        <Item style={{flex:1}} cityName={item.cityName} stateCode={item.stateCode}
        type={item.type} name={item.name} onPress={() => {
            setSelectedId(item.name)
            setModalVisible(false)
        }
        }/>
      );
    const loadingItem = () => (
        <Text>Cargando...</Text>
        );
    
  return (
    <View>
        <Modal visible={modalVisible} animationType="slide">
            <View style={{flex:1}}>
                <View style={styles.modalHeader}>
                    <LogoSvg />
                    <Text style={styles.modalText}>Origen</Text>
                    <Image source={headerImage} style={styles.modalImage}></Image>
                    <View style={styles.textInputView}>
                        <FontAwesome5 style={styles.textInputIcon} name="bus-alt" size={24} color="#8171B9" />
                        <TextInput style={styles.textInputArea} onChangeText={text => onTextChange(text)} placeholder="Buscar">
                        </TextInput>
                    </View>
                </View>
                <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={originData}
                        renderItem={renderItem}
                        ListEmptyComponent={loadingItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}

                />
                <View style={styles.btnView}>
                    <View style={styles.closeBtn}>
                        <FontAwesome5 name="times" size={24} color="white" onPress={ () => {
                            setModalVisible(false)
                        }}/>
                    </View>
                </View>
                
            </View>    
        </Modal>

        <Pressable style={styles.container} onPress = { () => {
            setModalVisible(true)
        }}>
            <FontAwesome5 style={styles.icon} name="bus-alt" size={24} color="#8171B9" />
            <Text style={styles.fromText}>{selectedId ? selectedId : 'Origen'}</Text>
        </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width: 295,
        height: 50,
        backgroundColor: '#F4EDFD',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    fromText: {
        color: '#2B1E5F',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        marginLeft: 12
    },
    icon: {
        marginLeft: 10
    },
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
})