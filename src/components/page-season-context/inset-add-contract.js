import React, {
  Component
} from 'react'

import {
  Text,
  TextInput,
  View
} from 'react-native'

import CrudSubList from '../../common/crud-sublist'
import InputTextSingleLine from '../../common/input-text-single-line'
import InputTextMultiLine from '../../common/input-text-multi-line'

export default class InsetAddContract extends Component {
    constructor(props) {
      super(props)
      this.inputObjectGetter = this.inputObjectGetter.bind(this);
      this.state = {
        id: this.props.id,
        name: this.props.setIntoUpdateMode ? this.props.contractsSelectedInstance.name : '',
        tree_count_total: this.props.setIntoUpdateMode ? this.props.contractsSelectedInstance.tree_count_total : '',
        additional_info: this.props.setIntoUpdateMode ? this.props.contractsSelectedInstance.additional_info : '',
      }
    }

    inputObjectGetter() {
      let inputObject = {
              id: this.props.id,
              name: this.state.name,
              tree_count_total: this.state.tree_count_total,
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
              placeholder={`  ${this.props.textName} Name`}
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType='next'
              clearButtonMode='while-editing'
              autoFocus={true}
              maxLength={15}
              defaultValue={this.state.name}
              onChangeText = {(input) => {
                this.setState({
                  name: input
                })
              }}
          />
          <TextInput
              smartScrollOptions = {{
                moveToNext: true,
                type:       'text'
                }}
              style={commonStyles.modalTextInputSingleLine}
              placeholder={`  ${this.props.textName} Tree Count Total`}
              autoCapitalize='words' 
              autoCorrect={false}
              returnKeyType='next'
              clearButtonMode='while-editing'
              autoFocus={false}
              maxLength={15}
              defaultValue={this.state.tree_count_total}
              onChangeText = {(input) => {
                this.setState({
                  tree_count_total: input
                })
              }}
          />
          <CrudSubList
              {...this.props}
              addElementToRelationshipFunction = {this.props.addBlockToContract}
              removeElementFromRelationshipFunction = {this.props.removeBlockFromContract}
              listed_element_name = 'Block'
              related_element_id = {this.state.id}
              related_element_name = {'Contract'}
              subListAll = {this.props.blocksAll}
              subListChosen = {this.props.blocksOfContractSelector}
          />
          <TextInput
              smartScrollOptions = {{
                moveToNext: false,
                type:       'text'
                }}
              style={commonStyles.modalTextInputMultiLine}
              placeholder={`  ${this.props.textName} Additional Info`}
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
