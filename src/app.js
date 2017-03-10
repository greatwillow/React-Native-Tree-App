'use strict';

import React, {
    Component
} from 'react'

import {
  Navigator,
  View
} from 'react-native';

import {createStore, applyMiddlesware} from 'redux';
import {Provider} from 'react-redux';
import {Actions, Scene, Router} from 'react-native-router-flux';

//COMPONENTS
import Drawer from './components/drawer/drawer';
import MainHeader from './common/main-header';
import PageCrewBuilder from './components/page-crew-builder/page-crew-builder';
//import PageTallyInputter from './components/page-tally-inputter/page-tally-inputter';
import PageBlockBuilder from './components/page-block-builder/page-block-builder';
import PageSeasonContext from './components/page-season-context/page-season-context';
import PageDayContext from './components/page-day-context/page-day-context';



export default class App extends Component {
  render() {
    return(

      <Router>
        <Scene key="drawer" component={Drawer}>
          <Scene key="root">
            <Scene key="seasonContext" component={PageSeasonContext} hideNavBar={true} navBar={MainHeader} initial={true}/>
            <Scene key="dayContext" component={PageDayContext} hideNavBar={true} navBar={MainHeader}/>
            <Scene key="crewBuilder" component={PageCrewBuilder} hideNavBar={true} navBar={MainHeader}/>
            {/* <Scene key="tallyInputter" component={PageTallyInputter} hideNavBar={true} navBar={MainHeader}/> */}
            <Scene key="blockBuilder" component={PageBlockBuilder} hideNavBar={true} navBar={MainHeader}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
