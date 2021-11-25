import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hl1 from "../../img/light/hl1.jpeg";
import Hl2 from "../../img/light/hl2.jpeg";
import Hl3 from "../../img/light/hl3.jpeg";
import Hl4 from "../../img/light/hl4.jpeg";
import Hl5 from "../../img/light/hl5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Lighting(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Hl1,
            cleanName: "Lighting Repair",
            cleanContent: "Get our lightning repair experts to help you with practical and aesthetic projects for your home.",
        },
        {
            cleanId: Hl2,
            cleanName: "Electrical Wiring / Power Point",
            cleanContent: "Get quotes within 24 hours when you book our wiring/power point service.",
        },
        {
            cleanId: Hl3,
            cleanName: "3 Phase Wiring",
            cleanContent: "Receive quotes within 24 hours for fast wiring services by experts.",
        },
        {
            cleanId: Hl4,
            cleanName: "Fan Installation",
            cleanContent: "Get ceiling fan installation service from our trusted installers for guaranteed satisfaction.",
        },
        {
            cleanId: Hl5,
            cleanName: "Lighting Installation",
            cleanContent: "Hire our service experts and get free protection coverage for damage and theft",
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
                    { rates.map(light => (
                        <View key={light.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', light)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={light.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{light.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{light.cleanContent}</Text>
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