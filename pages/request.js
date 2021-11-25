import React from 'react';
import { View, Text,Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Img from "../img/thumb.jpg";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Empty from './empty';

function Request(props) {
    const navigation = useNavigation()
    if(props.count) {
        return(
            <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:22,paddingVertical:20,textAlign:"center",fontWeight:"bold"}}>Welcome to Vendor Request page</Text>
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
        data: state.testers
    }
}

export default connect(connecting,null)(Request);