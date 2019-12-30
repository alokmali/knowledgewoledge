import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { posts } from '../dataStore/data';

class Home extends Component {
  savePost = async postId => {
    try {
      let savedPosts = new Array();
      const retrivedPosts = await AsyncStorage.getItem('savedPosts');
      //console.log(retrivedPosts);
      if (retrivedPosts !== null) {
        savedPosts = retrivedPosts;
        console.log(retrivedPosts);
      }
      savedPosts.push(postId);
      //console.log(savedPosts);
      try {
        await AsyncStorage.setItem('savedPosts', savedPosts);
        //console.log(savedPosts);
      } catch (e) {
        // saving error
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      alert(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          {posts.map((post, index) => {
            return (
              <TouchableHighlight
                key={post.id}
                onPress={() =>
                  this.props.navigation.navigate('PostDetail', {
                    postId: post.id,
                    headerTitle: post.headerTitle
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: '#fff',
                    marginTop: 5,
                    marginBottom: 10,
                    marginLeft: 15,
                    marginRight: 15,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                  }}
                >
                  <View
                    style={{
                      flex: 1
                    }}
                  >
                    <Image
                      style={{
                        height: 200,
                        resizeMode: 'cover',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                      }}
                      source={{
                        uri: post.image
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      padding: 10
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                      {post.title}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{post.description}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 10
                    }}
                  >
                    <TouchableHighlight
                      color='#1e89f4'
                      style={styles.submit}
                      onPress={() => this.savePost(post.id)}
                    >
                      <Text style={styles.submitText}>Save for Later</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column'
  },
  icon: {
    width: 24,
    height: 24
  },
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1e89f4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});

export default Home;
