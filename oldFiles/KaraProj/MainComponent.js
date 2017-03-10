
import React, {
  Component,
} from 'react'

import {
  View,
  Text,
} from 'react-native'

import data from data.txt

export default class MainComponent extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style = {{backgroundColor: 'green', flex: 1}}>
        <Text>Data is: {data}</Text>
      </View>
    );
  }



}
