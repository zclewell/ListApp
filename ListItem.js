import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'

export default class ListItem extends React.Component {
  render() {
    var entry = this.props.entry
    var dict = this.props.dict
    var color = '#ffffffff'
    if (dict) {
      if (dict[entry.Section]) {
        color = dict[entry.Section]
      }
    }
    return (
      <View style={styles.ListItem}>
        <Text style={[styles.ListItemSectionBox,{backgroundColor: color}]}>{entry.Section}</Text>
        <Text style={styles.ListItemNameBox}>{entry.Name}</Text>
      </View>
    );
  }
}
