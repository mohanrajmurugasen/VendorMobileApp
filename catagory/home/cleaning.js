import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hc1 from "../../img/hc1.jpeg";
import Hc2 from "../../img/hc2.jpeg";
import Hc3 from "../../img/hc3.jpeg";
import Hc4 from "../../img/hc4.jpeg";
import Hc5 from "../../img/hc5.jpeg";
import Hc6 from "../../img/hc6.jpeg";
import Hc7 from "../../img/hc7.jpeg";
import Hc8 from "../../img/hc8.jpeg";
import Hc9 from "../../img/hc9.jpeg";
import Hc10 from "../../img/hc10.jpeg";
import Hc11 from "../../img/hc11.jpeg";
import Hc12 from "../../img/hc12.jpeg";
import Hc13 from "../../img/hc13.jpeg";
import Hc14 from "../../img/hc14.jpeg";
import Hc15 from "../../img/hc15.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Cleaning(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Hc1,
            cleanName: "Office / Commercial Cleaning",
            cleanContent: "Get top rated cleaning companies for your office & commercial cleaning.",
        },
        {
            cleanId: Hc2,
            cleanName: "Event / Party Cleanup",
            cleanContent: "Get cleaning experts for your next event/party cleanup.",
        },
        {
            cleanId: Hc3,
            cleanName: "Home Disinfection Service",
            cleanContent: "Get your premises professionally disinfected by our experts",
        },
        {
            cleanId: Hc4,
            cleanName: "Carpet Cleaning Service",
            cleanContent: "Get money back if unsatisfied with our carpet cleaning service.",
        },
        {
            cleanId: Hc5,
            cleanName: "Car Seat Sanitizing",
            cleanContent: "Get your car seat sanitizing booked, confirmed & guaranteed within minutes.",
        },
        {
            cleanId: Hc6,
            cleanName: "Car Disinfection",
            cleanContent: "Get your car disinfection service booked, confirmed & guaranteed within minutes.",
        },
        {
            cleanId: Hc7,
            cleanName: "House Cleaning (with Basic Sanitization)",
            cleanContent: "One-time/weekly house cleaning session available when you book on Kaodim",
        },
        {
            cleanId: Hc8,
            cleanName: "House Cleaning & Disinfection Service",
            cleanContent: "One-time house cleaning session available when you book on Kaodim and get your premises professionally disinfected by our experts for disinfection.",
        },
        {
            cleanId: Hc9,
            cleanName: "Commercial Disinfection",
            cleanContent: "Get your office space / commercial premises professionally disinfected by our experts",
        },
        {
            cleanId: Hc10,
            cleanName: "Post Renovation Cleaning",
            cleanContent: "Get your money back if unsatisfied with our post renovation cleaning.",
        },
        {
            cleanId: Hc11,
            cleanName: "Mattress Cleaning",
            cleanContent: "Quality mattress cleaning services done within hours on the same day.",
        },
        {
            cleanId: Hc12,
            cleanName: "Car Seat Cleaning",
            cleanContent: "Get your car seat cleaning bookings confirmed & guaranteed within minutes.",
        },
        {
            cleanId: Hc13,
            cleanName: "Deep Cleaning",
            cleanContent: "Get a reservice if unsatisfied with our deep cleaning services.",
        },
        {
            cleanId: Hc14,
            cleanName: "Sofa Cleaning",
            cleanContent: "Get quality sofa cleaning services done within hours in the same day.",
        },
        {
            cleanId: Hc15,
            cleanName: "Move In / Move Out Cleaning",
            cleanContent: "Book our move in/out cleaning service by our Kaodim experts.",
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
                    { rates.map(pusing => (
                        <View key={pusing.cleanId} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', pusing)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={pusing.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{pusing.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{pusing.cleanContent}</Text>
                                    </View>
                                </View>
                                <View style={{height:0.5,backgroundColor:"gray"}}></View>
                            </TouchableOpacity>
                        </View>
                    )) }
                    <View style={{height:50}}></View>
                </ScrollView>             
            </View>
    )
}