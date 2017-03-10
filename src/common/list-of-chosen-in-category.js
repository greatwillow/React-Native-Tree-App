import React from 'react'

import {
  Text,
  View,
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IceColors from './ice-colors'
import commonStyles from './styles'

export const ListOfChosenInCategory = (props) => {
    if(props.list !== undefined) {
        return <View>
                  {props.list.map(element =>
                    <View key={element.id} style={commonStyles.renderedListRow}>
                      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{color: 'black'}}>{element.name}</Text>
                        </View>
                      </View>
                      <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View>
                          <MaterialIcons
                            name='remove-circle-outline'
                            size={15}
                            color={'red'}
                            onPress={() => {
                                props.removeElementFromRelationshipFunction({
                                  listed_element_id: element.id,
                                  listed_element_name: element.name,
                                  related_element_id: props.related_element_id,
                                })
                            }}
                            />
                        </View>
                      </View>
                    </View>
                  )}
              </View>
    } else {
      return null;
    }
  }
