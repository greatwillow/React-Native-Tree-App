'use strict';

import React, {
    Component
} from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ListView
} from 'react-native'

import Form from 'react-native-form'
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form'

import IceColors from '../../common/ice-colors'

import Storage from 'react-native-storage'
//import storage from '../../common/storage'

var storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // expire time, default 1 day(1000 * 3600 * 24 secs)
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
})

// I suggest you have one(and only one) storage instance in global scope.

// for web
// window.storage = storage;

// for react native
global.storage = storage;



import DropDownPlanterSelect from './dropdown-planter-select'

storage.save({
    key: 'loginState',   // Note: Do not use underscore("_") in key!
    rawData: {
        from: 'some other site',
        userid: 'some userid',
        token: 'some token'
    },

    // if not specified, the defaultExpires will be applied instead.
    // if set to null, then it will never expires.
    expires: 1000 * 3600
});

const planters = []


export default class ConditionsTally extends Component {
  constructor(props) {
    super(props);
    this.state ={
      planterFirstName: 'Jane',
      planterLastName: 'Doe'
    }
  }


  renderList() {
    return planters.map((planter) => {
      return (
        <View key={planter.key}>
          <Text>{planter.planterFirstName+' '+planter.planterLastName}</Text>
        </View>
      );
    });
  }
  render(){
    return (
      <View>
        <View style={styles.formContainer}>
                <View>{this.renderList()}</View>
        <DropDownPlanterSelect {...this.props}/>
        </View>
        {console.log(this.state.planterName)}
        <TextInput
            style={{borderWidth: 2, borderColor: 'black', height: 40, width: 400}}
            placeholder={'First Name of Planter'}
            onChangeText={
              (text) => {
                this.setState({
              planterFirstName: text
            });
          }
        }
        />
        <TextInput
            style={{borderWidth: 2, borderColor: 'black', height: 40, width: 400}}
            placeholder={'Last Name of Planter'}
            autoCapitalize='words'
            onChangeText={
              (text) => {
                this.setState({
              planterLastName: text
            });
          }
        }
        onSubmitEditing={
          () => {
            {planters.push({
              key: this.state.planterFirstName+' '+this.state.planterLastName,
              planterFirstName: this.state.planterFirstName,
              planterLastName: this.state.planterLastName
              }

            )}
                      {console.log('Here we have planters: '+planters)}
                      {console.log(planters[0])}
                      {console.log(planters[1])}
                      {console.log(planters[2])}
                      {storage.save({
                          key: 'loginState',   // Note: Do not use underscore("_") in key!
                          rawData: {
                            planterFirstName: this.state.planterFirstName,
                            planterLastName: this.state.planterLastName
                          },

                          // if not specified, the defaultExpires will be applied instead.
                          // if set to null, then it will never expires.
                          expires: 1000 * 3600
                      });}

          }

        }
        />

        <GiftedForm
                formName='signupForm' // GiftedForm instances that use the same name will also share the same states

                openModal={(route) => {
                  navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
                }}

                clearOnClose={false} // delete the values of the form when unmounted

                defaults={{
                  /*
                  username: 'Farid',
                  'gender{M}': true,
                  password: 'abcdefg',
                  country: 'FR',
                  birthday: new Date(((new Date()).getFullYear() - 18)+''),
                  */
                }}

                validators={{
                  fullName: {
                    title: 'Full name',
                    validate: [{
                      validator: 'isLength',
                      arguments: [1, 23],
                      message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                    }]
                  }
                }}
              >
              <GiftedForm.SeparatorWidget />
<GiftedForm.TextInputWidget
  name='fullName' // mandatory
  title='Full name'

  placeholder='Marco Polo'
  clearButtonMode='while-editing'
/>

<GiftedForm.SubmitWidget
  title='Sign up'
  widgetStyles={{
    submitButton: {
      backgroundColor: 'green',
    }
  }}
  onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
    if (isValid === true) {
      // prepare object
      values.gender = values.gender[0];
      values.birthday = moment(values.birthday).format('YYYY-MM-DD');

      /* Implement the request to your server using values variable
      ** then you can do:
      ** postSubmit(); // disable the loader
      ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
      ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
      ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
      */
    }
  }}

/>

</GiftedForm>


        <View style={styles.formContainer}>
                <View>{this.renderList()}</View>
        </View>
      </View>

    );
  }
}

var styles = StyleSheet.create( {
  formContainer: {
    flex: 1,
    backgroundColor: IceColors.iceMediumGray
  },
  submitContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch'
  }
});
