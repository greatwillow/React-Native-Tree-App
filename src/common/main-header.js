'use strict';

import React, {
    Component,
    PropTypes
} from 'react'

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import { connect } from 'react-redux'

import IceColors from './ice-colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const deviceHeight = Dimensions.get('window').height;

class MainHeader extends Component {
  constructor(props){
    super(props);
  }
  static contextTypes = {
    drawer: PropTypes.object.isRequired
  };


  render(){
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style = {styles.header} >
            <TouchableOpacity onPress={this.context.drawer.open}>
              <MaterialIcons name='menu' size={45} style={styles.menuIcon}/>
            </TouchableOpacity>
              <Text style = {styles.headerTitle}> {this.props.header_title} </Text>
          </View>
        </View>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  headerContainer: {
    height: (deviceHeight)/8,
    backgroundColor: IceColors.iceDarkGray,
    borderBottomWidth: 2,
    borderColor: IceColors.iceGreen,
    position: 'relative',
    top: 0,

  },
  header: {
      flexDirection: 'row',
      flex: 1
  },
  menuIcon: {
      marginTop: 25,
      marginLeft: 10,
      color: IceColors.iceMediumGray
  },
  headerTitle: {
      paddingLeft: 30,
      paddingTop: 35,
      fontFamily: 'HelveticaNeue-Thin',
      color: 'red',
      fontWeight: '200',
      fontSize: 25,
  }
});

const mapStateToProps = state => ({
  header_title: state.header_title,
})

export default connect(mapStateToProps)(MainHeader)
