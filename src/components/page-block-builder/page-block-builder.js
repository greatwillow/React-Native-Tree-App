
'use strict';

import React, {
  Component
} from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native'



import Icon from 'react-native-vector-icons/FontAwesome';
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import IceColors from '../../common/ice-colors'

import MainHorizonatalOptions from '../../common/main-horizontal-options'
import MainHeader from '../../common/main-header'
import MainFooter from '../../common/main-footer'

export default class pageBlockBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      }
    }

    render() {
       return (
            <View style={styles.container}>
              <MainHeader />
                  <ScrollView ref='scroll'>
                    <Text>The Planter key is: </Text>
                  </ScrollView>
                <MainFooter />
            </View>
       );
   }

}





const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       flex: 1,
       alignItems: 'stretch',
       justifyContent: 'center'
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
    },
    thumb: {
      width: 64,
      height: 64,
    },
    text: {
      flex: 1,
    },
});
