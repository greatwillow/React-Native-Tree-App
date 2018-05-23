import React, { Component } from 'react';

import {
  Dimensions,
  Image,
  LayoutAnimation,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import IceColors from '../../common/ice-colors';
import stylesDayContext from './styles-day-context';

import CalendarFrame from './calendar-frame';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CrudMenuDate extends Component {
  constructor(props) {
    super(props);
    this._renderCalendar = this._renderCalendar.bind(this);
    this._expandAnimationForCalendar = this._expandAnimationForCalendar.bind(this);
    this.state = {
      panel_open: true,
      panel_height: 0,
      sub_panel_height: 0,
      selected_tally_date: this.props.selected_tally_date
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected_tally_date: nextProps.selected_tally_date });
  }

  _expandAnimationForCalendar() {
    if (this.state.panel_open) {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        panel_open: false,
        panel_height: deviceHeight / 6 * 3,
        sub_panel_height: deviceHeight / 6 * 2.5
      });
    } else {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        panel_open: true,
        panel_height: 0,
        sub_panel_height: 0
      });
    }
  }

  _renderCalendar() {
    return (
      <View>
        <CalendarFrame sub_panel_height={this.state.sub_panel_height} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <View>
          <TouchableHighlight
            style={[stylesDayContext.crudListHeader, { marginTop: deviceHeight * 1 / 8 }]}
            onPress={this._expandAnimationForCalendar}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
              >
                <MaterialIcons
                  name={
                    this.state.panel_open ? 'keyboard-arrow-right' : 'keyboard-arrow-down'
                  }
                  size={30}
                  color="white"
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '300',
                    paddingLeft: 20
                  }}
                >
                  Tally Date:
                </Text>
                <Text> {this.state.selected_tally_date} </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <View style={[styles.calendarContainer, { height: this.state.panel_height }]}>
            <ScrollView showsVerticalScrollIndicator={true}>
              {this._renderCalendar()}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarContainer: {
    margin: 10,
    backgroundColor: 'white',
    width: 7 * (deviceWidth / 8),
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 10
  }
});
