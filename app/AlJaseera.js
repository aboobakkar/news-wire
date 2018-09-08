// App.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import moment from 'moment';
import ajax from './service/FetchData';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_SIZE = SCREEN_WIDTH-40;
export default class Home extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const users = await ajax.fetchUsers('aljaseera');
    this.setState({users:users.articles});
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Al Jaseera
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Image source={{ uri: item.urlToImage }}
                    style={{ height: 150, width: IMAGE_SIZE }}
                    borderRadius={5}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.horizontalHolder}>
              <Text style={styles.source}>Source:{item.source.name}</Text>
              <Text style={styles.date}>{moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            </View>
          </View>
          }
          keyExtractor={item => item.publishedAt}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal:10
  },
  h2text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '900',
  },
  horizontalHolder:{
    borderTopWidth:0.6,
    borderTopColor:'rgba(51, 51, 51, 1)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  flatview: {
    justifyContent: 'center',
    padding:5,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'rgba(50, 149, 240,1)',
    marginBottom:10,
  },
  title: {
    fontSize: 15,
    fontWeight:'900',
    color:'rgba(0,0,0,1)',
  },
  description: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize:12,
    fontWeight:'400',
    marginBottom:5
  },
  source:{
    fontSize:12,
    color:'rgba(140,140,140,1)',
  },
  date:{
    fontSize:12,
    color:'#e67e22',
  }
  
});