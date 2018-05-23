import React, { Component } from 'react';

import { TextInput, View } from 'react-native';

import _ from 'lodash';

export default class InputTextSingleLine extends Component {
  constructor(props) {
    super(props);
    this._getText = this._getText.bind(this);
    this.state = {
      text: this.props.defaultValue
    };
  }

  _getText() {
    let input = this.state.text;
    return input;
  }

  render() {
    return (
      <View>
        <TextInput
          smartScrollOptions={{
            moveToNext: true,
            type: 'text'
          }}
          style={this.props.style}
          placeholder={this.props.placeholder}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          autoFocus={this.props.autoFocus || false}
          maxLength={15}
          defaultValue={this.props.defaultValue}
          onChangeText={input => {
            this.setState({
              text: input
            });
          }}
        />
      </View>
    );
  }
}
