import { Dimensions, StyleSheet } from 'react-native';

import IceColors from './ice-colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default (commonStyles = StyleSheet.create({
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
  crudSubListHeader: {
    backgroundColor: IceColors.iceDarkGray,
    width: 4 * (deviceWidth / 6),
    height: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5
  },
  crudList: {
    margin: 10,
    backgroundColor: IceColors.iceDarkGray,
    width: 6 * (deviceWidth / 8),
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 10
  },
  crudSubList: {
    margin: 10,
    backgroundColor: IceColors.iceDarkGray,
    width: 4 * (deviceWidth / 6),
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 5
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
  },
  expandingPanel: {
    margin: 10,
    backgroundColor: IceColors.iceDarkGray,
    width: 6 * (deviceWidth / 8),
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 10
  },
  modalBackgroundYesTransparent: {
    height: deviceHeight * 1.5,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalBackgroundNoTransparent: {
    height: deviceHeight * 1.5,
    justifyContent: 'flex-start',
    backgroundColor: '#f5fcff'
  },
  modalInnerContainerTransparentStyle: {
    backgroundColor: IceColors.iceGreen,
    padding: 10,
    width: deviceWidth / 6 * 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
}));
