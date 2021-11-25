import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hw1 from "../../img/office/hard/hw1.jpeg";
import Hw2 from "../../img/office/hard/hw2.jpeg";
import Hw3 from "../../img/office/hard/hw3.jpeg";
import Hw4 from "../../img/office/hard/hw4.jpeg";
import Hw5 from "../../img/office/hard/hw5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function OfficeHardware(props) {
    const [rates,Setrates] = useState([
        {
            officeId: Hw1,
            officeName: "Broadband Internet",
            officeContent: "Get broadband internet installation services for a fast, reliable wireless Internet connection for your home or office.",
        },
        {
            officeId: Hw2,
            officeName: "Data Recovery",
            officeContent: "Get the best storage experts to recover your files from all types of drive brand and storage medium.",
        },
        {
            officeId: Hw3,
            officeName: "PC & Mac Hardware / Software Repair",
            officeContent: "Get a wide range of quality computer repair services for desktops, laptops, smart phones and tablets.",
        },
        {
            officeId: Hw4,
            officeName: "Networking - Installation / Configuration",
            officeContent: "Get fast and professional deployment of your wired/wireless network with our IT experts.",
        },
        {
            officeId: Hw5,
            officeName: "PC & Mac Hardware / Software Update",
            officeContent: "Get a wide range of software computer update services for desktops, laptops, smartphones and tablets.",
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
                    { rates.map(hard => (
                        <View key={hard.officeName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', hard)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={hard.officeId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{hard.officeName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{hard.officeContent}</Text>
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