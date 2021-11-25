import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

class LearnCategory extends Component {
    render() {
        return(
            <View key={this.props.id}>
                <View style={{padding:20,flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{fontSize:19}}>{this.props.name}</Text> 
                    <Ionic name="chevron-forward" style={{fontSize:20,marginTop:3,color:"#6a6a6a"}} />
                </View>
                <View style={{height:0.5,backgroundColor:"gray"}}></View>
            </View>
        )
    }
}

export default LearnCategory;