import React, {
  Component
} from 'react'

import {
  Dimensions,
  Image,
  LayoutAnimation,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IceColors from '../../common/ice-colors'
import stylesSeasonContext from './styles-season-context'

import ModalAddRequestKey from './modal-add-request-key'
import ModalUpdateRequestKey from './modal-update-request-key'
import ModalRequestKeyInfo from './modal-request-key-info'
import ModalRemoveRequestKey from './modal-remove-request-key'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudListRequestKeys extends Component {
  constructor(props) {
    super(props);
    this._renderRequestKeyList = this._renderRequestKeyList.bind(this);
    this._expandAnimationForRequestKeyList = this._expandAnimationForRequestKeyList.bind(this);
    this.state ={
      panel_open: false,
      panel_height: 0,
      request_key_id: '',
      request_key_name: '',
      request_key_additional_info: '',
    }
  }

  _expandAnimationForRequestKeyList() {
    if(!this.state.panel_open){
      LayoutAnimation.easeInEaseOut();
      this.setState({
        panel_height: deviceHeight/6,
        panel_open: true
      });
    }
    else {
      LayoutAnimation
      LayoutAnimation.easeInEaseOut();
      this.setState({
        panel_height: 0,
        panel_open: false
      });
    }
  }

  _renderRequestKeyList() {
    return this.props.requestKeysAll.map((request_key) => {
      return (
        <View key={request_key.id} style={stylesSeasonContext.renderedListRow}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View>
              <Text style={{color: 'white'}}>{request_key.name}</Text>
            </View>
          </View>
          <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <View style={{paddingRight: 20}}>
              <ModalUpdateRequestKey {...this.props} request_key_id={request_key.id} request_key_name={request_key.name} request_key_additional_info={request_key.request_key_additional_info}/>
            </View>
            <View style={{paddingRight: 20}}>
              <ModalRequestKeyInfo {...this.props} request_key_id={request_key.id} request_key_name={request_key.name} request_key_additional_info={request_key.request_key_additional_info}/>
            </View>
            <View>
              <ModalRemoveRequestKey {...this.props} request_key_id={request_key.id} request_key_name={request_key.name}/>
            </View>
          </View>
        </View>
      );
    });
  }

  render(){
    return (
        <View>
          <View>
            <TouchableHighlight
              style={stylesSeasonContext.crudListHeader}
              onPress={this._expandAnimationForRequestKeyList}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <MaterialIcons
                    name={this.state.panel_open ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                    size={30}
                    color='white'
                  />
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '300', paddingLeft: 20}}>Request Keys</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <ModalAddRequestKey {...this.props}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <View style={[stylesSeasonContext.expandingPanel, {height: this.state.panel_height}]}>
              <ScrollView showsVerticalScrollIndicator={true}>{this._renderRequestKeyList()}</ScrollView>
            </View>
          </View>
        </View>
    );
  }
}
