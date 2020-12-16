import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { connect } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import {SetStartDate} from '../actions/TripActions'
import {SetEndDate} from '../actions/TripActions'

const previusComponent = (iconName) => (
    <FontAwesome5 name={iconName} size={24} color="#2B1E5F" />
)


function CalendarView (props) {
    const weekdays = ['D','L','M','M','J','V','S']
    const MESES = ['enero','febrero', 'marzo', 'abril', 'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

    const onDateChange = (date, type) => {
        var newDate = new Date(date)
        if (type == 'START_DATE') {
            props.setStartDate(newDate)
        }
        if (type == 'END_DATE') {
            props.setEndDate(newDate)
        }
    }

    if (props.roundTrip == true ) {
        return (
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    width={300}
                    height={300}
                    allowRangeSelection={true}
                    weekdays={weekdays}
                    months={MESES}
                    previousComponent={previusComponent('angle-left')}
                    nextComponent={previusComponent('angle-right')}
                    selectedRangeStartStyle={styles.selectedDayStyle}
                    selectedRangeEndStyle={styles.selectedDayStyle}
                    selectedRangeStyle={styles.selectedRangeStyle}
                    textStyle={styles.textStyle}
                    selectedDayTextColor={'#FFFFFF'}
                    todayBackgroundColor={'#C0A2FD'}
                    minDate={new Date()}
                    restrictMonthNavigation={true}
                />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    width={300}
                    height={300}
                    weekdays={weekdays}
                    months={MESES}
                    previousComponent={previusComponent('angle-left')}
                    nextComponent={previusComponent('angle-right')}
                    textStyle={styles.textStyle}
                    selectedDayTextColor={'#FFFFFF'}
                    todayBackgroundColor={'#C0A2FD'}
                    selectedDayStyle={styles.selectedStyle}
                    minDate={new Date()}
                    restrictMonthNavigation={true}
                />
            </View>
        )
    }

  
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: '#F4EDFD',
        borderRadius: 8,
    },
    textStyle: {
        color: '#2B1E5F',
        fontFamily: 'Roboto-Medium',
        fontSize: 18
    },
    selectedDayStyle: {
        color: '#BFBFBF',
        backgroundColor: '#4F06E4'
    },
    selectedRangeStyle: {
        backgroundColor: '#C0A2FD'
    },
    selectedStyle: {
        backgroundColor: '#4F06E4'
    }
});

const mapStateToProps = (state) => {
    return {
      startDate: state.tripReducer.startDate,
      endDate: state.tripReducer.endDate,
      roundTrip: state.tripReducer.roundTrip
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
      setStartDate: (date) => {
        dispatch(SetStartDate(date))
      },  
      setEndDate: (date) => {
        dispatch(SetEndDate(date))
      }  
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)