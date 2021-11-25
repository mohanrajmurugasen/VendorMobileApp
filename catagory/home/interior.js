import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import In1 from "../../img/interior/in1.jpeg";
import In2 from "../../img/interior/in2.jpeg";
import In3 from "../../img/interior/in3.jpeg";
import In4 from "../../img/interior/in4.jpeg";
import In5 from "../../img/interior/in5.jpeg";
import In6 from "../../img/interior/in6.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function Interior(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: In1,
            cleanName: "Curtain & Drapes Making and Installation",
            cleanContent: "Enjoy free Kaodim Protection coverage against damage for curtain & drapes service.",
        },
        {
            cleanId: In2,
            cleanName: "Wallpaper Supply / Installation",
            cleanContent: "",
        },
        {
            cleanId: In3,
            cleanName: "Feature Wall Painting",
            cleanContent: "Make your space stand out with our feature painting inclusive of paint and labor.",
        },
        {
            cleanId: In4,
            cleanName: "Interior Design Consultancy",
            cleanContent: "Spruce up your home with our highly qualified and talented interior designers to give your space a little new twist.",
        },
        {
            cleanId: In5,
            cleanName: "Painting - Labor & Paint Supply",
            cleanContent: "Get High-quality Nippon paint at one fixed price inclusive of paint and labor.",
        },
        {
            cleanId: In6,
            cleanName: "Painting - Labor Only",
            cleanContent: "Hire our verified painters for guaranteed satisfaction or get a reservice.",
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
                    { rates.map(interior => (
                        <View key={interior.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', interior)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={interior.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{interior.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{interior.cleanContent}</Text>
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