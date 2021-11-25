import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Of1 from "../../img/events/office/of1.jpeg";
import Of2 from "../../img/events/office/of2.jpeg";
import Of3 from "../../img/events/office/of3.jpeg";
import Of4 from "../../img/events/office/of4.jpeg";
import Of5 from "../../img/events/office/of5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function EventOffice(props) {
    const [rates,Setrates] = useState([
        {
            eventId: Of1,
            eventName: "Office / Commercial Cleaning",
            eventContent: "Get top rated cleaning companies for your office & commercial cleaning.",
        },
        {
            eventId: Of2,
            eventName: "Carpet Cleaning Service",
            eventContent: "Get money back if unsatisfied with our carpet cleaning service.",
        },
        {
            eventId: Of3,
            eventName: "Catering",
            eventContent: "Get outstanding cuisines to treat your guests to a great experience with our professional caterers to design your event menu.",
        },
        {
            eventId: Of4,
            eventName: "Printing/Design",
            eventContent: "There is no limit to what you can get designed and printed with our leading designers.",
        },
        {
            eventId: Of5,
            eventName: "Photobooth",
            eventContent: "Capture moments with the best photobooth rental for all weddings, event or party with our photobooth experts.",
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
                    { rates.map(eventoffice => (
                        <View key={eventoffice.eventName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', eventoffice)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={eventoffice.eventId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{eventoffice.eventName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{eventoffice.eventContent}</Text>
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