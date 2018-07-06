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
export default class App extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const users = await ajax.fetchUsers();
    this.setState({users:users.articles});
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          News Wire
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Image source={{ uri: item.urlToImage }}
                    style={{ height: 150, width: IMAGE_SIZE }}
                    borderRadius={5}/>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.email}>{item.description}</Text>
            <Text style={styles.date}>{moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>
            <Text style={styles.email}>{item.source.name}</Text>
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
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal:10
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    padding:7,
    borderRadius: 5,
    borderWidth:0.8,
    borderColor:'rgba(50, 149, 240,1)',
    marginBottom:10,
  },
  name: {
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});