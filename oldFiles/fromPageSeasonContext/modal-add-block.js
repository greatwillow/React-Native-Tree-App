
import React, {
  Component
} from 'react'

import {
  Dimensions,
  keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import SmartScrollView from 'react-native-smart-scroll-view'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import IceColors from '../../common/ice-colors'
import stylesSeasonContext from './styles-season-context'

import AwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CrudSubList from './crud-sublist'

const deviceWidth = Dimensions.get('window').width;

export default class ModalAddBlock extends Component {
  constructor(props){
    super(props);
    this._onPressAddBlockInfo = this._onPressAddBlockInfo.bind(this);
    this._onPressSetupModal = this._onPressSetupModal.bind(this);
    this._onPressRemoveModal = this._onPressRemoveModal.bind(this);
    this._setModalVisible = this._setModalVisible.bind(this);
    this.state = {
      modalVisible: false,
      transparent: true,
      id: '',
      name: 'default name',
      additional_info: '',
      allocation_total: '',
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressSetupModal(){
    this._setModalVisible(true);
    this.setState({
      id: (new Date).getTime(),
    }, () => {
      const inputObject= {
        id: this.state.id,
        name: this.state.name,
        additional_info: this.state.additional_info,
        allocation_total: this.state.allocation_total,
      }
      this.props.addBlock(inputObject);
      this.props.setSelectedBlockId({id: this.state.id});
    });
  }
  _onPressRemoveModal(){
    this._setModalVisible(false);
    const inputObject= {
      id: this.state.id,
      name: this.state.name,
    }
    this.props.setSelectedBlockId({id: 0});
    this.props.removeBlock(inputObject);
  }

  _onPressAddBlockInfo() {
    this._setModalVisible(false);
    this.setState({
      id: this.state.id,
      name: this.state.name,
    }, () => {
      const inputObject= {
        id: this.state.id,
        name: this.state.name,
        additional_info: this.state.additional_info,
        allocation_total: this.state.allocation_total,
      }
      this.props.updateBlock(inputObject);
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._onPressRemoveModal}}
          >
          <SmartScrollView
            forceFocusField       = { this.state.focusField }
            scrollPadding         = { 10 }
          >
          <Animatable.View
            animation='flipInX'
            style={this.state.transparent ?
              stylesSeasonContext.modalBackgroundYesTransparent :
              stylesSeasonContext.modalBackgroundNoTransparent}
            >
            <View style={this.state.transparent ? stylesSeasonContext.modalInnerContainerTransparentStyle : null}>
              <AwesomeIcons
                  onPress={this._onPressRemoveModal}
                  style={{fontSize: 18, padding: 10, alignSelf: 'flex-end'}}
                  name='close'
                  color='red' />
              <TextInput
                  smartScrollOptions = {{
                    moveToNext: true,
                    type:       'text'
                    }}
                  style={stylesSeasonContext.modalTextInputSingleLine}
                  placeholder={'  Block Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  autoFocus={true}
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    name: text
                  });
                }
              }
              />
              <TextInput
                  smartScrollOptions = {{
                    moveToNext:      true,
                    type:            'text'
                  }}
                  style={stylesSeasonContext.modalTextInputSingleLine}
                  placeholder={'  Block Total Allocation'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    allocation_total: text
                  });
                }
              }
              />
              <CrudSubList
                  {...this.props}
                  related_element_id = {this.state.id}
                  listAll = {this.props.requestKeysAll}
                  listChosen = {this.props.requestKeysOfBlockSelector}
              />
              <TextInput
                  smartScrollOptions = {{
                    moveToNext:      false,
                    type:            'text'
                  }}
                  style={stylesSeasonContext.modalTextInputMultiLine}
                  placeholder={'  Block Additional Info'}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  onChangeText={
                    (text) => {
                      this.setState({
                    additional_info: text
                  });
                }
              }
              />
                <TouchableOpacity
                  style={stylesSeasonContext.modalInternalButton}
                  onPress={() => this._onPressAddBlockInfo()}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Add Block</Text>
                </TouchableOpacity>
            </View>
          </Animatable.View>

          </SmartScrollView>
          <KeyboardSpacer/>
        </Modal>
        <MaterialIcons
          name='add-circle'
          size={30}
          color={IceColors.iceGreen}
          onPress={
            this._onPressSetupModal
          }
          />
      </View>
    );
  }
}
