import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'
import ListItem from './ListItem'
import RefineButton from './RefineButton'

// require('./Functions')
import Functions from './Functions'

const defaultSettings = require('./default.json')
const colorDict = defaultSettings.defaultColorDict
const list = defaultSettings.demoList
var categorySet = new Set()


export default class App extends React.Component {
  render() {
    for (curr in list) {
      categorySet.add(list[curr].Section);
    }
    var categoryArr = Array.from(categorySet)
    categoryArr.sort()
    list.sort(Functions.doubleCompare('Section', 'Name'))

    return (
      <View style={styles.container}>
        <View style={{height: '90%'}}>
          <FlatList
            data={list}
            renderItem={({item}) => <ListItem entry={item} dict={colorDict}/>}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View>
          <FlatList
            data={categoryArr}
            renderItem={({item}) => <RefineButton section={item} dict={colorDict}/>}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}