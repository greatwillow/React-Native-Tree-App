'use strict';

import React, {
    Component
} from 'react'

import {
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StyleSheet
} from 'react-native'

import Calendar from 'react-native-calendar'
import moment from 'moment'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  setSelectedTallyDate,
  addTallyDate,
} from '../../actions/actions'

import stylesCalendar from './styles-calendar'

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class CalendarFrame extends Component {

  constructor(props) {
    super(props);
    this._onDateChange = this._onDateChange.bind(this);
    this.state ={
      selectedDate: moment(new Date()).format('L'),
    }
  }

  componentDidMount() {
    () => {
      this.props.addTallyDate({id: this.state.selectedDate})
      this.props.setSelectedTallyDate({id: this.state.selectedDate});;
    }
  }

  _onDateChange(date) {
    this.setState({ selectedDate: date }, () => {
      this.props.addTallyDate({id: this.state.selectedDate});
      this.props.setSelectedTallyDate({id: this.state.selectedDate});
    });
  }



  render() {
    return (
      <View style={{padding: 20, width: 500, height: this.props.sub_panel_height, alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
        <Calendar
          customStyle={stylesCalendar}
          ref="calendar"
          showControls={true}
          scrollEnabled={true}
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'ll'}
          onDateSelect={this._onDateChange}
          weekStart={0}
          />

        <Text>Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedTallyDate,
  addTallyDate,
}, dispatch)

export default connect(null, mapDispatchToProps)(CalendarFrame);
