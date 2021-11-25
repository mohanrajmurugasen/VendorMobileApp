import React,{ Component } from "react";
import { View, Text, Alert, Image, TouchableHighlight, ScrollView } from 'react-native';

class Category extends Component {
    
    render() {
        return(
            <View style={{height: 170,width:150,marginLeft:20}}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri} style={{
                    height: null,width: null,
                    resizeMode: "cover",
                    flex: 1
                    }} />
                </View>
                <View style={{flex:1,alignItems:"center",paddingTop:10}}>
                    <Text style={{color:"#4a4a4a"}}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export default Category;