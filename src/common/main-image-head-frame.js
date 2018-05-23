import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import IceColors from './ice-colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class MainImageHead extends Component {
  static contextTypes = {
    drawer: PropTypes.object.isRequired
  };

  render() {
    return (
      <TouchableOpacity onPress={this.context.drawer.open}>
        <Image
          style={styles.imageContainer}
          source={require('../images/forest-top-fog2.jpg')}
        />
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    height: deviceHeight / 8,
    width: deviceWidth
  },
  dateText: {
    fontSize: 20,
    color: 'red'
  }
});
