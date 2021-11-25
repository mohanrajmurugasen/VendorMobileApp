import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Of1 from "../../img/office/off3.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function OfficeMove(props) {
    const [rates,Setrates] = useState([
        {
            officeId: Of1,
            officeName: "Long Distance Moving",
            officeContent: "Get a reservice or your money back if unsatisfied with our moving service.",
        },
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
                    { rates.map(move => (
                        <View key={move.officeName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', move)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={move.officeId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{move.officeName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{move.officeContent}</Text>
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