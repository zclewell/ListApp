import {StyleSheet} from 'react-native';
 
module.exports = StyleSheet.create({
	container: {
		top: '4%',
    // flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
	header: {
    paddingTop: 10,
    height:20,
    borderBottomColor: '#ff00ff',
    borderBottomWidth: 1,
  },
  ListItem: {
  	flexDirection: 'row',
  	flex: 1,
  	paddingTop: 5,
  	paddingRight: 5,
  	paddingLeft: 5,
  },
  RefineButtonBox: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  RefineButton: {
    padding: 10,
    borderRadius: 10,
  },
  ListItemSectionBox: {
  	padding: 10,
  	borderRadius: 10,
  	width: '25%',
  	textAlign: 'center'
  },
  ListItemNameBox: {
  	padding: 10
  }
});