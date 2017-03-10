import React, {
  Component
} from 'react'

import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import CrudSubList from '../../common/crud-sublist'
import InputTextSingleLine from '../../common/input-text-single-line'
import InputTextMultiLine from '../../common/input-text-multi-line'

export default class InsetAddPlanter extends Component {
    constructor(props) {
      super(props)
      this.inputObjectGetter = this.inputObjectGetter.bind(this);
      this.state = {
        id: this.props.id,
        first_name: this.props.setIntoUpdateMode ? this.props.plantersSelectedInstance.first_name : '',
        last_name: this.props.setIntoUpdateMode ? this.props.plantersSelectedInstance.last_name : '',
        name: this.props.setIntoUpdateMode ? this.props.plantersSelectedInstance.name : '',
        allocation_total: this.props.setIntoUpdateMode ? this.props.plantersSelectedInstance.allocation_total : '',
        additional_info: this.props.setIntoUpdateMode ? this.props.plantersSelectedInstance.additional_info : '',
      }
    }

    inputObjectGetter() {
      let inputObject = {
              id: this.props.id,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              name: this.state.first_name + ' ' + this.state.last_name,
              allocation_total: this.state.allocation_total,
              additional_info: this.state.additional_info,
            }
      return inputObject;
    }

    render() {
      return(
        <View>
          <TextInput
              smartScrollOptions = {{
                moveToNext: true,
                type:       'text'
                }}
              style={commonStyles.modalTextInputSingleLine}
              placeholder={`   Planter First Name`}
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType='next'
              clearButtonMode='while-editing'
              autoFocus={true}
              maxLength={15}
              defaultValue={this.state.first_name}
              onChangeText = {(input) => {
                this.setState({
                  first_name: input
                })
              }}
          />
          <TextInput
              smartScrollOptions = {{
                moveToNext: true,
                type:       'text'
                }}
              style={commonStyles.modalTextInputSingleLine}
              placeholder={`   Planter Last Name`}
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType='next'
              clearButtonMode='while-editing'
              autoFocus={false}
              maxLength={15}
              defaultValue={this.state.last_name}
              onChangeText = {(input) => {
                this.setState({
                  last_name: input
                })
              }}
          />
          <TextInput
              smartScrollOptions = {{
                moveToNext: false,
                type:       'text'
                }}
              style={commonStyles.modalTextInputMultiLine}
              placeholder={`   Planter Additional Info`}
              autoCorrect={false}
              returnKeyType='done'
              clearButtonMode='while-editing'
              autoFocus={false}
              maxLength={1000}
              multiline={true}
              defaultValue={this.state.additional_info}
              onChangeText = {(input) => {
                this.setState({
                  additional_info: input
                })
              }}
          />
        </View>
      );
    }
}
