'use strict';

import React, {
    Component,
} from 'react'

import {
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {DefaultRenderer} from 'react-native-router-flux'
import Drawer from 'react-native-drawer'

import DrawerControlPanel from './drawer-control-panel'

export default class App extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <DrawerControlPanel closeDrawer={this.closeDrawer} />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          this.setState({drawerOpen: false})
        }}
        acceptTap={true}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.3}
        panOpenMask={0}
        negotiatePan={false}
        >
      <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})
