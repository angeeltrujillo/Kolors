import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function DatePicker(props) {
  const navigation = useNavigation();

  const MESES = ['enero','febrero', 'marzo', 'abril', 'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const tomorrow = new Date(props.startDate.getTime() + (60 * 60 * 24 * 1000) )
  if (props.round == true) {
    return (
      <Pressable style={styles.containerRound} onPress={ () => {
        navigation.navigate('DatePickerScreen')
      }}>
        <View style={styles.headerRound}>
          <View style={styles.subheaderRound}>
            <FontAwesome5 name="calendar-alt" size={24} color="#8171B9" />
            <Text style={styles.headerText}>Salida</Text>
          </View>
          <View style={styles.calendarData}>
            <Text style={styles.dayText}>{props.startDate.getDate()}</Text>
            <Text style={styles.headerText}>{MESES[props.startDate.getMonth()]}</Text>
            <Text style={styles.headerText}>{props.startDate.getFullYear()}</Text>
          </View>
        </View>
        <View style={styles.headerRound}> 
        <View style={styles.subheaderRound}>
            <FontAwesome5 name="calendar-alt" size={24} color="#8171B9" />
            <Text style={styles.headerText}>Regreso</Text>
          </View>
          <View style={styles.calendarData}>
            <Text style={styles.dayText}>{ props.endDate ? props.endDate.getDate() : tomorrow.getDate() }</Text>
            <Text style={styles.headerText}>{props.endDate ? MESES[props.endDate.getMonth()] : MESES[tomorrow.getMonth()] }</Text>
            <Text style={styles.headerText}>{props.endDate ? props.endDate.getFullYear() : tomorrow.getFullYear()}</Text>
          </View>
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.container} onPress={() => {
        navigation.navigate('DatePickerScreen')
      }}>
        <View style={styles.header}>
          <FontAwesome5 name="calendar-alt" size={24} color="#8171B9" />
          <Text style={styles.headerText}>Salida</Text>
        </View>
        <View style={styles.date}>
            <Text style={styles.dayText}>{props.startDate.getDate()}</Text>
            <Text style={styles.headerText}>{MESES[props.startDate.getMonth()]}</Text>
            <Text style={styles.headerText}>{props.startDate.getFullYear()}</Text>
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginRight: 10,
        width: 295,
        height: 120,
        backgroundColor: '#F6F0FE',
        borderRadius: 5
    },
    header: {
      marginTop: 5,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'flex-end'
    },
    headerText: {
      paddingLeft: 5,
      fontFamily: 'Roboto-Medium',
      fontSize: 15,
      color: '#2B1E5F'
    },
    date: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    dayText: {
      fontFamily: 'Roboto-Medium',
      fontSize: 34,
      color: '#2B1E5F'
    },
    containerRound: {
      marginLeft: 2,
      marginRight: 10,
      width: 295,
      height: 120,
      backgroundColor: '#F6F0FE',
      borderRadius: 5,
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems:'center'
    },
    subheaderRound: {
      paddingTop: 8,
      flexDirection: 'row',
      alignItems:'center'
    },
    calendarData: {
      justifyContent: 'center',
      alignItems: 'center'
    }

});

const mapStateToProps = (state) => {
  return {
    startDate: state.tripReducer.startDate,
    endDate: state.tripReducer.endDate
  }
};

export default connect(mapStateToProps)(DatePicker);
