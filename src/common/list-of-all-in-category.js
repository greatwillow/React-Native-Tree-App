import React, {
  Component,
} from 'react'

import {
  Text,
  View,
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  addRequestKeyToBlock,
  addBlockToContract,
} from '../actions/actions'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IceColors from './ice-colors'
import commonStyles from './styles'

class ListOfAllInCategory extends Component {
  constructor(props) {
    super(props)
    this.onPressFunction = this.onPressFunction.bind(this);
    this.state = {
      listed_element_id: 0,
      listed_element_name: this.props.listed_element_name,
      related_element_id: this.props.related_element_id,
      related_element_name: this.props.related_element_name,
      addElementToRelationshipFunction: null,
    }
  }

/*
  componentDidMount() {
    const r_name = this.props.related_element_name;
    const l_name = this.props.listed_element_name;
    if(r_name === 'Block' && l_name === 'Request Key') {
      this.setState({addElementToRelationshipFunction: this.props.addRequestKeyToBlock});
    } else if(r_name === 'Contract' && l_name === 'Block') {
      this.setState({addElementToRelationshipFunction: this.props.addBlockToContract});
    } else if(r_name ==='Tally Date' && l_name === 'Contract') {
      this.setState({addElementToRelationshipFunction: this.props.addContractToTallyDate})
    } else {
      this.setState({addElementToRelationshipFunction: this.props.addRequestKeyToBlock});
    }
  }
*/



  onPressFunction(element) {
    this.setState({
      listed_element_id: element.id,
      listed_element_name: element.name,
      related_element_id: this.props.related_element_id,
    },() => {
      this.props.addElementToRelationshipFunction({
        listed_element_id: this.state.listed_element_id,
        listed_element_name: this.state.listed_element_name,
        related_element_id: this.state.related_element_id,
      })
    }
    )
  }
  render() {
    if((this.props.list !== undefined) && (this.props.list !== null)) {
      return <View>
              {this.props.list.map(element =>
                <View key={element.id} style={commonStyles.renderedListRow}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View>
                      <Text style={{color: 'black'}}>{element.name}</Text>
                    </View>
                  </View>
                  <View  style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <View>
                      <MaterialIcons
                        name='add-circle'
                        size={20}
                        color={IceColors.iceGreen}
                        onPress={() => {this.onPressFunction(element)}}
                        />
                    </View>
                  </View>
                </View>
              )}
          </View>
    } else if ((this.props.list !== undefined) && (this.props.list !== null)) {
      return <View><Text>Add Something</Text></View>
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  contractsForDateExist: contractsForDateExist(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addRequestKeyToBlock,
  addBlockToContract,
}, dispatch)

export default connect(null, mapDispatchToProps)(ListOfAllInCategory);
