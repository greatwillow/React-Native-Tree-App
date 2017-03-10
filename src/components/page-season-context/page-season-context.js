import React, {
  Component
} from 'react'

import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
  //SELECT ALL
  plantersAll,
  requestKeysAll,
  blocksAll,
  contractsAll,
  //SELECT INSTANCE
  plantersSelectedInstance,
  requestKeysSelectedInstance,
  contractsSelectedInstance,
  blocksSelectedInstance,
  //BLOCK RELATIONS SELECTORS
  requestKeysOfBlockSelector,
  //CONTRACT RELATIONS SELECTORS
  blocksOfContractSelector,
} from '../../selectors/selectors'

import {
  assignHeaderTitle,
  //Planter
  addPlanter,
  removePlanter,
  updatePlanter,
  //Request Key
  addRequestKey,
  removeRequestKey,
  updateRequestKey,
  //Block
  addBlock,
  removeBlock,
  updateBlock,
  //Contract
  addContract,
  removeContract,
  updateContract,
  //Planter Relations

  //Request Key Relations

  //Block Relations
  addRequestKeyToBlock,
  removeRequestKeyFromBlock,
  //Contract Relations
  addBlockToContract,
  removeBlockFromContract,
  //Date Relations

  //Set Selected
  setSelectedPlanterId,
  setSelectedContractId,
  setSelectedBlockId,
  setSelectedRequestKeyId,
} from '../../actions/actions'

import * as Animatable from 'react-native-animatable'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import commonStyles from '../../common/styles'

import MainHeader from '../../common/main-header'
import CrudList from '../../common/crud-list'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class SeasonContext extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.assignHeaderTitle('Season Context');
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Animatable.View animation="fadeIn">
        <MainHeader />
          <Image source={require('../../images/tree-path.jpg')} style={{flex: 1, bottom: 0, width: deviceWidth, height: (deviceHeight*7)/8, resizeMode: 'cover'}}>
            <ScrollView>
                <CrudList
                    {...this.props}
                    style = {[commonStyles.crudListHeader, {marginTop: 100}]}
                    textName = 'Planter'
                    listAll = {this.props.plantersAll}
                    addFunction = {this.props.addPlanter}
                    updateFunction = {this.props.updatePlanter}
                    removeFunction = {this.props.removePlanter}
                    setSelectedElementIdFunction = {this.props.setSelectedPlanterId}
                    subListAll = {this.props.contractsAll}
                    //subListChosen = {this.props.requestKeysOfBlockSelector}
                />
                <CrudList
                    {...this.props}
                    style = {commonStyles.crudListHeader}
                    textName = 'Contract'
                    listAll = {this.props.contractsAll}
                    addFunction = {this.props.addContract}
                    updateFunction = {this.props.updateContract}
                    removeFunction = {this.props.removeContract}
                    addElementToRelationshipFunction = {this.props.addBlockToContract}
                    removeElementFromRelationshipFunction = {this.props.removeBlockFromContract}
                    setSelectedElementIdFunction = {this.props.setSelectedContractId}
                    subListAll = {this.props.blocksAll}
                    subListChosen = {this.props.blocksOfContractSelector}
                />
                <CrudList
                    {...this.props}
                    style = {commonStyles.crudListHeader}
                    textName = 'Block'
                    listAll = {this.props.blocksAll}
                    addFunction = {this.props.addBlock}
                    updateFunction = {this.props.updateBlock}
                    removeFunction = {this.props.removeBlock}
                    addElementToRelationshipFunction = {this.props.addRequestKeyToBlock}
                    removeElementFromRelationshipFunction = {this.props.removeRequestKeyFromBlock}
                    setSelectedElementIdFunction = {this.props.setSelectedBlockId}
                    subListAll = {this.props.requestKeysAll}
                    subListChosen = {this.props.requestKeysOfBlockSelector}
                />
                <CrudList
                    {...this.props}
                    style = {commonStyles.crudListHeader}
                    textName = 'Request Key'
                    listAll = {this.props.requestKeysAll}
                    addFunction = {this.props.addRequestKey}
                    updateFunction = {this.props.updateRequestKey}
                    removeFunction = {this.props.removeRequestKey}
                    setSelectedElementIdFunction = {this.props.setSelectedRequestKeyId}
                    subListAll = {this.props.requestKeysAll}
                    //subListChosen = {this.props.requestKeysOfBlockSelector}
                />
            </ScrollView>
          </Image>
        </Animatable.View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
    //SELECT ALL
    plantersAll: plantersAll(state),
    requestKeysAll: requestKeysAll(state),
    blocksAll: blocksAll(state),
    contractsAll: contractsAll(state),
    //SELECT INSTANCE
    plantersSelectedInstance: plantersSelectedInstance(state),
    requestKeysSelectedInstance: requestKeysSelectedInstance(state),
    blocksSelectedInstance: blocksSelectedInstance(state),
    contractsSelectedInstance: contractsSelectedInstance(state),
    //BLOCK RELATIONS SELECTORS
    requestKeysOfBlockSelector: requestKeysOfBlockSelector(state),
    //CONTRACT RELATIONS SELECTORS
    blocksOfContractSelector: blocksOfContractSelector(state),

    //SELECTED
    selected_planter: state.selected_planter,
    selected_contract: state.selected_contract,
    selected_block: state.selected_block,
    selected_request_key: state.selected_request_key,
    selected_tally_date: state.selected_tally_date,
  })

const mapDispatchToProps = dispatch => bindActionCreators({
  assignHeaderTitle,
  //Planter
  addPlanter,
  removePlanter,
  updatePlanter,
  //Request Key
  addRequestKey,
  removeRequestKey,
  updateRequestKey,
  //Block
  addBlock,
  removeBlock,
  updateBlock,
  //Contract
  addContract,
  removeContract,
  updateContract,
  //Planter Relations

  //Request Key Relations

  //Block Relations
  addRequestKeyToBlock,
  removeRequestKeyFromBlock,
  //Contract Relations
  addBlockToContract,
  removeBlockFromContract,
  //Date Relations

  //Set Selected
  setSelectedPlanterId,
  setSelectedContractId,
  setSelectedBlockId,
  setSelectedRequestKeyId,
}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(SeasonContext);
