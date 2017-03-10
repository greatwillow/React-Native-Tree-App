'use strict';

import React, {
    Text,
    StyleSheet,
    Component,
    TouchableHighlight
  } from 'react-native'

export default class Button1 extends Component {
  constructor(props){
    super(props);
  }
   render() {
       return (
           <TouchableHighlight
                style={styles.button}
                underlayColor={'gray'}
                onPress={this.props.onPress}
                >
                <Text style = {styles.buttonText}> {this.props.text} </Text>
           </TouchableHighlight>
       );
   }
}

var styles = StyleSheet.create({
    button: {
        width: 300,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 5
    },
    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 10
    }
});
