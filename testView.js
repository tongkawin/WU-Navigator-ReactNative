import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  DatePickerAndroid,
  Button,
} from 'react-native';

class Event extends Component {
  constructor() {
    super();
    this.state = {iyear: 2020, imonth: 3, iday: 9};
  }
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
    fetch('http://172.16.9.198:80/User_Project/show_mision.php', {
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
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{marginTop: 20, flex: 1, alignItems: 'center'}}>
            <Button
              title="Calendar"
              onPress={async () => {
                const {
                  action,
                  year,
                  month,
                  day,
                } = await DatePickerAndroid.open({date: new Date()});
                if (action === DatePickerAndroid.dateSetAction) {
                  this.setState({iyear: year, imonth: month, iday: day});
                }
                if (action === DatePickerAndroid.dismissedAction) {
                  console.log('Dismissed');
                }
              }}
            />
            <Text>
              Date {this.state.iday} {this.state.imonth} {this.state.iyear}
            </Text>
          </View>
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
      </SafeAreaView>
    );
  }
}
export default Event;
