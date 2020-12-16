import React from 'react'
import {View, ActivityIndicator} from 'react-native'

function LoadingIndicator(props) {
  return (
    <View style={{paddingTop: 10}}>
        <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  )
}


export default LoadingIndicator