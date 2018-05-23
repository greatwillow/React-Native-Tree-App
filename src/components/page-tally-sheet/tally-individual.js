'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import IceColors from '../../common/ice-colors';

const deviceWidth = Dimensions.get('window').width;

export default class TallyIndividual extends Component {
  constructor(props) {
    super(props);
  }
  /*
      renderBlockList() {
        return this.props.block_data.map((block) => {
            var species = block.species.map((s) => {
                return (
                  <View key={s.name} style={{flexDirection: 'row'}}>
                    <View style={styles.speciesContainer}>
                      <Text style={{padding: 5, marginLeft: 40}}>{s.name}</Text>
                    </View>
                    <TextInput
                      style={styles.tallyInput}
                      />
                  </View>
              );
            });
            return <View key={block.name}>
                      <View style={{backgroundColor: IceColors.iceMediumGray}}>
                        <Text style={{fontWeight: '400', padding: 10, fontSize: 18}}>
                          {block.name}
                        </Text>
                      </View>
                      {species}
                   </View>

        });
      }
      */

  render() {
    return <View>{/*  {this.renderBlockList()} */}</View>;
  }
}

var styles = StyleSheet.create({
  speciesContainer: {
    width: deviceWidth * 0.4,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  tallyInput: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: 40,
    width: deviceWidth * 0.5,
    margin: 10,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  }
});
