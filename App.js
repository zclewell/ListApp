import React from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './style'
import ListItem from './ListItem'
import RefineButton from './RefineButton'

import Functions from './Functions'

const defaultSettings = require('./default.json')
const colorDict = defaultSettings.defaultColorDict
const list = defaultSettings.demoList
var categorySet = new Set()
var categoryArr

var selected = new Set()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { refresh: true }
    // var selected = this.state.selected
    for (curr in list) {
      categorySet.add(list[curr].Section)
      selected.add(list[curr].Section)
    }
    categoryArr = Array.from(categorySet)
    categoryArr.sort()
    list.sort(Functions.doubleCompare('Section', 'Name'))
  }

  _updateRefine(key) {
    if (selected.has(key)) {
      selected.delete(key)
    } else {
      selected.add(key)
    }
    console.log(selected)
    this.setState({ refresh: !this.state.refresh })
  }

  render() {
    console.log('call to render')
    return (
      <View style={styles.container}>
        <View style={{height: '90%'}}>
          <FlatList
            data={list}
            extraData={this.state.refresh}
            renderItem={({item}) => <ListItem entry={item} dict={colorDict} selected={selected}/>}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View>
          <FlatList
            style={{bottom: 0}}
            data={categoryArr}
            renderItem={({item}) => <RefineButton section={item} dict={colorDict} refineFunc={this._updateRefine.bind(this)}/>}
            keyExtractor={(item, index) => index}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}