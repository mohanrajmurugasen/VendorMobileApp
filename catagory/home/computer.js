import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Se9 from "../../img/security/se9.jpeg";
import Se10 from "../../img/security/se10.jpeg";
import Se11 from "../../img/security/se11.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Computer(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Se9,
            cleanName: "Data Recovery",
            cleanContent: "Get the best storage experts to recover your files from all types of drive brand and storage medium.",
        },
        {
            cleanId: Se10,
            cleanName: "PC & Mac Hardware / Software Repair",
            cleanContent: "Get a wide range of quality computer repair services for desktops, laptops, smart phones and tablets.",
        },
        {
            cleanId: Se11,
            cleanName: "PC & Mac Hardware / Software Update",
            cleanContent: "Get a wide range of software computer update services for desktops, laptops, smartphones and tablets.",
        },
    ])
    const navigation = useNavigation()
    return(
        <View style={{backgroundColor:"white",paddingBottom:20}}>
                <View style={{marginHorizontal:10,marginVertical:10,marginBottom:15}}>
                    <TouchableOpacity onPress={()=>navigation.pop()} style={{marginTop:8}}>
                        <Ionic name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <Text style={{textAlign:"center",marginTop:-26,fontSize:17,marginLeft:30}}>{props.name}</Text>
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
                    { rates.map(computer => (
                        <View key={computer.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', computer)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={computer.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{computer.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{computer.cleanContent}</Text>
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