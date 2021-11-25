import React,{ Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';

class Categories extends Component {
    render() {
        return(
            <View style={{height: 300,
            width:250,
            marginRight:20,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingBottom:30
            }}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri} style={{
                    height: null,width: null,
                    resizeMode: "cover",
                    flex: 1
                    }} />
                </View>
                <View style={{flex:1,alignItems:"center",paddingTop:10}}>
                    <Text style={{fontSize:17,color:"black"}}>{this.props.name}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:16}}>{this.props.txt}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:16}}>{this.props.txt1}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:16}}>{this.props.txt2}</Text>
                    <Text style={{color:"#4a4a4a",fontSize:16}}>{this.props.txt3}</Text>
                </View>
            </View>
        )
    }
}

export default Categories;