
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

export default class ModalUpdateContract extends Component {
  constructor(props){
    super(props);
    this._onPressUpdateContract = this._onPressUpdateContract.bind(this);
    this.state = {
      modalVisible: false,
      transparent: true,
      contract_id: this.props.contract_id,
      contract_name: this.props.contract_name,
      contract_additional_info: this.props.contract_additional_info,
    }
  }
/*
  componentDidMount() {
    this.setState({
      contract_id: this.props.contract_id,
      contract_name: this.props.contract_name,
      contract_additional_info: this.props.contract_additional_info
    });
  }
*/
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressUpdateContract() {
    this.setState({modalVisible: false});
    const inputObject= {
      contract_id: this.state.contract_id,
      contract_name: this.state.contract_name,
      contract_additional_info: this.state.contract_additional_info,
    }
    this.props.updateContract(inputObject);
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
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  autoFocus={true}
                  maxLength={12}
                  defaultValue={this.state.contract_name}
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
                  defaultValue={this.state.contract_additional_info}
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
                  onPress={() => this._onPressUpdateContract()}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Update Contract</Text>
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
