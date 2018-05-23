'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Picker,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

import IceColors from '../../common/ice-colors';
import TallyIndividual from './tally-individual';

var deviceHeight = Dimensions.get('window').height;

export default class TallyPlanters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planterPicked: null
    };
  }
  renderPlanterTally(planter) {
    return (
      <View>
        <View style={styles.individualContainer}>
          <Text style={styles.planterNameTitle}>Tally for {planter}</Text>
        </View>
        <TallyIndividual {...this.props} />
      </View>
    );
  }

  renderPlanterList() {
    return this.props.planters.planter_list.map(planter => {
      return (
        <View key={planter.planterFullName}>
          <View style={styles.individualContainer}>
            <Text style={styles.planterNameTitle}>
              Tally for {planter.planterFullName}
            </Text>
          </View>
          <TallyIndividual {...this.props} />
        </View>
      );
    });
  }

  renderPickerList() {
    return this.props.planters.planter_list.map(planter => {
      return (
        <Picker.Item
          key={planter.planterFullName}
          label={planter.planterFullName}
          value={planter.planterFullName}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <View style={{ height: 200 }}>
          <Picker
            selectedValue={this.state.planterPicked}
            onValueChange={picked => this.setState({ planterPicked: picked })}
          >
            {this.renderPickerList()}
          </Picker>
        </View>
        <View>{this.renderPlanterTally(this.state.planterPicked)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  individualContainer: {
    justifyContent: 'center',
    height: deviceHeight * 0.1,
    backgroundColor: IceColors.iceLightGray
  },
  planterNameTitle: {
    padding: 12,
    marginLeft: 30,
    fontSize: 20,
    color: IceColors.iceDarkGray
  }
});
