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

import ModalAddContract from './modal-add-contract'
import ModalUpdateContract from './modal-update-contract'
import ModalContractInfo from './modal-contract-info'
import ModalRemoveContract from './modal-remove-contract'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudListContracts extends Component {
  constructor(props) {
    super(props);
    this._renderContractList = this._renderContractList.bind(this);
    this._expandAnimationForContractList = this._expandAnimationForContractList.bind(this);
    this.state ={
      panel_open: false,
      panel_height: 0,
      contract_id: '',
      contract_name: '',
      contract_additional_info: '',
    }
  }

  _expandAnimationForContractList() {
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

  _renderContractList() {
    return this.props.contractsAll.map((contract) => {
      return (
        <View key={contract.contract_id} style={stylesSeasonContext.renderedListRow}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View>
              <Text style={{color: 'white'}}>{contract.contract_name}</Text>
            </View>
          </View>
          <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <View style={{paddingRight: 20}}>
              <ModalUpdateContract {...this.props} contract_id={contract.contract_id} contract_name={contract.contract_name} contract_additional_info={contract.contract_additional_info}/>
            </View>
            <View style={{paddingRight: 20}}>
              <ModalContractInfo {...this.props} contract_id={contract.contract_id} contract_name={contract.contract_name} contract_additional_info={contract.contract_additional_info}/>
            </View>
            <View>
              <ModalRemoveContract {...this.props} contract_id={contract.contract_id} contract_name={contract.contract_name}/>
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
              onPress={this._expandAnimationForContractList}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <MaterialIcons
                    name={this.state.panel_open ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                    size={30}
                    color='white'
                  />
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '300', paddingLeft: 20}}>Contracts</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <ModalAddContract {...this.props}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <View style={[stylesSeasonContext.expandingPanel, {height: this.state.panel_height}]}>
              <ScrollView showsVerticalScrollIndicator={true}>{this._renderContractList()}</ScrollView>
            </View>
          </View>
        </View>
    );
  }
}
