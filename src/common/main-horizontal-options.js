'use strict';

import React, {
    Component,
} from 'react'


import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native'

import IceColors from './ice-colors'

export default class MainHorizonatalOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style = {styles.container}>
          <View style= {styles.optionSelector}>
              <View style={styles.option}>
                 <TouchableHighlight
                    onPress={this.props.optionSelected.bind(this, true)}
                    >
                    <Text>Make your Day</Text>
                  </TouchableHighlight>
              </View>
              <View style={styles.option}>
                 <TouchableHighlight
                  onPress={this.props.optionSelected.bind(this, false)}
                  >
                  <Text>Pre-Made Day</Text>
                </TouchableHighlight>
              </View>
          </View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: IceColors.iceGreen,
  },
  optionSelector: {
      flexDirection: 'row'
  },
  option: {
      flex: 1,
      justifyContent: 'space-between',
      paddingTop: 10,
      alignItems: 'center',
      borderColor: 'red'
  }
});
