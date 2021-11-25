import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Of1 from "../../img/events/office/of1.jpeg";
import Of2 from "../../img/events/office/of2.jpeg";
import Of3 from "../../img/events/office/of3.jpeg";
import Of4 from "../../img/events/office/of4.jpeg";
import Of5 from "../../img/events/office/of5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function OfficeEvents(props) {
    const [rates,Setrates] = useState([
        {
            officeId: Of1,
            officeName: "Office / Commercial Cleaning",
            officeContent: "Get top rated cleaning companies for your office & commercial cleaning.",
        },
        {
            officeId: Of2,
            officeName: "Carpet Cleaning Service",
            officeContent: "Get money back if unsatisfied with our carpet cleaning service.",
        },
        {
            officeId: Of3,
            officeName: "Catering",
            officeContent: "Get outstanding cuisines to treat your guests to a great experience with our professional caterers to design your event menu.",
        },
        {
            officeId: Of4,
            officeName: "Printing/Design",
            officeContent: "There is no limit to what you can get designed and printed with our leading designers.",
        },
        {
            officeId: Of5,
            officeName: "Photobooth",
            officeContent: "Capture moments with the best photobooth rental for all weddings, event or party with our photobooth experts.",
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
                    { rates.map(officeevent => (
                        <View key={officeevent.officeName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', officeevent)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={officeevent.officeId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{officeevent.officeName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{officeevent.officeContent}</Text>
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