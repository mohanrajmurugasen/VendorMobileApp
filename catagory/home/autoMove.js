import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Am1 from "../../img/auto/am1.jpeg";
import Am2 from "../../img/auto/am2.jpeg";
import Am3 from "../../img/auto/am3.jpeg";
import Am4 from "../../img/auto/am4.jpeg";

export default function AutoMove(props) {
    const [auto,Setrates] = useState([
        {
            moveId: Am1,
            moveName: "Local Moving - Pickup Truck",
            moveContent: "Make your moving hassle-free and easier at fixed price. Re-service guaranteed.",
        },
        {
            moveId: Am2,
            moveName: "Disposal Service",
            moveContent: "Dispose waste in an environmentally-friendly manner with our experts for a safe and dependable disposal.",
        },
        {
            moveId: Am3,
            moveName: "Local Moving - Premium All-In package",
            moveContent: "Hire premium movers for stress free moving. Free site visit, boxes, furniture disassembly/assembly, wrapping & insurance.",
        },
        {
            moveId: Am4,
            moveName: "Local Moving - Budget Lorry",
            moveContent: "Receive protection up to RM30,000 against property damage for local moving.",
        }
    ])
    const navigation = useNavigation()
    return(
        <View style={{backgroundColor:"white",paddingBottom:20}}>
                <View style={{marginHorizontal:12,marginVertical:10,marginBottom:15}}>
                    <TouchableOpacity onPress={()=>navigation.pop()} style={{marginTop:8}}>
                        <Ionic name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:"center",marginTop:-27,fontSize:18}}>{props.name}</Text>
                </View>
                <View style={{height:0.5,backgroundColor:"gray"}}></View>
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
                    <View style={{paddingHorizontal:15,paddingVertical:15}}>
                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{props.content}</Text>
                    </View>
                    <View style={{height:0.5,backgroundColor:"gray",marginHorizontal:15}}></View>
                    { auto.map(move => (
                        <View key={move.moveName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', move)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={move.moveId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{move.moveName}</Text>
                                        <Text style={{fontSize:18,color: "#6a6a6a"}}>{move.moveContent}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:"gray"}}></View>
                            </TouchableOpacity>
                        </View>
                    )) }
                    <View style={{height:120}}></View>
                </ScrollView>             
            </View>
    )
}