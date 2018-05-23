import React, { Component } from 'react';

import { Text, TextInput, View } from 'react-native';

import CrudSubList from '../../common/crud-sublist';

export default class InsetAddRequestKey extends Component {
  constructor(props) {
    super(props);
    this.inputObjectGetter = this.inputObjectGetter.bind(this);
    this.state = {
      id: this.props.id,
      name: this.props.setIntoUpdateMode ? this.props.name : '',
      allocation_total: this.props.setIntoUpdateMode
        ? this.props.requestKeysSelectedInstance.allocation_total
        : '',
      additional_info: this.props.setIntoUpdateMode
        ? this.props.requestKeysSelectedInstance.additional_info
        : ''
    };
  }

  inputObjectGetter() {
    const inputObject = {
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
          placeholder={'  Request-Key Name'}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          autoFocus={true}
          maxLength={12}
          defaultValue={this.state.name}
          onChangeText={text => {
            this.setState({
              name: text
            });
          }}
        />
        <TextInput
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }}
          style={commonStyles.modalTextInputSingleLine}
          placeholder={'  Request-Key Total Allocation'}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          autoFocus={false}
          maxLength={12}
          defaultValue={this.state.allocation_total}
          onChangeText={text => {
            this.setState({
              allocation_total: text
            });
          }}
        />
        <TextInput
          smartScrollOptions={{
            moveToNext: false,
            type: 'text'
          }}
          style={commonStyles.modalTextInputMultiLine}
          placeholder={'  Request-Key Additional Info'}
          autoCorrect={false}
          returnKeyType="done"
          clearButtonMode="while-editing"
          maxLength={1000}
          multiline={true}
          defaultValue={this.state.additional_info}
          onChangeText={text => {
            this.setState({
              additional_info: text
            });
          }}
        />
      </View>
    );
  }
}
