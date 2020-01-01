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
import { NavigationEvents } from 'react-navigation';
//import AsyncStorage from '@react-native-community/async-storage';
import { posts } from '../dataStore/data';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = { savedPosts: [] };
  }

  getSavedPosts() {
    AsyncStorage.getItem('savedStories', (err, result) => {
      if (result !== null) {
        savedStories = JSON.parse(result);
        let savedPosts = posts.filter(post => {
          if (savedStories.indexOf(post.id) > -1) {
            return post;
          }
        });
        //console.log(savedStories);
        this.setState({ savedPosts: savedPosts });
      }
    });
  }

  removedfromSaved = postId => {
    AsyncStorage.getItem('savedStories', (err, result) => {
      if (result !== null) {
        savedStories = JSON.parse(result);
        let savedPosts = this.state.savedPosts.filter(function(post) {
          return post.id != postId;
        });
        savedStories = savedStories.filter(function(id) {
          return id != postId;
        });
        AsyncStorage.setItem(
          'savedStories',
          JSON.stringify(savedStories),
          () => {
            this.setState({ savedPosts });
          }
        );
      }
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <NavigationEvents onDidFocus={() => this.getSavedPosts()} />
          {this.state.savedPosts.length > 0 ? (
            this.state.savedPosts.map((post, index) => {
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
                        style={styles.saved}
                        onPress={() => this.removedfromSaved(post.id)}
                      >
                        <Text style={styles.savedText}>Remove from list</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })
          ) : (
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'center', fontSize: 17 }}>
                No Saved post available.
              </Text>
            </View>
          )}
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
  saved: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#909090',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  savedText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});
export default Saved;
