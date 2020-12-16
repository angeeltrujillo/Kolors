import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


export default function CityItem(props) {
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
    let stateName = STATES[props.stateCode]
    let iconName = ICONS[props.type]
  return (
    <Pressable onPress={props.onPress}>
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
                      <Text style={styles.cityNameText}>{props.cityName},</Text>
                      <Text style={styles.stateNameText}>{stateName}</Text>
                  </View>
                  <View>
                      <Text style={styles.cityNameText}>{(props.type == 'city') ? 'Todas las paradas' : props.name}</Text>
                  </View>
              </View>
          </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
    textInputIcon: {
        marginLeft: 10
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

})