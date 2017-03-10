
import React, {
  Component
} from 'react'

import {
  Dimensions,
  Modal,
  StyleSheet,
  Switch,
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

const deviceWidth = Dimensions.get('window').width;

export default class ModalAddRequestKey extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      request_key_id: '',
      request_key_name: '',
      request_key_additional_info: '',
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressaddRequestKey() {
    this.setState({modalVisible: false});
    const inputObject= {
      id: uniqueId = (new Date).getTime(),
      name: this.state.request_key_name,
      additional_info: this.state.request_key_additional_info
    }
    this.props.addRequestKey(inputObject);
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
            <View style={this.state.transparent ?
              stylesSeasonContext.modalInnerContainerTransparentStyle :
              null}
              >
              <AwesomeIcons
                  onPress={this._setModalVisible.bind(this, false)}
                  style={{fontSize: 18, padding: 10, alignSelf: 'flex-end'}}
                  name='close'
                  color='red' />
              <TextInput
                  style={stylesSeasonContext.modalTextInputSingleLine}
                  placeholder={'  Request-Key Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  autoFocus={true}
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    request_key_name: text
                  });
                }
              }
              />
              <TextInput
                  style={stylesSeasonContext.modalTextInputMultiLine}
                  placeholder={'  Request-Key Additional Info'}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  onChangeText={
                    (text) => {
                      this.setState({
                    request_key_additional_info: text
                  });
                }
              }
              />
              <TouchableOpacity
                style={stylesSeasonContext.modalInternalButton}
                onPress={() => this._onPressaddRequestKey()}
              >
                <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Add Request-Key</Text>
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
          onPress={this._setModalVisible.bind(this, true)}
          />

      </View>
    );
  }
}
