'use strict'

import React, {
    Component
} from 'react'

import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import IceColors from './ice-colors'

export default class MainFooter extends Component {

  render(){
    return (
      <View style = {styles.footer} >
          <Text> Footer </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({

    footer: {
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: IceColors.iceDarkGray
    }
});
