import React from 'react';
import { View, Text,Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Img from "../img/thumb.jpg";
import { useNavigation } from '@react-navigation/native';

export default function Empty(props) {
    const navigation = useNavigation()
    return(
        <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image source={Img} style={{width:250,height:250}} />
            <Text style={{fontSize:20,paddingVertical:20,textAlign:"center"}}>Sign up or login to view your inbox messages</Text>
            <TouchableHighlight
            underlayColor="#0f63ab"
            onPress={()=>navigation.navigate('Login')}
            style={{
                backgroundColor:"#2692ee",
                paddingHorizontal:15,
                paddingVertical:10,
                borderRadius: 6,
            
            }}
            >
                <Text style={{fontSize:20,color:"white"}}>Sign up or login with Kaodim</Text>
            </TouchableHighlight>
        </View>
    )
}