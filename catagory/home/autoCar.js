import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Ac1 from "../../img/auto/ac1.jpeg";

export default function AutoCar(props) {
    const [auto,Setrates] = useState([
        {
            moveId: Ac1,
            moveName: "Windscreen Replacement",
            moveContent: "Trust our glass experts for windshield replacement services for all vehicle makes and models",
        }
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
                    { auto.map(car => (
                        <View key={car.moveName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', car)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={car.moveId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{car.moveName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{car.moveContent}</Text>
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