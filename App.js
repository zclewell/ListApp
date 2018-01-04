import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'
import ListItem from './ListItem'
import RefineButton from './RefineButton'

const defaultSettings = require('./default.json')
const colorDict = defaultSettings.defaultColorDict
const list = defaultSettings.demoList
var categories = new Set()


export default class App extends React.Component {
  render() {
    for (curr in list) {
      categories.add(list[curr].Section);
    }
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
            data={Array.from(categories)}
            renderItem={({item}) => <RefineButton section={item} dict={colorDict}/>}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}