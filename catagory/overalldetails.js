import React from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons';

export default function OverAllDetails({ navigation,route }) {
    let data = route.params;
    return(
        <ScrollView
        refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="#EBEBEB"
              title="Loading..."
              colors={['#2692ee']}
              progressBackgroundColor="#EBEBEB"
            />
            }
        >
            <View style={{backgroundColor:"white"}}>
                <View style={{marginHorizontal:12,marginVertical:10,marginBottom:15}}>
                    <TouchableOpacity onPress={()=>navigation.pop()} style={{marginTop:8}}>
                        <Ionic name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <View>
                    <Text style={{textAlign:"center",marginTop:-30,fontSize:18}}>{data.cleanName}{data.eventName}{data.officeName}{data.healthName}{data.moveName}</Text>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Where do you need it?</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",
                    backgroundColor:"#66666630",
                    marginHorizontal:15,
                    paddingLeft:15,
                    borderRadius:30,
                    marginBottom:15
                    }}>
                        <Ionic name="search" size={25} style={{marginTop:12,color:"#666"}} />
                        <TextInput
                        placeholder="search"
                        style={{paddingLeft:10,fontSize:20,color:"black"}}
                        />
                </View>
                <View style={{height:0.5,backgroundColor:"gray"}}></View> 
            </View>
        </ScrollView>
    )
}