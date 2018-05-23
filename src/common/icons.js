import React from 'react';

import IceColors from './ice-colors';
import AwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const AddIcon = props => {
  return (
    <MaterialIcons
      name="add-circle"
      size={30}
      color={IceColors.iceGreen}
      onPress={props.onPress}
    />
  );
};

export const UpdateIcon = props => {
  return <AwesomeIcons name="edit" size={15} color="white" onPress={props.onPress} />;
};

export const CloseIcon = props => {
  return (
    <AwesomeIcons
      onPress={props.onPress}
      style={{ fontSize: 18, padding: 10, alignSelf: 'flex-end' }}
      name="close"
      color="red"
    />
  );
};

export const RemoveIcon = props => {
  return (
    <MaterialIcons
      name="remove-circle-outline"
      size={15}
      color={'red'}
      onPress={props.onPress}
    />
  );
};

export const InfoIcon = props => {
  return (
    <AwesomeIcons
      name="info"
      size={15}
      color={IceColors.iceGreen}
      onPress={props.onPress}
    />
  );
};
