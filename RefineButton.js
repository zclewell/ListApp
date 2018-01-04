import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style'

export default class RefineButton extends React.Component {
  _toggle() {
    this.setState({enabled: !this.state.enabled})
  }

  render() {
    this.state = {enabled: true}
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
        <TouchableOpacity onPress={function() {console.log(section); this._toggle()}}>
          <Text style={[styles.RefineButton,{backgroundColor: this.state.enabled? color: 'white', borderColor: color, borderWidth: 3}]}>{section}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
