import React, { Component } from 'react';

import { Dimensions, Image, ScrollView, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';

import {
  plantersAll,
  blocksAll,
  contractsAll,
  requestKeysAll,
  blocksAvailableForDateSelector,
  requestKeysOfBlockSelector,
  contractsOfDateSelector,
  blocksOfDateSelector,
  requestKeysOfDateSelector,
  plantersOfDateSelector
} from '../../selectors/selectors';

import {
  assignHeaderTitle,
  //Date
  addTallyDate,
  //Set Selected
  setSelectedTallyDate,
  //Date RELATIONS
  addContractToTallyDate,
  removeContractFromTallyDate,
  addBlockToTallyDate,
  removeBlockFromTallyDate,
  addRequestKeyToTallyDate,
  removeRequestKeyFromTallyDate,
  addPlanterToTallyDate,
  removePlanterFromTallyDate
} from '../../actions/actions';

import commonStyles from '../../common/styles';

import * as Animatable from 'react-native-animatable';

import MainHeader from '../../common/main-header';
import CrudDaySubList from '../../common/crud-day-sublist';

import CrudMenuDate from './crud-menu-date';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class DayContext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.assignHeaderTitle('Day Context');
    const todaysDate = moment().format('L');
    this.props.addTallyDate({ id: todaysDate });
    this.props.setSelectedTallyDate({ id: todaysDate });
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
              <CrudMenuDate {...this.props} />
              <CrudDaySubList
                {...this.props}
                addElementToRelationshipFunction={this.props.addContractToTallyDate}
                removeElementFromRelationshipFunction={
                  this.props.removeContractFromTallyDate
                }
                listed_element_name="Contract"
                related_element_id={this.props.selected_tally_date}
                related_element_name={'Tally Date'}
                subListAll={this.props.contractsAll}
                subListChosen={this.props.contractsOfDateSelector}
              />
              <CrudDaySubList
                {...this.props}
                addElementToRelationshipFunction={this.props.addBlockToTallyDate}
                removeElementFromRelationshipFunction={
                  this.props.removeBlockFromTallyDate
                }
                listed_element_name="Block"
                related_element_id={this.props.selected_tally_date}
                related_element_name={'Tally Date'}
                subListAll={this.props.blocksAvailableForDateSelector}
                subListChosen={this.props.blocksOfDateSelector}
              />
              <CrudDaySubList
                {...this.props}
                addElementToRelationshipFunction={this.props.addRequestKeyToTallyDate}
                removeElementFromRelationshipFunction={
                  this.props.removeRequestKeyFromTallyDate
                }
                listed_element_name="Request Key"
                related_element_id={this.props.selected_tally_date}
                related_element_name={'Tally Date'}
                subListAll={this.props.requestKeysAll}
                subListChosen={this.props.requestKeysOfDateSelector}
              />
              <CrudDaySubList
                {...this.props}
                addElementToRelationshipFunction={this.props.addPlanterToTallyDate}
                removeElementFromRelationshipFunction={
                  this.props.removePlanterFromTallyDate
                }
                listed_element_name="Planter"
                related_element_id={this.props.selected_tally_date}
                related_element_name={'Tally Date'}
                subListAll={this.props.plantersAll}
                subListChosen={this.props.plantersOfDateSelector}
              />
            </ScrollView>
          </Image>
        </Animatable.View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  plantersAll: plantersAll(state),
  contractsAll: contractsAll(state),
  blocksAll: blocksAll(state),
  requestKeysAll: requestKeysAll(state),
  blocksAvailableForDateSelector: blocksAvailableForDateSelector(state),
  contractsOfDateSelector: contractsOfDateSelector(state),
  blocksOfDateSelector: blocksOfDateSelector(state),
  requestKeysOfDateSelector: requestKeysOfDateSelector(state),
  plantersOfDateSelector: plantersOfDateSelector(state),

  //contracts: state.contracts,
  relation_blocks_rkeys: state.relation_blocks_rkeys,
  request_keys: state.request_keys,
  selected_tally_date: state.selected_tally_date
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      assignHeaderTitle,
      setSelectedTallyDate,
      addTallyDate,
      //Date Relations
      addContractToTallyDate,
      removeContractFromTallyDate,
      addBlockToTallyDate,
      removeBlockFromTallyDate,
      addRequestKeyToTallyDate,
      removeRequestKeyFromTallyDate,
      addPlanterToTallyDate,
      removePlanterFromTallyDate
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DayContext);
