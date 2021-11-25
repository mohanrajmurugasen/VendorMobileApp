import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Ac1 from "../../img/Ac/ac1.jpeg";
import Ac2 from "../../img/Ac/ac2.jpeg";
import Ac3 from "../../img/Ac/ac3.jpeg";
import Ac4 from "../../img/Ac/ac4.jpeg";
import { useNavigation } from '@react-navigation/native';
 
export default function Aircond(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Ac1,
            cleanName: "Aircond Repair",
            cleanContent: "Get quotes within 24 hours when you book our aircond repair experts.",
        },
        {
            cleanId: Ac2,
            cleanName: "Aircond Installation",
            cleanContent: "Get aircond installation & receive protection up to RM50,000.",
        },
        {
            cleanId: Ac3,
            cleanName: "Aircond Supply & Installation",
            cleanContent: "Get aircond supplied and installed to your doorstep",
        },
        {
            cleanId: Ac4,
            cleanName: "Aircond Servicing",
            cleanContent: "Get a reservice if unsatisfied with our aircond chemical wash.",
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
                    { rates.map(aircond => (
                        <View key={aircond.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', aircond)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={aircond.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{aircond.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{aircond.cleanContent}</Text>
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