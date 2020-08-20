import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 12,
    margin: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              borderRadius: 15,
              backgroundColor: 'white',
              marginHorizontal: 10,
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == 'android' ? 10 : null,
            }}>
            <Icon name="location-sharp" size={20} />
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={(location) => this.setState({location})}
              placeholder="ค้นหาตำแหน่งที่ตั้งหรือที่อยู่"
              placeholderTextColor="gray"
              style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
            />
          </View>
          <View style={{flex: 0.999999}}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 8.642587,
                longitude: 99.897298,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
