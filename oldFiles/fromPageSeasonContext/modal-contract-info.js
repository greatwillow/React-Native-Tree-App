
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

export default class ModalContractInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      contract_id: this.props.contract_id,
      contract_name: this.props.contract_name,
      contract_additional_info: this.props.contract_additional_info,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      contract_name: nextProps.contract_name,
      contract_additional_info: nextProps.contract_additional_info,
    })
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{padding: 20, paddingTop:0, fontSize: 16, fontWeight: '400'}}>Contract Name: </Text>
                <Text style={{fontWeight: '200', paddingLeft: 30, paddingRight: 30}}>{this.state.contract_name}</Text>
                <Text style={{padding: 20, fontSize: 16, fontWeight: '400'}}>Contract Additional Information: </Text>
                <Text style={{fontWeight: '200', paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>{this.state.contract_additional_info}</Text>
              </View>
            </View>
          </View>
        </Modal>
        <AwesomeIcons
          name='info'
          size={15}
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