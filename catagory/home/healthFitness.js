import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hel1 from "../../img/health/hel7.jpeg";
import Hel2 from "../../img/health/hel8.jpeg";
import Hel3 from "../../img/health/hel9.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function HealthFitness(props) {
    const [rates,Setrates] = useState([
        {
            healthId: Hel1,
            healthName: "Yoga Lessons",
            healthContent: "Experience a safe, peaceful haven away from the stresses of day-to-day life with our professional yoga instructors.",
        },
        {
            healthId: Hel2,
            healthName: "Personal Training",
            healthContent: "Be the best version of yourself with our professional personal trainers where fitness and health is our priority.",
        },
        {
            healthId: Hel3,
            healthName: "Swimming Training",
            healthContent: "Experience the best swimming classes available for infants, children, teens, and adults with our experts.",
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
                    { rates.map(health => (
                        <View key={health.healthContent} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', health)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={health.healthId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{health.healthName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{health.healthContent}</Text>
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