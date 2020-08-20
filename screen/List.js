import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
class List extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>3</Text>
          </View>
        </Swiper>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>3</Text>
          </View>
        </Swiper>
      </SafeAreaView>
    );
  }
}
export default List;
