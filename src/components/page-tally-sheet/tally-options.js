'use strict';

import React, { Component } from 'react';

import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

import IceColors from '../../common/ice-colors';

const deviceHeight = Dimensions.get('window').height;

export default class TallyOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.optionSelector}>
          <View style={styles.option}>
            <TouchableHighlight onPress={this.props.optionSelected.bind(this, 'option1')}>
              <Text>Seasons Context</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.option}>
            <TouchableHighlight onPress={this.props.optionSelected.bind(this, 'option2')}>
              <Text>Todays Context</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.option}>
            <TouchableHighlight onPress={this.props.optionSelected.bind(this, 'option3')}>
              <Text>Todays Tally</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: deviceHeight * 0.05,
    backgroundColor: IceColors.iceGreen
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
