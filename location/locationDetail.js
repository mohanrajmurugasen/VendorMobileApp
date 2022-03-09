import React from 'react';
import {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import LocationTab from './locationTab';
import Lock from '../img/lock.jpg';
import {Card} from 'react-native-shadow-cards';

export default function LocationDetail({navigation, route}) {
  let data = route.params;
  const [display, setdisplay] = useState('flex');
  const [display1, setdisplay1] = useState('none');
  const [bgColor, setBgColor] = useState('white');
  const [bgColor1, setBgColor1] = useState('#dad7d7');
  const [usernameInputTxt, setOne] = useState('');
  const [base, setbase] = useState('#2692ee');

  const change = () => {
    setdisplay('flex');
    setdisplay1('none');
    setBgColor('white');
    setBgColor1('#dad7d7');
  };

  const change1 = () => {
    setdisplay('none');
    setdisplay1('flex');
    setBgColor('#dad7d7');
    setBgColor1('white');
  };

  const validate = () => {
    let val = usernameInputTxt;
    let value = bgColor;
    if (value == 'white') {
      if (val == !null) {
        setbase('#2692ee');
      }
    } else {
      alert('Yes');
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
        <View style={{paddingBottom: 15}}>
          <Text style={[styles.txt1, styles.center]}>{data.name}</Text>
          <Text style={[styles.txt2, styles.center]}>
            12A, Jln Masjid Negeri, 11600 George Town, Pulau Pinang
          </Text>
        </View>
        <View style={{height: 1, backgroundColor: 'gray'}} />
        <Text style={styles.txt1}>Select your property type</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 3,
            justifyContent: 'space-evenly',
            backgroundColor: '#dad7d7',
            marginTop: 15,
            borderRadius: 8,
          }}>
          <TouchableHighlight
            style={{
              backgroundColor: bgColor,
              paddingHorizontal: 40,
              paddingVertical: 5,
              borderRadius: 4,
            }}
            underlayColor="#dad7d7"
            onPress={change}>
            <Text style={styles.tab}>Highrise</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              backgroundColor: bgColor1,
              paddingHorizontal: 40,
              paddingVertical: 5,
              borderRadius: 4,
            }}
            underlayColor="#dad7d7"
            onPress={change1}>
            <Text style={styles.tab}>Landed</Text>
          </TouchableHighlight>
        </View>

        <View style={{display: display, paddingTop: 15}}>
          <Text style={styles.txt2}>Building name</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
            value={data.name}
          />
          <Text style={styles.txt2}>Block and unit number</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={usernameInputTxt => setOne(usernameInputTxt)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 4,
            }}>
            <Text style={{fontSize: 20}}>This property has elevators</Text>
            {/* <CheckBox style={{marginTop:4}} /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 6,
            }}>
            <Text style={{fontSize: 20}}>Set as my primary location</Text>
            {/* <CheckBox style={{marginTop:4}} /> */}
          </View>
        </View>

        <View style={{display: display1, paddingTop: 15}}>
          <Text style={styles.txt2}>Street name</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.txt2}>House number</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 20}}>Set as my primary location</Text>
            {/* <CheckBox style={{marginTop:4}} /> */}
          </View>
        </View>

        <LocationTab />
      </ScrollView>
      <Card
        style={{
          paddingVertical: 11,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          width: '100%',
          borderColor: '#dcd9d9',
          borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={validate}
          style={{backgroundColor: base, paddingVertical: 8}}>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Save this location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            backgroundColor: '#dad7d7',
            paddingVertical: 8,
            marginTop: 7,
          }}>
          <Text style={{fontSize: 18, color: '#4a4a4a', textAlign: 'center'}}>
            Skip and add later
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  txt2: {
    fontSize: 18,
    color: '#4a4a4a',
  },
  txt1: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  center: {
    textAlign: 'center',
  },
  tab: {
    textAlign: 'center',
    fontSize: 20,
  },
  textInputStyle: {
    height: 60,
    fontSize: 18,
    paddingLeft: 10,
    color: 'black',
    borderColor: '#c3c0c0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 7,
  },
  checkbox: {
    alignSelf: 'center',
  },
});
