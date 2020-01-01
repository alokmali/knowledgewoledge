import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 40, 50, 70, 80, 89],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5
};

const screenWidth = Dimensions.get('window').width;

class Statistics extends Component {
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
            <Text style={{ fontSize: 20 }}>Downloads</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              height: 350
            }}
          >
            <LineChart
              data={data}
              width={screenWidth}
              height={256}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          </View>
          <View
            style={{
              flex: 1,
              marginBottom: 15
            }}
          ></View>
        </View>
      </ScrollView>
    );
  }
}

export default Statistics;
