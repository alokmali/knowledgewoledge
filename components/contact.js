import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class Contact extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              marginLeft: 15,
              marginBottom: 15,
              marginTop: 15
            }}
          >
            <Text style={{ fontSize: 23 }}>Galaxy Weblinks LTD.</Text>
            <Text style={{ fontSize: 17 }}>
              304, Bansi Trade Center, Palasia
            </Text>
            <Text style={{ fontSize: 17 }}>Indore, Madhya Pradesh 452001</Text>
            <Text style={{ fontSize: 17 }}>Phone : 0731-2525251</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              height: 350
            }}
          >
            <MapView
              initialRegion={{
                latitude: 22.721244,
                longitude: 75.883018,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              style={StyleSheet.absoluteFillObject}
            >
              <Marker
                coordinate={{ latitude: 22.721244, longitude: 75.883018 }}
                title={'Bansi Trade Center'}
                description={'Indore, Madhya Pradesh, India'}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;
