'use strict';

import React, {
    Component
} from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Picker,
  ListView
} from 'react-native'

import Form from 'react-native-form'

import IceColors from '../../common/ice-colors'
import DropDownPlanterSelect from './dropdown-planter-select'
import Calendar from './calendar'

//const planters = []


export default class ConditionsTally extends Component {
  constructor(props) {
    super(props);
    this._onPressaddPlanter = this._onPressaddPlanter.bind(this);
    this._onPressRemovePlanterFromList = this._onPressRemovePlanterFromList.bind(this);
    this._onPressaddBlock = this._onPressaddBlock.bind(this);
    this.state ={
      planter_id: '',
      planter_first_name: '',
      planter_last_name: '',
      planter_full_name: ' ',
      crew_name: '',
      block_name: ''
    }
  }


  _renderList() {
    return this.props.planters.planter_list.map((planter) => {
      return (
        <View key={planter.key}>
          <Text>{planter.planter_first_name+' '+planter.planter_last_name+' '+planter.planter_id}</Text>
        </View>
      );
    });
  }


  _onPressaddPlanter() {
    this.setState({planterFullName: this.state.planter_first_name+' '+this.state.planter_last_name})
    const inputObject= {
      planter_id: uniqueId = (new Date).getTime(),
      planter_first_name: this.state.planter_first_name,
      planter_last_name: this.state.planter_last_name,
      planter_full_name: this.state.planter_full_name
    }
    this.props.addPlanter(inputObject);

    console.log(this.props.planters);
  }

  _onPressRemovePlanterFromList() {
    this.setState({planterFullName: this.state.planter_first_name+' '+this.state.planter_last_name})
    const inputObject= {
      planter_id: this.state.planter_id,
      planter_first_name: this.state.planter_first_name,
      planter_last_name: this.state.planter_last_name,
      planter_full_name: this.state.planter_full_name
    }

    this.props.removePlanterFromList(inputObject);
  }

  _onPressaddBlock() {
    this.setState({planterFullName: this.state.planter_first_name+' '+this.state.planter_last_name})
    const inputObject= {
      block_name: this.state.block_name
    }
    this.props.addBlock(inputObject);

    console.log(this.props.blocks);
  }

  render(){
    return (
      <View>
        <Calendar />
        <View style={styles.formContainer}>
                <View>{this._renderList()}</View>
                <DropDownPlanterSelect {...this.props}/>
        </View>
        <TextInput
            style={{borderWidth: 2, borderColor: 'black', height: 40, width: 400}}
            placeholder={'First Name of Planter'}
            onChangeText={
              (text) => {
                this.setState({
              planter_first_name: text
            });
          }
        }
        />
        <Text>{this.props.planter_first_name}</Text>
        <TextInput
            style={{borderWidth: 2, borderColor: 'black', height: 40, width: 400}}
            placeholder={'Last Name of Planter'}
            autoCapitalize='words'
            onChangeText={
              (text) => {
                this.setState({
              planter_last_name: text
            });
          }
        }

        />
        <View>
          <TouchableOpacity
            style={{height: 50, width: 200, borderWidth: 1, borderRadius: 4, backgroundColor: 'green'}}
            onPress={() => this._onPressaddPlanter()}
            ><Text>Add Planter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 50, width: 200, borderWidth: 1, borderRadius: 4, backgroundColor: 'green'}}
            onPress={() => this._onPressaddBlock()}
            ><Text>Add Block</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 50, width: 200, borderWidth: 1, borderRadius: 4, backgroundColor: 'green'}}
            onPress={() => this._onPressRemovePlanterFromList()}
            ><Text>Remove Planter</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

var styles = StyleSheet.create( {
  formContainer: {
    flex: 1,
    backgroundColor: IceColors.iceMediumGray
  },
  submitContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch'
  }
});
