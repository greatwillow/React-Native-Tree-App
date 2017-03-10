
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

import CrudSubList from './crud-sublist'

const deviceWidth = Dimensions.get('window').width;

export default class ModalUpdateBlock extends Component {
  constructor(props){
    super(props);
    this._onPressUpdateBlock = this._onPressUpdateBlock.bind(this);
    this.state = {
      modalVisible: false,
      transparent: true,
      block_id: this.props.block_id,
      block_name: this.props.block_name,
      block_additional_info: this.props.block_additional_info,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      block_id: this.props.block_id,
      block_name: nextProps.block_name,
      block_additional_info: nextProps.block_additional_info,
    });
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressUpdateBlock() {
    this.setState({
      modalVisible: false,
    })
    const inputObject= {
      block_id: this.state.block_id,
      block_name: this.state.block_name,
      block_additional_info: this.state.block_additional_info,
    }
    this.props.updateBlock(inputObject);
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
                  placeholder={'  Block Name'}
                  autoCapitalize='words'
                  autoCorrect={false}
                  returnKeyType='next'
                  clearButtonMode='while-editing'
                  autoFocus={true}
                  maxLength={12}
                  defaultValue={this.state.block_name}
                  onChangeText={
                    (text) => {
                      this.setState({
                    block_name: text
                  });
                }
              }
              />
              <CrudSubList
                  {...this.props}
                  related_element_id = {this.state.block_id}
                  listAll = {this.props.requestKeysAll}
                  listChosen = {this.props.requestKeysOfBlockSelector}
              />
              <TextInput
                  style={stylesSeasonContext.modalTextInputMultiLine}
                  placeholder={'  Block Additional Info'}
                  autoCorrect={false}
                  returnKeyType='done'
                  clearButtonMode='while-editing'
                  maxLength={1000}
                  multiline={true}
                  defaultValue={this.state.block_additional_info}
                  onChangeText={
                    (text) => {
                      this.setState({
                    block_additional_info: text
                  });
                }
              }
              />

                <TouchableOpacity
                  style={stylesSeasonContext.modalInternalButton}
                  onPress={() => this._onPressUpdateBlock()}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Update Block</Text>
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
