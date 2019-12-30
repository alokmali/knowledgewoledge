import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTruck, faHome } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => <FontAwesomeIcon size={25} icon={faHome} />
  };
  render() {
    return (
      <View>
        <View
          style={{
            height: 80,
            backgroundColor: "#fff",
            marginTop: 15
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>SALE ENDS IN</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold" }}>00</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold" }}>30 </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ fontWeight: "bold" }}>46</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text>hrs</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text>min </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text>sec</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "#fff",
            marginTop: 15
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>FREE SHOPPING FOR YOU </Text>
            <Text>only till midnight </Text>
            <FontAwesomeIcon size={22} icon={faTruck} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 15
          }}
        >
          <Image
            style={{ height: 300, resizeMode: "cover" }}
            source={{
              uri:
                "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/8/51e07d97-7c05-4a51-8abd-f8e25f777d931567895886805-desk.giF"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 15
          }}
        >
          <Image
            style={{ height: 300, resizeMode: "stretch" }}
            source={{
              uri:
                "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/12/26/e4c85b7f-aa40-4195-abcb-942e734bbba81545795449887-ext-500-deal-strip.jpg"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "powderblue",
            marginTop: 15
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              style={{ height: 150, resizeMode: "stretch" }}
              source={{
                uri:
                  "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/12/fc18570d-5170-4c27-91f0-b10924e989201528778863097-17731eb0-063b-4e48-926c-c2771a19fc241527676512681-deal1.jpG"
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{ height: 150, resizeMode: "stretch" }}
              source={{
                uri:
                  "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/1/4145d01d-c994-4d45-a0dc-5affc231bf9b1564637713138-giftcard2.jpg"
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <Image
            style={{ height: 300, resizeMode: "stretch" }}
            source={{
              uri:
                "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/2/f69f4aba-2db3-4ebb-afb6-22f30a7759021564731936906-desktop-deal.jpG"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 15
          }}
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Image
              style={{
                height: 100,
                resizeMode: "center"
              }}
              source={{
                uri:
                  "http://versatiledigi.com/wp-content/uploads/line-separator-png-4.png"
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Text>"The joy of dressing is an art."</Text>
            <Text style={{ fontStyle: "italic", color: "#ccc" }}>
              John Galliano
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

export default Home;
