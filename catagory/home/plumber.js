import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hpl1 from "../../img/hpl1.jpeg";
import Hpl2 from "../../img/hpl2.jpeg";
import Hpl3 from "../../img/hpl3.jpeg";
import Hpl4 from "../../img/hpl4.jpeg";
import Hpl5 from "../../img/hpl5.jpeg";
import Hpl6 from "../../img/hpl6.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Plumber(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Hpl1,
            cleanName: "Water Heater Installation",
            cleanContent: "Get one of the lowest water heater installation prices in the market.",
        },
        {
            cleanId: Hpl2,
            cleanName: "Water Heater Repair",
            cleanContent: "Fix your water heater problems and pay securely with KaodimPay.",
        },
        {
            cleanId: Hpl3,
            cleanName: "Water Heater Supply & Installation",
            cleanContent: "Get water heater supplied and installed to your doorstep",
        },
        {
            cleanId: Hpl4,
            cleanName: "Plumbing Repair",
            cleanContent: "Book plumbing repair services by experts & get money back if unsatisfied.",
        },
        {
            cleanId: Hpl5,
            cleanName: "Waterproofing Repair",
            cleanContent: "Book our waterproofing repair services by our Kaodim experts.",
        },
        {
            cleanId: Hpl6,
            cleanName: "Waterproofing Installation",
            cleanContent: "Get a reservice if unsatisfied with our waterproofing installation service.",
        },
        {
            cleanId: Hpl1,
            cleanName: "plumbing Installation",
            cleanContent: "Get free protection coverage for damage and theft by hiring our certified plumbers.",
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
                    { rates.map(plumbs => (
                        <View key={plumbs.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', plumbs)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={plumbs.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{plumbs.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{plumbs.cleanContent}</Text>
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