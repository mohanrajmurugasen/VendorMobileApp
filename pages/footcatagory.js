import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';

class FootCategory extends Component {
    render() {
        return(
            <View style={{height: 230,
            width:250,
            backgroundColor:"white",
            marginRight:20,
            paddingBottom:20,
            paddingHorizontal:10,
            marginBottom:20
            }}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri} style={{
                    height: null,width: null,
                    resizeMode: "center",
                    flex: 1
                    }} />
                </View>
                <View style={{flex:1,alignItems:"center"}}>
                    <Text style={{color:"#4a4a4a",fontSize:18}}>{this.props.name}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:18}}>{this.props.name1}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:18}}>{this.props.name2}</Text>
                </View>
            </View>
        )
    }
}

export default FootCategory;