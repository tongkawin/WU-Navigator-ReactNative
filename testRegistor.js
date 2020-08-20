import React, {Component, useState} from 'react';
import {
  //StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Fav extends Component {
  /*componentWillMount(){
        this.startHeaderHeight = 60
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 40 + StatusBar.currentHeight
        }
    }*/
  constructor() {
    super();

    this.state = {
      location: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://172.16.157.96:80/User_Project/user_registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locate: this.state.location,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  DeleteStudentRecord = () => {
    fetch('http://172.16.157.96:80/User_Project/DeleteStudentRecord.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locate: this.state.location,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1 /*,borderWidth: 2,borderColor: "red"*/}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
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
              <View
                style={{
                  flexDirection: 'row',
                  padding: 12,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="SAVE"
                  color="#78186c"
                  onPress={this.UserRegistrationFunction}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 15,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="DELETE"
                  color="#78186c"
                  onPress={this.DeleteStudentRecord}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Fav;

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})*/
