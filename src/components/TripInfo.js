import React from 'react'
import { StyleSheet, Text, View, Pressable, Image} from 'react-native'
import KolorsLogo from '../../assets/kolors.png'


export default function TripInfo(props) {
  const formatTimetoAMPM = (time) => {
      let hour = parseInt(time.slice(0,2))
      let minute = time.slice(3)

      if (hour > 12) {
          return `${hour-12}:${minute} PM`
      } else {
          if (hour == 12 && parseInt(minute) > 0) {
            return `${hour}:${minute} PM` 
          }
          return `${hour}:${minute} AM` 
      }
  }
  const formatMinutestoHours = (time) => {
   return `${parseInt(time/60)}h${time%60}m`
  }
  const formatPrice = (subtotal, vat) => {
    let total = (subtotal + vat )/100
    return `$${total} MXN`
  }


  return (
    <View style={[styles.cardView, {
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 5
    }]}>
        <View style={styles.logoandPrice}>
            <Image style={styles.companyLineLogo} source={KolorsLogo}></Image>
            <Text style={styles.priceText}>{formatPrice(props.fares[0].subtotal, props.fares[0].vat)}</Text>
        </View>
        <View style={styles.itineraryandLocation}>
            <View style={styles.timestext}>
                <Text style={styles.timeText}>{formatTimetoAMPM(props.itinerary[0].departureTime)}</Text>
                <Text style={styles.timeSubText}>{formatMinutestoHours(props.duration)}</Text>
            </View>
            <View style={styles.timestext}>
                <Text style={styles.timeText}>{formatTimetoAMPM(props.itinerary[1].arrivalTime)}</Text>
                <Text style={styles.timeSubText}>Directo</Text>
            </View>
            <View>
                <Pressable style={styles.selectButton} onPress={props.onPress}><Text style={styles.selectButtonText}>Seleccionar</Text></Pressable>
            </View>
        </View> 
        
    </View>
  )
}

const styles = StyleSheet.create({
    cardView: {
        width: 335,
        height: 110,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom:10,
        borderRadius: 8
    },
    companyLineLogo: {
        width: 93,
        height: 26,
        resizeMode: 'stretch'
        
    },
    logoandPrice: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itineraryandLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    priceText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        color: '#2B1E5F',
        marginTop: 10
    },
    selectButton: {
        width: 100,
        height: 35,
        backgroundColor: '#FF004A',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
    },
    timeText: {
        fontSize: 18,
        color: '#2B1E5F',
        fontFamily: 'Roboto-Medium'
    },
    timeSubText: {
        color: '#AFAFAF',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
    },
    timestext: {
        marginTop: 5
    }
})