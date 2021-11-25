// @flow
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

export function VendorService(props) {
    const [display ,setdisplay] = useState(props.display)
    const [checked, setChecked] = React.useState('');
    const [service ,setservice] = useState([
        {name: "House Cleaning (with Basic Sanitization)"},
        {name: "Aircond Servicing"},
        {name: "Plumbing Repair"},
        {name: "Electrical Wiring / Power Point"},
        {name: "Local Moving - Budget Lorry"}
    ])

    const change = () => {       
        setdisplay("none")
    }

  return (
    <View style={{display: display,backgroundColor:"white",marginHorizontal:10,marginBottom:10,borderRadius:5,borderColor:"gray",borderWidth:0.5}}>
        <Text style={styles.txt1}>Services</Text>
        <Text onPress={change} style={{fontSize:20,textAlign:"right",marginTop:-38,color:"#2692ee",marginRight:15}}>close</Text>
        <View style={{backgroundColor:"gray",height:0.5,marginVertical:15}}></View>
        <View style={{paddingHorizontal:15}}>
            <View style={{flexDirection:"row",backgroundColor:"#c5c3c373",paddingLeft:10}}>
                <Ionic name="search" style={{fontSize:20,marginTop:14,color:"#99a2a9"}} />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Search for a device"
                    returnKeyType= {'next'}
                    autoCapitalize= "none"
                    autoCorrect= {false}
                />
            </View>
            <View style={{paddingVertical:15}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>
                Popular service types
                </Text>
                { service.map(item => (
                    <View key={item.name} style={{flexDirection:"row",paddingVertical:10,width:'90%'}}> 
                        <RadioButton
                            value="first"
                            status={ checked === item.name ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(item.name)}
                        />
                        <Text style={{fontSize:18,marginTop:3}}>{item.name}</Text>
                    </View>
                )) }
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        padding: 10,
        color:"#2692ee"
    },
    txt1: {
        fontSize: 20,
        padding:10,
        textAlign:"center"
    },
    textInputStyle: {
        height: 50,
        fontSize: 16,
        paddingLeft:10,
        color: 'black',
      },
})