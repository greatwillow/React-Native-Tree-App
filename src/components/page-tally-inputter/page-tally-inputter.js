import React, { Component } from 'react';

import { Dimensions, Image, ScrollView, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';

import {
  requestKeysOfBlockSelector,
  contractsOfDateSelector,
  blocksOfDateSelector,
  plantersOfDateSelector
} from '../../selectors/selectors';

import {
  assignHeaderTitle,
  //Set Selected
  setSelectedBlockId
} from '../../actions/actions';

import commonStyles from '../../common/styles';

import * as Animatable from 'react-native-animatable';

import MainHeader from '../../common/main-header';
import CrudSubList from '../../common/crud-sublist';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class DayContext extends Component {
  constructor(props) {
    super(props);
    this._renderBlockList = this._renderBlockList.bind(this);
    this._renderRequestKeysOfBlockList = this._renderRequestKeysOfBlockList.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.props.assignHeaderTitle('Tally Inputter');
  }

  _renderRequestKeysOfBlockList(blockId) {
    this.props.setSelectedBlockId({ id: blockId });
    return this.props.requestKeysOfBlockSelector.map(rKey => {
      return (
        <View>
          <Text>Req Key: {rKey.name}</Text>
        </View>
      );
    });
  }

  _renderBlockList() {
    if (this.props.blocksOfDateSelector != undefined) {
      return this.props.blocksOfDateSelector.map(block => {
        return (
          <View>
            <Text>block name {block.name}</Text>
            {this._renderRequestKeysOfBlockList(block.id)}
          </View>
        );
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animatable.View animation="fadeIn">
          <MainHeader />
          <Image
            source={require('../../images/forest-top-fog.jpg')}
            style={{ flex: 1, width: null, height: deviceHeight, resizeMode: 'cover' }}
          >
            <ScrollView>
              <View>{this._renderBlockList()}</View>
              <Text>Inputter {state => this.state.orm.blocks}</Text>
            </ScrollView>
          </Image>
        </Animatable.View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  requestKeysOfBlockSelector: requestKeysOfBlockSelector(state),
  contractsOfDateSelector: contractsOfDateSelector(state),
  blocksOfDateSelector: blocksOfDateSelector(state),
  plantersOfDateSelector: plantersOfDateSelector(state),

  contracts: state.contracts,
  relation_blocks_rkeys: state.relation_blocks_rkeys,
  request_keys: state.request_keys,
  selected_tally_date: state.selected_tally_date
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      assignHeaderTitle,
      setSelectedBlockId
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DayContext);
