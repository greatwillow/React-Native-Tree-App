
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
import commonStyles from '../../common/styles'

import { AddOrUpdateIcon } from '../../common/icons'
import { CloseIcon } from '../../common/icons'
import AwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import InsetAddPlanter from './inset-add-planter'
import InsetAddContract from './inset-add-contract'
import InsetAddBlock from './inset-add-block'
import InsetAddRequestKey from './inset-add-request-key'

import CrudSubList from './crud-sublist'

const deviceWidth = Dimensions.get('window').width;

export default class ModalAddElement extends Component {
  constructor(props){
    super(props);
    this._onPressUpdateInfo = this._onPressUpdateInfo.bind(this);
    this._onPressSetupModal = this._onPressSetupModal.bind(this);
    this._onPressRemoveModal = this._onPressRemoveModal.bind(this);
    this._setModalVisible = this._setModalVisible.bind(this);
    this.state = {
      modalVisible: false,
      transparent: true,
      id: this.props.setIntoUpdateMode ? this.props.id : (new Date).getTime(),
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressSetupModal(){
    this._setModalVisible(true);
    this.setState({
      id: this.props.setIntoUpdateMode ? this.props.id : (new Date).getTime(),
    }, () => {
      if(!this.props.setIntoUpdateMode) {
        this.props.addFunction({id: this.state.id});
      }
      this.props.setSelectedElementIdFunction({id: this.state.id});
    });
  }
  _onPressRemoveModal(){
    if(!this.props.setIntoUpdateMode) {
        const inputObject = this.refs['addComponent'].inputObjectGetter();
        this.props.setSelectedElementIdFunction({id: null});
        this.props.removeFunction(inputObject);
        this._setModalVisible(false);
    } else {
        this.props.setSelectedElementIdFunction({id: null});
        this._setModalVisible(false);
    }
  }

  _onPressUpdateInfo() {
      const inputObject = this.refs['addComponent'].inputObjectGetter();
      this.props.updateFunction(inputObject);
      this._setModalVisible(false);
  }

  render() {
    let textName = this.props.textName;
    let componentToRender = InsetAddBlock;
    switch(textName) {
      case 'Planter': componentToRender = InsetAddPlanter
      break
      case 'Contract': componentToRender = InsetAddContract
      break
      case 'Block': componentToRender = InsetAddBlock
      break
      case 'Request Key': componentToRender = InsetAddRequestKey
      break
      default: componentToRender = InsetAddBlock
      break
    }
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
              commonStyles.modalBackgroundYesTransparent :
              commonStyles.modalBackgroundNoTransparent}
            >
            <View style={this.state.transparent ? commonStyles.modalInnerContainerTransparentStyle : null}>
              <AwesomeIcons
                  onPress={this._onPressRemoveModal}
                  style={{fontSize: 18, padding: 10, alignSelf: 'flex-end'}}
                  name='close'
                  color='red' />



                          {React.createElement(componentToRender, {
                            ...this.props,
                            ref: 'addComponent',
                            textName: this.props.textName,
                            id: this.state.id,
                            subListAll: this.props.subListAll,
                            subListChosen: this.props.subListChosen,
                            updateFunction: this.props.updateFunction,
                          })}


                  <TouchableOpacity
                    onPress={() => this._onPressUpdateInfo()}
                    style={commonStyles.modalInternalButton}
                    >
                    <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>{`Add ${textName}`}</Text>
                  </TouchableOpacity>
            </View>
          </Animatable.View>

          </SmartScrollView>
          <KeyboardSpacer/>
        </Modal>
        <AddOrUpdateIcon onPress = {this._onPressSetupModal} />
      </View>
    );
  }
}
