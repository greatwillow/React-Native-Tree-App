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

import IceColors from './ice-colors'
import commonStyles from './styles'

import ModalAddElement from './modal-add-element'
import ModalUpdateElement from './modal-update-element'
import ModalElementInfo from './modal-element-info'
import ModalRemoveElement from './modal-remove-element'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudList extends Component {
  constructor(props) {
    super(props);
    this._renderElementList = this._renderElementList.bind(this);
    this._expandAnimationForElementList = this._expandAnimationForElementList.bind(this);
    this.state ={
      panel_open: false,
      panel_height: 0,
      id: '',
      name: '',
      additional_info: '',
    }
  }

  _expandAnimationForElementList() {
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

  _renderElementList() {
      return this.props.listAll.map((element) => {
        return (
          <View key={element.id} style={commonStyles.renderedListRow}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View>
                <Text style={{color: 'white'}}>{element.name}</Text>
                <Text style={{color: 'white'}}>{element.id}</Text>
              </View>
            </View>
            <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
              <View style={{paddingRight: 20}}>
                <ModalUpdateElement
                    {...this.props}
                    textName = {this.props.textName}
                    id = {element.id}
                    name = {element.name}
                    removeFunction = {this.props.removeFunction}
                    updateFunction = {this.props.updateFunction}
                    addElementToRelationshipFunction = {this.props.addElementToRelationshipFunction}
                    removeElementFromRelationshipFunction = {this.props.removeElementFromRelationshipFunction}
                    setSelectedElementIdFunction = {this.props.setSelectedElementIdFunction}
                    setIntoUpdateMode = {true}
                />
              </View>
              <View style={{paddingRight: 20}}>
                <ModalElementInfo
                    {...this.props}
                    textName = {this.props.textName}
                    id = {element.id}
                    name = {element.name}
                    additional_info = {element.additional_info}
                />
              </View>
              <View>
                <ModalRemoveElement
                    {...this.props}
                    textName = {this.props.textName}
                    id  = {element.id}
                    name={element.name}
                    setSelectedElementIdFunction = {this.props.setSelectedElementIdFunction}
                    removeElement = {this.props.removeFunction}
                />
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
              style={this.props.style}
              onPress={this._expandAnimationForElementList}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <MaterialIcons
                    name={this.state.panel_open ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                    size={30}
                    color='white'
                  />
                  <Text style={{color: 'white', fontSize: 18, fontWeight: '300', paddingLeft: 20}}>{`${this.props.textName}s`}</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                  <ModalAddElement
                      {...this.props}
                      textName = {this.props.textName}
                      addFunction = {this.props.addFunction}
                      removeFunction = {this.props.removeFunction}
                      updateFunction = {this.props.updateFunction}
                      addElementToRelationshipFunction = {this.props.addElementToRelationshipFunction}
                      removeElementFromRelationshipFunction = {this.props.removeElementFromRelationshipFunction}
                      setSelectedElementIdFunction = {this.props.setSelectedElementIdFunction}
                      setIntoUpdateMode = {false}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{margin: 10, backgroundColor: IceColors.iceDarkGray, height: this.state.panel_height, width: 6*(deviceWidth/8), alignSelf: 'center', borderWidth: 0, borderRadius: 10}}>
              <ScrollView showsVerticalScrollIndicator={true}>{this._renderElementList()}</ScrollView>
          </View>
        </View>
    );
  }
}
