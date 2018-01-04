import React from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';

import styles from './style'

var section, dict, color

export default class RefineButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {enabled: true}
  }

  _toggle() {
    this.setState({enabled: !this.state.enabled})
    this.props.refineFunc(this.props.section)
  }

  render() {
    section = this.props.section
    dict = this.props.dict
    color = 'white'

    if (dict) {
      if (dict[section]) {
        color = dict[section]
      }
    }

    return (
      <View style={styles.RefineButtonBox}>
        <TouchableOpacity onPress={this._toggle.bind(this)}>
          <Text extraData={this.state.enabled} style={[styles.RefineButton,{backgroundColor: this.state.enabled? color: 'white', borderColor: color}]}>{section}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
