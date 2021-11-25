import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Se1 from "../../img/security/se1.jpeg";
import Se2 from "../../img/security/se2.jpeg";
import Se3 from "../../img/security/se3.jpeg";
import Se4 from "../../img/security/se4.jpeg";
import Se5 from "../../img/security/se5.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Security(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Se1,
            cleanName: "Gate / Autogate Repair",
            cleanContent: "Kaodim Protection against property damage and theft when you hire our handyman.",
        },
        {
            cleanId: Se2,
            cleanName: "Gate / Autogate Installation",
            cleanContent: "Install a brand new gate and the perfect gate system with our certified experts.",
        },
        {
            cleanId: Se3,
            cleanName: "Ironwork",
            cleanContent: "Let our experts coordinate your projects with the best quality products and services.",
        },
        {
            cleanId: Se4,
            cleanName: "Lock Installation / Repair",
            cleanContent: "Get matched with up to 5 quotes after you request for our locksmiths.",
        },
        {
            cleanId: Se5,
            cleanName: "Alarm & CCTV",
            cleanContent: "Enhance the security of your property with alarm and CCTV installation for a safer and secured home.",
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
                    { rates.map(security => (
                        <View key={security.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', security)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={security.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{security.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{security.cleanContent}</Text>
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