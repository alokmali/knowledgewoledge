import React from 'react';
import { View, Platform, Dimensions, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/home';
import Contact from '../components/contact';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faArrowLeft,
  faHome,
  faPhone,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

import Profile from '../components/profile';
import Statistics from '../components/statistics';
import PostDetail from '../components/postDetail';

const WIDTH = Dimensions.get('window').width;

const HomeNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#1e89f4'
        },
        headerTitle: 'Knowledge Woledge',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1
        },
        headerLeft: (
          <View style={{ paddingLeft: 13 }}>
            <FontAwesomeIcon
              size={25}
              color='#fff'
              icon={faBars}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: <View />
      };
    }
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: Contact
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#1e89f4'
        },
        headerTitle: 'Contact',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1
        },
        headerLeft: (
          <View style={{ paddingLeft: 13 }}>
            <FontAwesomeIcon
              size={25}
              color='#fff'
              icon={faBars}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: <View />
      };
    }
  }
);

const StatisticsNavigator = createStackNavigator(
  {
    Statistics: Statistics
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#1e89f4'
        },
        headerTitle: 'Statistics',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1
        },
        headerLeft: (
          <View style={{ paddingLeft: 13 }}>
            <FontAwesomeIcon
              size={25}
              color='#fff'
              icon={faBars}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: <View />
      };
    }
  }
);

const DetailNavigator = createStackNavigator(
  {
    PostDetail: PostDetail
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#1e89f4'
        },
        headerTitle: () => {
          return (
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                flex: 1,
                fontSize: 20
              }}
            >
              {navigation.getParam('headerTitle')}
            </Text>
          );
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1
        },
        headerLeft: (
          <View style={{ paddingLeft: 13 }}>
            <FontAwesomeIcon
              size={25}
              color='#fff'
              icon={faArrowLeft}
              onPress={() => navigation.goBack(null)}
            />
          </View>
        ),
        headerRight: <View />
      };
    }
  }
);

const RouteConfigs = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <FontAwesomeIcon size={20} color={tintColor} icon={faHome} />
      )
    }
  },
  Contact: {
    screen: ContactNavigator,
    navigationOptions: {
      drawerLabel: 'Contact',
      drawerIcon: ({ tintColor }) => (
        <FontAwesomeIcon size={20} color={tintColor} icon={faPhone} />
      )
    }
  },
  Statistics: {
    screen: StatisticsNavigator,
    navigationOptions: {
      drawerLabel: 'Statistics',
      drawerIcon: ({ tintColor }) => (
        <FontAwesomeIcon size={20} color={tintColor} icon={faChartLine} />
      )
    }
  },
  Detail: {
    screen: DetailNavigator,
    navigationOptions: {
      drawerLabel: () => {
        return null;
      }
    }
  }
};
const DrawerNavigatorConfig = {
  drawerWidth: WIDTH * 0.75,
  drawerType: 'both',
  initialRouteName: 'Home'
};
const DrawerNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig
);

const Stacks = createAppContainer(DrawerNavigator);

export default Stacks;
