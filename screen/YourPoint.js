//import 'babel-polyfill';

import React from 'react';
import {Dimensions, Text, SafeAreaView, View, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Component} from 'react';
const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};
class YourPoint extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View>
            <Text style={{fontSize: 16, padding: 12, marginLeft: 230}}>
              ProfileName : ชื่อ-สกุล
            </Text>
            <Text style={{fontSize: 24, padding: 12}}>Your Point : 5,996</Text>
            <Text style={{fontSize: 24, padding: 12}}>
              PointChart per Month
            </Text>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel="P:"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#000',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text style={{fontSize: 24, padding: 12}}>PointChart per Year</Text>
            <LineChart
              data={{
                labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
                datasets: [
                  {
                    data: [
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel="P:"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'red',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default YourPoint;
