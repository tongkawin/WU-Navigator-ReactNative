import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Button,
} from 'react-native';

class login_user extends Component {
  /*componentWillMount(){
        this.startHeaderHeight = 60
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }*/
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Login"
            color="#78186c"
            width="100%"
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default login_user;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
