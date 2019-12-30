import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { Platform, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./components/home";
import Contact from "./components/contact";

const WIDTH = Dimensions.get("window").width;
const RouteConfigs = {
  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  }
};
const DrawerNavigatorConfig = {
  drawerWidth: WIDTH * 0.75,
  drawerType: "both",
  initialRouteName: "Home"
};
const DrawerNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig
);

const Root = createStackNavigator(
  {
    Main: { screen: DrawerNavigator }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "My first App"
    })
  }
);

const Stacks = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return <Stacks />;
  }
}

AIzaSyBkJe02jD7Asnyjh - D4x84m2LJRUPwWrUI;

return (
  <View
    style={{
      flex: 1
    }}
  >
    <Header handleClick={this.toggleDrawer} />
    <View
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          marginLeft: 15,
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 23 }}>Galaxy Weblinks LTD.</Text>
        <Text style={{ fontSize: 17 }}>304, Bansi Trade Center, Palasia</Text>
        <Text style={{ fontSize: 17 }}>Indore, Madhya Pradesh 452001</Text>
        <Text style={{ fontSize: 17 }}>Phone : 0731-2525251</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%"
        }}
      >
        <MapView
          initialRegion={{
            latitude: 22.721244,
            longitude: 75.883018,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{
            flex: 1
          }}
        >
          <Marker
            coordinate={{ latitude: 22.721244, longitude: 75.883018 }}
            title={"Bansi Trade Center"}
            description={"Indore, Madhya Pradesh, India"}
          />
        </MapView>
      </View>
    </View>
  </View>
);
