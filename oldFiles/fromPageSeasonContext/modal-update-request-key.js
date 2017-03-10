
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

import IceColors from '../../common/ice-colors'
import stylesSeasonContext from './styles-season-context'

import AwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const deviceWidth = Dimensions.get('window').width;

export default class ModalUpdateRequestKey extends Component {
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

  componentDidMount() {
    this.setState({
      request_key_id: this.props.request_key_id,
      request_key_name: this.props.request_key_name,
      request_key_additional_info: this.props.request_key_additional_info
    });
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressupdateRequestKey() {
    this.setState({modalVisible: false});
    const inputObject= {
      request_key_id: this.state.request_key_id,
      request_key_name: this.state.request_key_name,
      request_key_additional_info: this.state.request_key_additional_info,
    }
    this.props.updateRequestKey(inputObject);
  }

  render() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.7)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: IceColors.iceGreen, padding: 10, width: (deviceWidth/6)*5, alignSelf: 'center'}
      : null;

    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
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
                  defaultValue={this.state.request_key_name}
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
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  defaultValue={this.state.request_key_additional_info}
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
                  onPress={() => this._onPressupdateRequestKey()}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Update Request-Key</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <AwesomeIcons
          name='edit'
          size={15}
          color= 'white'
          onPress={this._setModalVisible.bind(this, true)}
          />

      </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  }
});
