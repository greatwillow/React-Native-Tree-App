'use strict';

import React, {
    Component,
    PropTypes
} from 'react'

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from 'react-native'

import {Actions} from 'react-native-router-flux'
import IceColors from '../../common/ice-colors'
//import Icon from 'react-native-vector-icons/Entypo'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class ControlPanel extends Component {
  constructor(props){
    super(props)
    this._handlerButton2 = this._handlerButton2.bind(this);
    this._handlerButton3 = this._handlerButton3.bind(this);
    this._handlerButton4 = this._handlerButton4.bind(this);
    this._handlerButton5 = this._handlerButton5.bind(this);
  }
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  _handlerButton2(){
    Actions.seasonContext();
    this.props.closeDrawer();
  }

  _handlerButton3(){
    Actions.dayContext();
    this.props.closeDrawer();
  }

  _handlerButton4(){
    Actions.crewBuilder();
    this.props.closeDrawer();
  }

  _handlerButton5(){
//    Actions.tallyInputter();
    this.props.closeDrawer();
  }




  render() {
    let {closeDrawer} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Image
          source={require('../../images/surf-crowd.jpg')}
          style={styles.controlImage}
          />
        <TouchableOpacity style={styles.button1} onPress={closeDrawer}>
          <Text style={{color: 'white'}}>Close Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity ref='button2' style={styles.button2} onPress={this._handlerButton2}>
          <Text>Season Context</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={this._handlerButton3}>
          {/*<Icon name='tools' size={30} />*/}<Text>Day Context</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={this._handlerButton4}>
          <Text>Day Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={this._handlerButton5}>
          <Text>Tally Inputter</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'black'
  },
  controlImage: {
    margin: 0,
    height: 200,
    width: deviceWidth*0.7
  },
  button1: {
    backgroundColor: IceColors.iceDarkGray,
    borderColor: 'black',
    padding: 15,
  },
  button2: {
    backgroundColor: IceColors.iceMediumGray,
    borderColor: 'black',
    padding: 15,
  },
  button3: {
    backgroundColor: IceColors.iceLightGray,
    borderColor: 'black',
    padding: 15,
  }
})
