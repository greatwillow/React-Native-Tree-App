'use strict';

import React, {
    Component
} from 'react'

import {
  Dimensions,
  Text,
  View,
  StyleSheet
} from 'react-native'

import CalendarPicker from 'react-native-calendar-picker'

const windowSize = Dimensions.get('window');


export default class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state ={
      date: new Date()
    }
  }

  onDateChange(date) {
    this.setState({ date: date });
  }
  render() {
    return (
      <View style={styles.container}>

        <CalendarPicker
          selectedDate={this.state.date}
          onDateChange={this.onDateChange.bind(this)}
          screenWidth={'Dimensions.width'}
          selectedBackgroundColor={'#5ce600'} />

        <Text style={styles.selectedDate}>Date:  { this.state.date.toString() } </Text>
        <Text style={styles.selectedDate}>Month:  { this.state.date.getMonth() } </Text>
        <Text style={styles.selectedDate}>Day:  { this.state.date.getDate() } </Text>
        <Text style={styles.selectedDate}>Year:  { this.state.date.getFullYear() } </Text>
      </View>

    );
  }
}

var styles = StyleSheet.create( {
  container: {
    flex: 1
  },
  selectedDate: {
    color: 'red'
  }
})
