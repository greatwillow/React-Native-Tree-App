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

import ModalAddPlanter from './modal-add-planter'
import ModalUpdatePlanter from './modal-update-planter'
import ModalRemovePlanter from './modal-remove-planter'
import ModalPlanterInfo from './modal-planter-info'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudListPlanters extends Component {
  constructor(props) {
    super(props);
    this._renderPlanterList = this._renderPlanterList.bind(this);
    this._expandAnimationForPlanterList = this._expandAnimationForPlanterList.bind(this);
    this.state ={
      panel_open: false,
      panel_height: 0,
      planter_id: '',
      planter_first_name: '',
      planter_last_name: '',
      planter_full_name: this.planter_first_name+' '+this.planter_last_name,
      planter_additional_info: '',
    }
  }

  _expandAnimationForPlanterList() {
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

  _renderPlanterList() {
    return this.props.plantersAll.map((planter) => {
      return (
        <View key={planter.planter_id} style={stylesSeasonContext.renderedListRow}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View>
              <Text style={{color: 'white'}}>{planter.planter_first_name+' '+planter.planter_last_name}</Text>
            </View>
          </View>
          <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <View style={{paddingRight: 20}}>
              <ModalUpdatePlanter {...this.props} planter_id={planter.planter_id} planter_first_name={planter.planter_first_name} planter_last_name={planter.planter_last_name} planter_additional_info={planter.planter_additional_info}/>
            </View>
            <View style={{paddingRight: 20}}>
              <ModalPlanterInfo {...this.props} planter_id={planter.planter_id} planter_full_name={planter.planter_full_name} planter_additional_info={planter.planter_additional_info}/>
            </View>
            <View>
              <ModalRemovePlanter {...this.props} planter_id={planter.planter_id} planter_full_name={planter.planter_full_name}/>
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
              style={[stylesSeasonContext.crudListHeader, {marginTop: (deviceHeight*1)/8}]}
              onPress={this._expandAnimationForPlanterList}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <MaterialIcons
                    name={this.state.panel_open ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                    size={30}
                    color='white'
                  />
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '300', paddingLeft: 20}}>Planters</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <ModalAddPlanter {...this.props}/>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <View style={[stylesSeasonContext.expandingPanel, {height: this.state.panel_height}]}>
              <ScrollView showsVerticalScrollIndicator={true}>{this._renderPlanterList()}</ScrollView>
            </View>
          </View>
        </View>
    );
  }
}
