import React, { Component, useEffect } from 'react';
import { Text, View, ScrollView, Image, AsyncStorage } from 'react-native';
import { postsDetails } from '../dataStore/data';

const PostDetail = props => {
  let details = [];
  const navigation = props.navigation;

  /* useEffect(() => {
     setTimeout(() => {
      console.log(this.scroller);
      this.scroller.current.scrollTo({ x: 10, y: 10, animated: false });
    }, 1);
    this._retrieveData();
  }, []);

  _retrieveData = async () => {
    try {
      let value = await AsyncStorage.getItem('pid');
      console.log(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };*/

  postsDetails.map(post => {
    if (post.postId == navigation.state.params.postId) {
      details = post.postDetails;
    }
  });
  return (
    <ScrollView>
      <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 15 }}>
        {details.map((detail, index) => {
          return detail.type == 'text' ? (
            detail.isHeader ? (
              <Text
                key={index}
                style={{
                  fontSize: 18,
                  letterSpacing: 0.6,
                  lineHeight: 23,
                  marginTop: 10,
                  fontWeight: 'bold'
                }}
              >
                {detail.content}
              </Text>
            ) : (
              <Text
                key={index}
                style={{
                  fontSize: 16,
                  letterSpacing: 0.5,
                  lineHeight: 23,
                  marginTop: 10
                }}
              >
                {detail.content}
              </Text>
            )
          ) : (
            <Image
              key={index}
              style={{
                height: 250,
                resizeMode: 'contain',
                flex: 1
              }}
              source={{
                uri: detail.path
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PostDetail;
