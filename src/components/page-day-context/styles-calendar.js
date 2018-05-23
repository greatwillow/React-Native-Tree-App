import { Dimensions, StyleSheet } from 'react-native';

const Device_Width = Dimensions.get('window').width;
const DEVICE_WIDTH = Device_Width * 6 / 8;

const stylesCalendar = StyleSheet.create({
  calendarContainer: {
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  monthContainer: {
    width: DEVICE_WIDTH,
    alignSelf: 'center'
  },
  calendarControls: {
    flexDirection: 'row'
  },
  controlButton: {},
  controlButtonText: {
    margin: 10,
    fontSize: 15
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 60,
    fontSize: 15,
    margin: 10
  },
  calendarHeading: {
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  dayHeading: {
    width: DEVICE_WIDTH / 7,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 0
  },
  weekendHeading: {
    width: DEVICE_WIDTH / 7,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 0
  },
  weekRow: {
    flexDirection: 'row'
  },
  dayButton: {
    alignItems: 'center',
    padding: 5,
    width: DEVICE_WIDTH / 7,
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9'
  },
  dayButtonFiller: {
    padding: 5,
    width: DEVICE_WIDTH / 7
  },
  day: {
    fontSize: 15,
    textAlign: 'center'
  },
  eventIndicatorFiller: {
    marginTop: 3,
    borderColor: 'transparent',
    width: 4,
    height: 4,
    borderRadius: 2
  },
  eventIndicator: {
    backgroundColor: '#cccccc'
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 38,
    height: 38,
    borderRadius: 14
  },
  currentDayCircle: {
    backgroundColor: 'red'
  },
  currentDayText: {
    color: 'red'
  },
  selectedDayCircle: {
    backgroundColor: 'black'
  },
  hasEventCircle: {},
  hasEventText: {},
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold'
  },
  weekendDayText: {
    color: '#cccccc'
  }
});

export default stylesCalendar;
