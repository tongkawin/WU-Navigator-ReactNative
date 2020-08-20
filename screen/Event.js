import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
  DatePickerAndroid,
} from 'react-native';

class Event extends Component {
  /*componentWillMount(){
        this.startHeaderHeight = 60
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }*/
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch('http://172.16.156.140:3000/mision');
    const testTable = await response.json();
    this.setState({data: testTable});
  };
  componentWillMount() {
    this.fetchData();
  }
  constructor() {
    super();
    this.state = {
      ID_mision: '',
      Name_mision: '',
      locate_mision: '',
      time: '',
      point: '',
      iyear: 2020,
      imonth: 3,
      iday: 9,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 0.15,
            marginTop: 0,
            borderBottomWidth: 3,
            borderBottomLeftRadius: 25,
            borderColor: '#78186c',
            borderBottomRightRadius: 25,
          }}>
          <View style={{marginTop: 4, flex: 1, alignItems: 'center'}}>
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
        <View style={{flex: 1}}>
          <Text style={{flex: 1, fontSize: 24, marginTop: 10, marginLeft: 10}}>
            Mision -------------------------------------------------
          </Text>
          <ScrollView>
            <View style={{padding: 18}}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <ScrollView>
                    <View
                      style={{
                        backgroundColor: '#cc6699',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          ID: {item.ID_mision}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Mision: {item.Name_mision}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Location: {item.locate_mision}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Time: {item.time}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Point: {item.point}
                        </Text>
                      </Text>
                    </View>
                  </ScrollView>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Event;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
