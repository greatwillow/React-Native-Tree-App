'use strict';

import React, {
    Component
} from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'



import IceColors from '../../common/ice-colors'
//import TallyConditions from './tally-conditions2'
import PageSeasonContext from '../page-season-context/page-season-context'
import PageDayContext from '../page-day-context/page-day-context'


export default class CrewWindowSelector extends Component {
      constructor(props){
        super(props);
      }

      render() {

            {if(this.props.selectionMade==='option1'){
               return (
                 <View style={styles.container}>
                   <PageSeasonContext {...this.props}/>
                 </View>
               );
            }
              else if(this.props.selectionMade==='option2') {
                return (
                  <View>
                     <PageDayContext {...this.props} />
                  </View>

                );
            }
              else if(this.props.selectionMade==='option3') {
                return (
                 <View style={styles.container}>
                   <Text>Option 3</Text>
                 </View>
                );
            }
          }
    }
}


const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       flex: 1,
       alignItems: 'stretch',
       justifyContent: 'center'
   },
   wrapperContainer: {
     flex: 1
   },
   topBar: {
     height: 20,
     opacity: 0.2
   }
});
