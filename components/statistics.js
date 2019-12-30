import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Header from './header';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
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
              <Text>"In difficult times, fashion is always outrageous."</Text>
              <Text style={{ fontStyle: 'italic', color: '#ccc' }}>
                Elsa Schiaparelli
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Statistics;
