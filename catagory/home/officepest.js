import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Pe1 from "../../img/office/pest/pe1.jpeg";
import Pe2 from "../../img/office/pest/pe2.jpeg";
import Pe3 from "../../img/office/pest/pe3.jpeg";
import Pe4 from "../../img/office/pest/pe4.jpeg";
import Pe5 from "../../img/office/pest/pe5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function OfficePest(props) {
    const [rates,Setrates] = useState([
        {
            officeId: Pe1,
            officeName: "Pest Control - Flush Out Treatment",
            officeContent: "Keep your home protected with our pest control experts, get flush out treatment to rid your home of unwanted pests.",
        },
        {
            officeId: Pe2,
            officeName: "Pest Control - Bed Bugs",
            officeContent: "Keep bed bugs out and your home protected with our experienced experts.",
        },
        {
            officeId: Pe3,
            officeName: "General Pest Control (6 visits)",
            officeContent: "Keep pests out and your home protected with our experienced experts up to 6 visits yearly.",
        },
        {
            officeId: Pe4,
            officeName: "Pest Control - Termite Baiting",
            officeContent: "Keep termites out and your home protected with our experienced experts.",
        },
        {
            officeId: Pe5,
            officeName: "General Pest Control (1 visit)",
            officeContent: "Keep pests out and your home protected with our experienced experts.",
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
                    { rates.map(pest => (
                        <View key={pest.officeName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', pest)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={pest.officeId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{pest.officeName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{pest.officeContent}</Text>
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