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

import * as Animatable from 'react-native-animatable'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IceColors from '../../common/ice-colors'
import stylesSeasonContext from './styles-season-context'

import ModalAddElement from './modal-add-element'
import ModalUpdateBlock from './modal-update-block'
import ModalBlockInfo from './modal-block-info'
import ModalRemoveBlock from './modal-remove-block'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudListBlocks extends Component {
  constructor(props) {
    super(props);
    this._renderBlockList = this._renderBlockList.bind(this);
    this._expandAnimationForBlockList = this._expandAnimationForBlockList.bind(this);
    this.state ={
      panel_open: false,
      panel_height: 0,
      id: '',
      name: '',
      additional_info: '',
    }
  }

  _expandAnimationForBlockList() {
    if(!this.state.panel_open){
      LayoutAnimation.easeInEaseOut()
      this.setState({
        panel_height: (deviceHeight)/6,
        panel_open: true
      })
    }
    else {
      LayoutAnimation.easeInEaseOut()
      this.setState({
        panel_height: 0,
        panel_open: false
      })
    }
  }

  _renderBlockList() {
      return this.props.blocksAll.map((element) => {
        return (
          <View key={block.id} style={stylesSeasonContext.renderedListRow}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View>
                <Text style={{color: 'white'}}>{element.name}</Text>
                <Text style={{color: 'white'}}>{element.id}</Text>
              </View>
            </View>
            <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingRight: 20}}>
                <ModalUpdateBlock {...this.props} block_id={element.id} block_name={element.name} block_additional_info={element.additional_info}/>
              </View>
              <View style={{paddingRight: 20}}>
                <ModalBlockInfo {...this.props} block_id={element.id} block_name={element.name} block_additional_info={element.additional_info}/>
              </View>
              <View>
                <ModalRemoveBlock {...this.props} block_id={element.id} block_name={element.name}/>
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
              onPress={this._expandAnimationForBlockList}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <MaterialIcons
                    name={this.state.panel_open ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                    size={30}
                    color='white'
                  />
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '300', paddingLeft: 20}}>Blocks</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <ModalAddElement
                      {...this.props}
                      removeFunction = {this.props.removeBlock}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{margin: 10, backgroundColor: IceColors.iceDarkGray, height: this.state.panel_height, width: 6*(deviceWidth/8), alignSelf: 'center', borderWidth: 0, borderRadius: 10}}>
              <ScrollView showsVerticalScrollIndicator={true}>{this._renderBlockList()}</ScrollView>
          </View>
        </View>
    );
  }
}
