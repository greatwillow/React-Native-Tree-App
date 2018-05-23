import { Dimensions, StyleSheet } from 'react-native';

import IceColors from '../../common/ice-colors';

const deviceWidth = Dimensions.get('window').width;

export default (stylesDayContext = StyleSheet.create({
  modalInternalButton: {
    backgroundColor: IceColors.iceDarkGray,
    height: 40,
    width: deviceWidth / 6 * 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  modalTextInputSingleLine: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    height: 40,
    width: deviceWidth / 6 * 4,
    alignSelf: 'center'
  },
  modalTextInputMultiLine: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    height: 160,
    width: deviceWidth / 6 * 4,
    alignSelf: 'center'
  },
  crudListHeader: {
    backgroundColor: IceColors.iceDarkGray,
    width: 6 * (deviceWidth / 8),
    alignSelf: 'center',
    margin: 10,
    marginTop: 30,
    marginBottom: 0,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10
  },
  renderedListRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
}));
