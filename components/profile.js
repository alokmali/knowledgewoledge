import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Button,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  static navigationOptions = {
    title: 'Profile',
    drawerIcon: ({ tintColor }) => <FontAwesomeIcon size={25} icon={faUser} />
  };
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', email: '', phone: '' };
  }
  componentDidMount() {
    this.retrieveData();
  }
  retrieveData = async () => {
    try {
      userProfile = await AsyncStorage.getItem('userProfile');
      if (userProfile !== null) {
        userProfile = JSON.parse(userProfile);
      }
    } catch (error) {
      userProfile = {
        firstname: 'Alok',
        lastname: 'Mali',
        email: 'alok.mali@galaxyweblinks.in',
        phone: '9907099143'
      };
    }
    this.setState({
      firstname: userProfile.firstname,
      lastname: userProfile.lastname,
      email: userProfile.email,
      phone: userProfile.phone
    });
  };
  saveProfile = async () => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(this.state));
      ToastAndroid.showWithGravityAndOffset(
        'Saved !',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        150
      );
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
      <ScrollView style={{}}>
        <NavigationEvents onWillFocus={() => this.retrieveData} />
        <Header handleClick={this.toggleDrawer} />
        <View
          style={{
            flex: 1,
            marginLeft: 15,
            marginTop: 15,
            justifyContent: 'flex-start'
          }}
        >
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18 }}>First Name</Text>
            <TextInput
              style={{ height: 30, fontSize: 17 }}
              placeholder='Type your first name here'
              onChangeText={firstname => this.setState({ firstname })}
              value={this.state.firstname}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18 }}>Last Name</Text>
            <TextInput
              style={{ height: 40, fontSize: 17 }}
              placeholder='Type your last name here'
              onChangeText={lastname => this.setState({ lastname })}
              value={this.state.lastname}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18 }}>Email</Text>
            <TextInput
              style={{ height: 40, fontSize: 17 }}
              placeholder='Type your email address here'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18 }}>Phone</Text>
            <TextInput
              keyboardType={'phone-pad'}
              style={{ height: 40, fontSize: 17 }}
              placeholder='Type your phone number here'
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
            />
          </View>
        </View>
        <View style={{ margin: 15 }}>
          <Button onPress={this.saveProfile} title='Save' />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 15
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Image
              style={{
                height: 100,
                resizeMode: 'center'
              }}
              source={{
                uri:
                  'http://versatiledigi.com/wp-content/uploads/line-separator-png-4.png'
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              "Everyday is a fashion show and the worlds is your runway."
            </Text>
            <Text style={{ fontStyle: 'italic', color: '#ccc' }}>
              Coco Chanel
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;
