
import React, {
  Component
} from 'react'

import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import CheckBox from 'react-native-icon-checkbox';

import AwesomeIcons from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IceColors from '../../common/ice-colors'
import commonStyles from '../../common/styles'

const deviceWidth = Dimensions.get('window').width;

export default class ModalSelectRequestKeys extends Component {
  constructor(props){
    super(props);
    this._renderPickerListRequestKeys = this._renderPickerListRequestKeys.bind(this);
    this._handleAddRequestKeyToBlock = this._handleAddRequestKeyToBlock.bind(this);
    this.state = {    
      modalVisible: false,
      transparent: true,
    }
  }


  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _handleAddRequestKeyToBlock() {

  }

  _renderPickerListRequestKeys() {
    return this.props.request_keys.request_key_list.map((request_key) => {
           return (
             <View key={request_key.request_key_id} style={commonStyles.renderedListRow}>
               <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                 <View>
                   <Text style={{color: 'black'}}>{request_key.request_key_name}</Text>
                 </View>
                 <TouchableOpacity
                  onPress={this._handleAddRequestKeyToBlock}
                  >
                  <Text>Add this</Text>
                </TouchableOpacity>
               </View>
             </View>
           );
    });
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
              <ScrollView
                showsVerticalScrollIndicator={true}
                style={{
                  backgroundColor: 'white',
                  width: (deviceWidth/6)*4,
                  height: 300,
                  padding: 10,
                  borderRadius: 5}}>
                {this._renderPickerListRequestKeys()}
              </ScrollView>
                <TouchableOpacity
                  style={commonStyles.modalInternalButton}
                  onPress={() => this._onPressaddBlock()}
                  >
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Add Block</Text>
                </TouchableOpacity>
            </View>
          </View>
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
