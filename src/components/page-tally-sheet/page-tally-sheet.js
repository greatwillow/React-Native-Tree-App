'use strict';

import React, { Component } from 'react';

import {
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

import IceColors from '../../common/ice-colors';
import MainHeader from '../../common/main-header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addPlanter,
  removePlanterFromList,
  updatePlanter,
  addContract,
  removeContract,
  updateContract,
  addBlockKeyToList,
  addBlock,
  removeBlock,
  updateBlock,
  addRequestKeyToBlock,
  removeRequestKeyFromBlock,
  addRequestKey,
  removeRequestKey,
  updateRequestKey
} from '../../actions/actions';

import TallyOptions from './tally-options';
import TallySelector from './tally-selector';

const deviceHeight = Dimensions.get('window').height;

var selectionMade;
var selectTest;

class pageTallySheet extends Component {
  constructor(props) {
    super(props);
    this.optionSelected = this.optionSelected.bind(this);
    this.state = {
      selectionMade: 'option1'
    };
  }

  optionSelected(selection) {
    this.setState({ selectionMade: selection });
  }

  render() {
    //const actions = this.props.actions;
    return (
      <View style={styles.container}>
        <MainHeader />
        {/*  <TallyOptions
              optionSelected={this.optionSelected}
              selectionMade={this.selectionMade}
              /> */}
        <ScrollView>
          <View>
            <TallySelector {...this.props} selectionMade={this.state.selectionMade} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: IceColors.iceMediumGray
  },
  topBar: {
    height: deviceHeight * 0.1,
    flex: 1
  }
});

//Using react-redux connect --> to connect reducers and action creators to react
//Step 1
const mapStateToProps = state => ({
  plantersAll: state.plantersAll,
  blocksAll: state.BlocksAll,
  contractsAll: state.contractsAll,
  requestKeysAll: state.requestKeysAll,
  contracts: state.contracts,
  blocks4: state.blocks4,
  relation_blocks_rkeys: state.relation_blocks_rkeys,
  request_keys: state.request_keys
});
//Step 2
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPlanter,
      removePlanterFromList,
      updatePlanter,
      addContract,
      removeContract,
      updateContract,
      addBlockKeyToList,
      addBlock,
      removeBlock,
      updateBlock,
      addRequestKeyToBlock,
      removeRequestKeyFromBlock,
      addRequestKey,
      removeRequestKey,
      updateRequestKey
    },
    dispatch
  );
// Step 3
export default connect(mapStateToProps, mapDispatchToProps)(pageTallySheet);
