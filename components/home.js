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
import { NavigationEvents } from 'react-navigation';
import { posts } from '../dataStore/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { savedStories: [] };
  }

  getSavedPosts() {
    AsyncStorage.getItem('savedStories', (err, result) => {
      if (result !== null) {
        let savedStories = JSON.parse(result);
        this.setState({ savedStories: savedStories });
      }
    });
  }

  savePost = postId => {
    let savedStories = [];
    AsyncStorage.getItem('savedStories', (err, result) => {
      if (result !== null) {
        savedStories = JSON.parse(result);
      }
      if (savedStories.indexOf(postId) <= -1) {
        savedStories.push(postId);
      }
      AsyncStorage.setItem('savedStories', JSON.stringify(savedStories), () => {
        this.setState({ savedStories });
      });
    });
  };

  removedfromSaved = postId => {
    let savedStories = this.state.savedStories.filter(function(ele) {
      return ele != postId;
    });
    AsyncStorage.setItem('savedStories', JSON.stringify(savedStories), () => {
      this.setState({ savedStories });
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <NavigationEvents onDidFocus={() => this.getSavedPosts()} />
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
                    {this.state.savedStories.indexOf(post.id) > -1 ? (
                      <TouchableHighlight
                        color='#1e89f4'
                        style={styles.saved}
                        onPress={() => this.removedfromSaved(post.id)}
                      >
                        <Text style={styles.savedText}>Saved for Later</Text>
                      </TouchableHighlight>
                    ) : (
                      <TouchableHighlight
                        color='#1e89f4'
                        style={styles.save}
                        onPress={() => this.savePost(post.id)}
                      >
                        <Text style={styles.saveText}>Save for Later</Text>
                      </TouchableHighlight>
                    )}
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
  save: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1e89f4'
  },
  saved: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#909090',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  saveText: {
    color: '#1e89f4',
    textAlign: 'center',
    fontSize: 16
  },
  savedText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});

export default Home;
