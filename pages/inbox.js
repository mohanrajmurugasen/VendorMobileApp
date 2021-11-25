import React, { useEffect, useState } from 'react';
import { View, Text,Image, TouchableOpacity, TouchableHighlight, ScrollView, Button } from 'react-native';
import Img from "../img/thumb.jpg";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Empty from './empty';
import axios from 'axios';

function Inbox(props) {
    const navigation = useNavigation()
    if(props.count) {
        return( 
            <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:22,paddingVertical:20,textAlign:"center",fontWeight:"bold"}}>Welcome to Vendor Inbox page</Text>
            </View>
            
        )
    }
    else {
        return(
            <Empty />
        )
    }
}

const connecting = (state) => {
    return{
        count: state.counter.count,
        data: state.testers.name
    }
}

export default connect(connecting,null)(Inbox);