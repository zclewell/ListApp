import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import styles from './style'

export default class RefineButton extends React.Component {
  render() {
    var section = this.props.section
    var dict = this.props.dict
    var color = '#ffffffff'
    if (dict) {
      if (dict[section]) {
        color = dict[section]
      }
    }
    return (
      <View style={styles.RefineButtonBox}>
        <Text style={[styles.RefineButton,{backgroundColor: color}]}>{section}</Text>
      </View>
    );
  }
}
