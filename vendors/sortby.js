// @flow
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Sortby(props) {
    const [display ,setdisplay] = useState(props.display)
    const [sort, setsort] = useState([
        {name: "Default: By average rating"},
        {name: "Recent job completed"},
        {name: "Most jobs completed"},
        {name: "Most ratings received"}
    ])

    const change = () => {       
        setdisplay("none")
    }

  return (
    <View style={{display: display,backgroundColor:"white",marginHorizontal:10,marginBottom:10,borderRadius:5,borderColor:"gray",borderWidth:0.5}}>
        <Text style={styles.txt1}>Sort vendors</Text>
        { sort.map(item => (
            <TouchableOpacity key={item.name}>
                <Text style={styles.txt}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )) }
        <TouchableOpacity
        onPress={change}
        >
            <Text style={styles.txt2}>Cancel</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        padding: 15,
        color:"#2692ee",
        borderBottomWidth: 0.5,
        borderColor: "gray",
        textAlign:"center"
    },
    txt1: {
        fontSize: 18,
        padding:15,
        color:"#6a6a6a",
        textAlign:"center",
        borderBottomWidth: 0.5,
        borderColor: "gray",
    },
    txt2: {
        fontSize: 18,
        padding:15,
        textAlign:"center",
        backgroundColor:"#dcd9d9",
        margin:10
    }
})