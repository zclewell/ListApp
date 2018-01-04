import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'

var entry, dict, color, selected

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    entry = this.props.entry
    dict = this.props.dict
    selected = this.props.selected
    color = '#fff'
  }

  render() {
    if (dict) {
      if (dict[entry.Section]) {
        color = dict[entry.Section]
      } 
    }
    console.log(selected)
    if (selected.has(entry.Section) || !selected.size) {
    return (
      <View style={styles.ListItem}>
        <Text style={[styles.ListItemSectionBox,{backgroundColor: color}]}>{entry.Section}</Text>
        <Text style={styles.ListItemNameBox}>{entry.Name}</Text>
      </View>
    );
    } else {
      return null;
    }  
  }
}
