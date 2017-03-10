'use strict';

import React, {
    Component
} from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet
  } from 'react-native'

import IceColors from '../../common/ice-colors'

export default class CrewWindowSelector extends Component {
      constructor(props){
        super(props);
      }

      render() {
        <View>
          <Text>{this.props.selectionMade}</Text>
        </View>
        {if(this.props.selectionMade){
           return (
             <View style={styles.container}>
               <Text>Tab Page 1</Text>
             </View>
           );
        }
          return (
             <View style={styles.container}>
               <Text>Tab Page 2</Text>
             </View>
       );
     }
    }
}


const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       flex: 1,
       alignItems: 'stretch',
       justifyContent: 'center'
   },
   topBar: {
     height: 20,
     opacity: 0.2
   }
});
