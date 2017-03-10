'use strict';

import React, {
    Component
} from 'react'

import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';

export default class table1Tally extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellstyle="Basic" title="Basic"/>
            <Cell cellstyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="DISABLED">
            <Cell cellstyle="Basic" isDisabled={true} title="Basic"/>
            <Cell cellstyle="RightDetail" isDisabled={true} title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" isDisabled={true} title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" isDisabled={true} title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" isDisabled={true} title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="ACCESSORY">
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Basic"/>
            <Cell cellstyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="CUSTOMCELLS">
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Loading</Text>
            </CustomCell>
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Switch</Text>
              <Switch/>
            </CustomCell>
          </Section>
        </TableView>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
