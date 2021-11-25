import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import Lock from "../img/lock.jpg"

export default function LocationTab() {
    const [[one,ones],setone] = useState(["red","white"])
    const [[two,twos],settwo] = useState(["white","black"])
    const [[three,threes,third],setthree] = useState(["white","black","none"])

    const changeOne = () => {
        setone(["red","white"])
        settwo(["white","black"])
        setthree(["white","black","none"])
    }
    const changeTwo = () => {
        setone(["white","black"])
        settwo(["red","white"])
        setthree(["white","black","none"])
    }
    const changeThree = () => {
        setone(["white","black"])
        settwo(["white","black"])
        setthree(["red","white","flex"])
    }
    return(
        <View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-evenly",
            marginTop:15,
        }}>
            <TouchableHighlight 
            style={{
                backgroundColor:one,
                paddingVertical:10,
                borderRadius:25,
                paddingHorizontal:25,
                borderColor:"#d4d0d0",
                borderWidth: 1
            }} 
            onPress={changeOne}
            underlayColor="#dad7d7" 
            >
                <Text style={{
                    textAlign:"center",       
                    fontSize:20,
                    color: ones
                }}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight 
            style={{
                backgroundColor:two,
                paddingVertical:10,
                borderRadius:25,
                paddingHorizontal:25,
                borderColor:"#d4d0d0",
                borderWidth: 1
            }} 
            onPress={changeTwo}
            underlayColor="#dad7d7"
            >
                <Text style={{
                    textAlign:"center",       
                    fontSize:20,
                    color: twos
                }}>Work</Text>
            </TouchableHighlight> 
            <TouchableHighlight 
            style={{
                backgroundColor:three,
                paddingVertical:10,
                borderRadius:25,
                paddingHorizontal:25,
                borderColor:"#d4d0d0",
                borderWidth: 1
            }} 
            onPress={changeThree}
            underlayColor="#dad7d7"
            >
                <Text style={{
                    textAlign:"center",       
                    fontSize:20,
                    color:threes
                }}>other</Text>
            </TouchableHighlight>            
        </View>
        <View style={{display:third}}>
            <Text style={styles.txt2}>Label</Text>
            <TextInput
                style={styles.textInputStyle}
                returnKeyType= {'next'}
                autoCapitalize= "none"
                autoCorrect= {false}
            /> 
        </View>
        <View style={{flexDirection:"row",width: 320,justifyContent:"space-between",marginTop:20,paddingBottom:20}}>
            <Image source={Lock} style={{width:40,height:40}} />
            <Text style={{fontSize:18,paddingLeft:10}}>Your exact location will only be shared with vendors once you’ve booked them</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 60,
        fontSize: 18,
        paddingLeft:10,
        color: 'black',
        borderColor: '#c3c0c0',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 7
    },
    txt2: {
        fontSize:18,
        color:"#4a4a4a",
        marginTop: 20
    },
})