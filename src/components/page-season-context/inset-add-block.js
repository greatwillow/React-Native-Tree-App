import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import CrudSubList from '../../common/crud-sublist';
import InputTextSingleLine from '../../common/input-text-single-line';
import InputTextMultiLine from '../../common/input-text-multi-line';

export default class InsetAddBlock extends Component {
  constructor(props) {
    super(props);
    this.inputObjectGetter = this.inputObjectGetter.bind(this);
    this.state = {
      id: this.props.id,
      name: this.props.setIntoUpdateMode ? this.props.blocksSelectedInstance.name : '',
      allocation_total: this.props.setIntoUpdateMode
        ? this.props.blocksSelectedInstance.allocation_total
        : '',
      additional_info: this.props.setIntoUpdateMode
        ? this.props.blocksSelectedInstance.additional_info
        : ''
    };
  }

  inputObjectGetter() {
    let inputObject = {
      id: this.props.id,
      name: this.state.name,
      allocation_total: this.state.allocation_total,
      additional_info: this.state.additional_info
    };
    return inputObject;
  }

  render() {
    return (
      <View>
        <TextInput
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }}
          style={commonStyles.modalTextInputSingleLine}
          placeholder={`  ${this.props.textName} Name`}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          autoFocus={true}
          maxLength={15}
          defaultValue={this.state.name}
          onChangeText={input => {
            this.setState({
              name: input
            });
          }}
        />
        <TextInput
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }}
          style={commonStyles.modalTextInputSingleLine}
          placeholder={`  ${this.props.textName} Total Allocation`}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          autoFocus={false}
          maxLength={15}
          defaultValue={this.state.allocation_total}
          onChangeText={input => {
            this.setState({
              allocation_total: input
            });
          }}
        />
        <CrudSubList
          {...this.props}
          addElementToRelationshipFunction={this.props.addRequestKeyToBlock}
          removeElementFromRelationshipFunction={this.props.removeRequestKeyFromBlock}
          listed_element_name="Request Key"
          related_element_id={this.state.id}
          related_element_name={this.props.textName}
          subListAll={this.props.requestKeysAll}
          subListChosen={this.props.requestKeysOfBlockSelector}
        />
        <TextInput
          smartScrollOptions={{
            moveToNext: false,
            type: 'text'
          }}
          style={commonStyles.modalTextInputMultiLine}
          placeholder={`  ${this.props.textName} Additional Info`}
          autoCorrect={false}
          returnKeyType="done"
          clearButtonMode="while-editing"
          autoFocus={false}
          maxLength={1000}
          multiline={true}
          defaultValue={this.state.additional_info}
          onChangeText={input => {
            this.setState({
              additional_info: input
            });
          }}
        />
      </View>
    );
  }
}
