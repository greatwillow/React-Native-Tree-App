'use strict';

import React, { Component } from 'react';

import { View, Text, Image, Dimensions, StyleSheet, PixelRatio } from 'react-native';

import IceColors from '../../common/ice-colors';
import MainFooter from '../../common/main-footer';
import MainHorizonatalOptions from '../../common/main-horizontal-options';
import MainHeader from '../../common/main-header';
import MainImageHeadFrame from '../../common/main-image-head-frame';
import CrewWindowSelector from './crew-window-selector';

var deviceHeight = Dimensions.get('window').height;
var selectionMade;

export default class PageCrewBuilder extends Component {
  constructor(props) {
    super(props);
    this.optionSelected = this.optionSelected.bind(this);
    this.state = {
      selectionMade: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MainHeader />
        <MainImageHeadFrame />
        <MainHorizonatalOptions
          optionSelected={this.optionSelected}
          selectionMade={this.selectionMade}
        />
        <CrewWindowSelector selectionMade={this.state.selectionMade} />
        <MainFooter />
      </View>
    );
  }

  optionSelected(selection) {
    this.setState({ selectionMade: selection });
  }

  border(color) {
    return {
      borderColor: color,
      width: 3
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  topBar: {
    height: deviceHeight * 0.1,
    opacity: 0.2
  }
});
