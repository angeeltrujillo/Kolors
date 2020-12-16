import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { connect } from 'react-redux';

function CitySelector(props) {
  return (
    <View>
        <Pressable style={styles.container} onPress = {props.onPress}>
            <FontAwesome5 style={styles.icon} name={props.iconName} size={24} color="#8171B9" />
            <Text style={styles.fromText}>{props.selectorType == 'Destino' ? props.destinationPoint.name ? props.destinationPoint.name : 'Destino' : props.originPoint.name ? props.originPoint.name : props.selectorType}</Text>
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
    icon: {
        marginLeft: 10
    },
    fromText: {
        color: '#2B1E5F',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        marginLeft: 12
    }
})

const mapStatetoProps = (state) => {
    return {
        originPoint: state.tripReducer.originPoint,
        destinationPoint: state.tripReducer.destinationPoint
    }
}

export default connect(mapStatetoProps)(CitySelector)