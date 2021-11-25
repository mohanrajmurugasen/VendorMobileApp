import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Of1 from "../../img/events/entertainment/ee1.jpeg";
import Of3 from "../../img/events/entertainment/ee5.jpeg";
import Of4 from "../../img/events/entertainment/ee6.jpeg";
import Of5 from "../../img/events/entertainment/ee8.jpeg";
import Of6 from "../../img/events/entertainment/ee9.jpeg";

import { useNavigation } from '@react-navigation/native';

export default function EventBeauty(props) {
    const [rates,Setrates] = useState([
        {
            eventId: Of1,
            eventName: "Event Hair & Makeup",
            eventContent: "Style your hair and makeup for weddings, events or photo-shoots with our best beauty gurus in town.",
        },
        {
            eventId: Of3,
            eventName: "Mobile Manicure & Pedicure",
            eventContent: "Delight your fingers and feets with our nail experts ranging from gel, acrylics, paraffin dips, and nail art.",
        },
        {
            eventId: Of4,
            eventName: "Lash Lift & Tint",
            eventContent: "Experience the best professional eyelash enhancement service - lash lift and tint with our experts.",
        },
        {
            eventId: Of5,
            eventName: "Lash Extensions",
            eventContent: "Experience the best professional eyelash enhancement service - lash extensions with our experts.",
        },
        {
            eventId: Of6,
            eventName: "Facial Spa",
            eventContent: "Discover the luxuries of a day facial spa in the comfort of your home with our licensed spa professionals",
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
                    { rates.map(beauty => (
                        <View key={beauty.eventName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', beauty)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={beauty.eventId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{beauty.eventName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{beauty.eventContent}</Text>
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