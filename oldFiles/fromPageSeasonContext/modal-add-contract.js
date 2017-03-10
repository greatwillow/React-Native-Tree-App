
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

export default class ModalAddContract extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      contract_id: '',
      contract_name: '',
      contract_additional_info: '',
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressaddContract() {
    this.setState({modalVisible: false});
    const inputObject= {
      contract_id: uniqueId = (new Date).getTime(),
      contract_name: this.state.contract_name,
      contract_additional_info: this.state.contract_additional_info
    }
    this.props.addContract(inputObject);
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
                  placeholder={'  Contract Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  autoFocus={true}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={12}
                  onChangeText={
                    (text) => {
                      this.setState({
                    contract_name: text
                  });
                }
              }
              />
              <TextInput
                  style={stylesSeasonContext.modalTextInputMultiLine}
                  placeholder={'  Contract Additional Info'}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  onChangeText={
                    (text) => {
                      this.setState({
                    contract_additional_info: text
                  });
                }
              }
              />
              <TouchableOpacity
                style={stylesSeasonContext.modalInternalButton}
                onPress={() => this._onPressaddContract()}
                >
                <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Add Contract</Text>
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



var styles = StyleSheet.create({

  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  }
});
