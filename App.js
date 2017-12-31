import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'
import ListItem from './ListItem'

const defaultSettings = require('./default.json')
const colorDict = defaultSettings.defaultColorDict
const list = defaultSettings.demoList

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item}) => <ListItem entry={item} dict={colorDict}/>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
