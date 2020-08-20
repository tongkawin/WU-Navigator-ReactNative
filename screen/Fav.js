import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Fav extends Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch('http://172.16.156.140:3001/locate');
    const testTable = await response.json();
    this.setState({data: testTable});
  };
  componentWillMount() {
    this.fetchData();
  }
  constructor() {
    super();

    this.state = {
      location: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://172.16.156.140:80/User_Project/user_registration.php', {
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
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  DeleteStudentRecord = () => {
    fetch('http://172.16.156.140:80/User_Project/DeleteStudentRecord.php', {
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
        <View style={styles.StyleSheet}>
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
                  flex: 1,
                  padding: 12,
                  borderRadius: 30,
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="INSERT"
                  color="#78186c"
                  width="100%"
                  onPress={this.UserRegistrationFunction}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 30,
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="DELETE"
                  color="#78186c"
                  width="100%"
                  onPress={this.DeleteStudentRecord}
                />
              </View>
              <View style={{padding: 18}}>
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View
                      style={{
                        backgroundColor: '#cc6699',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Location: {item.location}
                        </Text>
                      </Text>
                    </View>
                  )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
