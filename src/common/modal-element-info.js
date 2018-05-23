import React, { Component } from 'react';

import {
  Dimensions,
  Modal,
  ScrollView,
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
import { InfoIcon } from './icons';

const deviceWidth = Dimensions.get('window').width;

export default class ModalElementInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
      id: this.props.id,
      name: this.props.name,
      additional_info: this.props.additional_info
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
      additional_info: nextProps.additional_info
    });
  }

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
              <View style={{ alignItems: 'flex-start' }}>
                <Text
                  style={{ padding: 20, paddingTop: 0, fontSize: 16, fontWeight: '400' }}
                >
                  {`${this.props.textName}`} Name:{' '}
                </Text>
                <Text style={{ fontWeight: '200', paddingLeft: 30, paddingRight: 30 }}>
                  {this.state.name}
                </Text>
                <Text style={{ padding: 20, fontSize: 16, fontWeight: '400' }}>
                  {`${this.props.textName}`} Additional Information:{' '}
                </Text>
                <ScrollView style={{ height: 200 }}>
                  <Text
                    style={{
                      fontWeight: '200',
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingBottom: 30
                    }}
                  >
                    {this.state.additional_info}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
        <InfoIcon {...this.props} onPress={this._setModalVisible.bind(this, true)} />
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
