import React, { Component } from 'react';

import {
  Dimensions,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import IceColors from './ice-colors';
import commonStyles from './styles';

import { CloseIcon } from './icons';
import { RemoveIcon } from './icons';

const deviceWidth = Dimensions.get('window').width;

export default class ModalRemoveElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      id: '',
      name: ''
    };
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _onPressRemoveElementFromList() {
    this.setState({ modalVisible: false });
    const inputObject = {
      id: this.props.id
    };
    this.props.setSelectedElementIdFunction({ id: 0 });
    this.props.removeFunction(inputObject);
  }

  render() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.7)' : '#f5fcff'
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {
          backgroundColor: IceColors.iceGreen,
          padding: 10,
          width: deviceWidth / 6 * 5,
          alignSelf: 'center'
        }
      : null;

    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this._setModalVisible(false);
          }}
        >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <CloseIcon
                {...this.props}
                onPress={this._setModalVisible.bind(this, false)}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '200',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: 20
                }}
              >
                By clicking the button below, {`${this.props.textName}: `}{' '}
                <Text style={{ color: 'red' }}>{this.props.name}</Text> and all its
                accompanying data will be permanently deleted from the list of{' '}
                {`${this.props.textName}'s`}.
              </Text>

              <TouchableOpacity
                style={commonStyles.modalInternalButton}
                onPress={() => this._onPressRemoveElementFromList()}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '200',
                    alignSelf: 'center',
                    padding: 5
                  }}
                >{`Remove ${this.props.textName}`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <RemoveIcon {...this.props} onPress={this._setModalVisible.bind(this, true)} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center'
  }
});
