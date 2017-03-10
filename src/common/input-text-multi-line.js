import React, {
  Component,
} from 'react'

import {
  TextInput,
  View,
} from 'react-native'

export default class InputTextMultiLine extends Component {
  constructor(props) {
    super(props)
    this._getText = this._getText.bind(this);
    this.state = {
      text: this.props.defaultValue
    }
  }

  _getText() {
    let input = this.state.text
    return input;
  }

  render() {
    return  <View>
              <TextInput
                  smartScrollOptions = {{
                    moveToNext: false,
                    type:       'text'
                    }}
                  style={this.props.style}
                  placeholder={this.props.placeholder}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  autoFocus={this.props.autoFocus || false}
                  maxLength={1000}
                  multiline={true}
                  defaultValue={this.props.defaultValue}
                  onChangeText = {(input) => {
                    this.setState({
                      text: input
                    })
                  }}
              />
          </View>
  }


}
