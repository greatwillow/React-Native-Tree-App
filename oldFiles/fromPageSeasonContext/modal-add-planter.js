
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

export default class ModalAddPlanter extends Component {
  constructor(props){
    super(props);
    this.state = {

      modalVisible: false,
      transparent: true,
      planter_id: '',
      planter_first_name: '',
      planter_last_name: '',
      planter_full_name: '',
      planter_additional_info: '',
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressaddPlanter() {
    this.setState({
      modalVisible: false,
      planter_full_name: this.state.planter_first_name+' '+this.state.planter_last_name
    }, () => {
      const inputObject= {
        planter_id: uniqueId = (new Date).getTime(),
        planter_first_name: this.state.planter_first_name,
        planter_last_name: this.state.planter_last_name,
        planter_full_name: this.state.planter_full_name,
        planter_additional_info: this.state.planter_additional_info
      }
      this.props.addPlanter(inputObject);
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
            forceFocusField = { this.state.focusField }
            scrollPadding = { 10 }
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
                  placeholder={'  Planter First Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  autoFocus={true}
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    planter_first_name: text
                  });
                }
              }
              />
              <TextInput
                  style={stylesSeasonContext.modalTextInputSingleLine}
                  placeholder={'  Planter Last Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    planter_last_name: text
                  });
                }
              }
              />
              <TextInput
                  style={stylesSeasonContext.modalTextInputMultiLine}
                  placeholder={'  Planter Additional Info'}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  onChangeText={
                    (text) => {
                      this.setState({
                    planter_additional_info: text
                  });
                }
              }
              />

                <TouchableOpacity
                  onPress={() => this._onPressaddPlanter()}
                  style={stylesSeasonContext.modalInternalButton}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Add Planter</Text>
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
