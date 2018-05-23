import React, { Component } from 'react';

import {
  Dimensions,
  Image,
  LayoutAnimation,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import IceColors from './ice-colors';
import commonStyles from './styles';

import ListOfAllInCategory from './list-of-all-in-category';
import { ListOfChosenInCategory } from './list-of-chosen-in-category';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudSubList extends Component {
  constructor(props) {
    super(props);
    this._expandAnimation = this._expandAnimation.bind(this);
    this.state = {
      panel_open: true,
      panel_height: 0,
      list_height: 0
    };
  }

  _expandAnimation() {
    if (this.state.panel_open) {
      LayoutAnimation.easeInEaseOut();
      this.setState({ panel_height: 300 });
      this.setState({ list_height: 80 });
      this.setState({ panel_open: false });
    } else {
      LayoutAnimation.easeInEaseOut();
      this.setState({ panel_height: 0 });
      this.setState({ list_height: 0 });
      this.setState({ panel_open: true });
    }
  }

  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            style={commonStyles.crudSubListHeader}
            onPress={this._expandAnimation}
          >
            <Text
              style={{ color: 'white', fontSize: 16, fontWeight: '300', paddingLeft: 20 }}
            >{`  ${this.props.related_element_name} ${
              this.props.listed_element_name
            }'s`}</Text>
            <MaterialIcons
              name={
                this.state.panel_open ? 'keyboard-arrow-right' : 'keyboard-arrow-down'
              }
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={[commonStyles.crudSubList, { height: this.state.panel_height }]}>
            <ScrollView
              style={{
                backgroundColor: 'white',
                height: this.state.list_height,
                margin: 20,
                borderRadius: 5
              }}
              showsVerticalScrollIndicator={true}
            >
              <ListOfAllInCategory
                {...this.props}
                addElementToRelationshipFunction={
                  this.props.addElementToRelationshipFunction
                }
                list={this.props.subListAll}
                related_element_id={this.props.related_element_id}
                listed_element_name={this.props.listed_element_name}
                related_element_name={this.props.related_element_name}
              />
            </ScrollView>
            <ScrollView
              style={{
                backgroundColor: 'white',
                height: this.state.list_height,
                margin: 20,
                borderRadius: 5
              }}
              showsVerticalScrollIndicator={true}
            >
              <ListOfChosenInCategory
                {...this.props}
                removeElementFromRelationshipFunction={
                  this.props.removeElementFromRelationshipFunction
                }
                list={this.props.subListChosen}
                related_element_id={this.props.related_element_id}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
