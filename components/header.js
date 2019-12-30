import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCoffee,
  faBars,
  faSearch,
  faBell,
  faBookmark,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flex: 1,
            height: 30,
            backgroundColor: '#fff'
          }}
        />
        <View
          style={{
            flex: 1,
            height: 60,
            flexDirection: 'row',
            backgroundColor: '#fff'
          }}
        >
          <View style={styles.topBarIcons}>
            <FontAwesomeIcon
              size={22}
              icon={faBars}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </View>
          <View
            style={{
              flex: 3,
              alignItems: 'stretch',
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 16 }}>Knowledge Woledge</Text>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBarIcons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;
