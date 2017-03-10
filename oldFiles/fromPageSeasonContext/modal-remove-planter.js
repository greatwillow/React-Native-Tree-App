
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

import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const deviceWidth = Dimensions.get('window').width;

export default class ModalRemovePlanter extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      modalVisible: false,
      transparent: true,
      planter_id: '',
      planter_first_name: '',
      planter_last_name: '',
      planter_full_name: '',
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressRemovePlanterFromList() {
    this.setState({modalVisible: false});
    const inputObject= {
      planter_id: this.props.planter_id,
      planter_first_name: this.state.planter_first_name,
      planter_last_name: this.state.planter_last_name,
      planter_full_name: this.state.planter_full_name
    }
    this.props.removePlanterFromList(inputObject);
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
              <AwesomeIcon
                  onPress={this._setModalVisible.bind(this, false)}
                  style={{fontSize: 18, padding: 10, alignSelf: 'flex-end'}}
                  name='close'
                  color='red' />
              <Text style={{color: 'black', fontSize: 18, fontWeight: '200', textAlign: 'center', justifyContent: 'center', padding: 20}}>
                By clicking the button below, <Text style={{color: 'red'}}>{this.props.planter_full_name}</Text> and all his accompanying data will be permanently deleted from the list of planters.
              </Text>

                <TouchableOpacity
                  style={stylesSeasonContext.modalInternalButton}
                  onPress={() => this._onPressRemovePlanterFromList()}
                  ><Text style={{color: 'white', fontSize: 18, fontWeight: '200', alignSelf: 'center', padding: 5}}>Remove Planter</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <MaterialIcons
          name='remove-circle-outline'
          size={15}
          color={'red'}
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
    alignItems: 'center'
  }
});
