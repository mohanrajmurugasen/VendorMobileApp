// @flow
import React, { useState } from 'react';
import { View, Text, ScrollView, Image,RefreshControl, TouchableOpacity, TouchableHighlight } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Pers from "../img/person1.jpeg";
import Vaccin from "../img/vaccin.jpg"
import { Sortby } from './sortby';
import { VendorLocation } from './vendorLocation';
import { VendorService } from './vendorService';

let list = require('./vendors.json')

export function Vendors() {
    const [lists, setList] = useState(list)
    const [sort ,setsort] = useState(false)
    const [location ,setlocation] = useState(false)
    const [service ,setservice] = useState(false)

  return (
    <View style={{backgroundColor:"#c5c3c373",flex:1}}>

        <View style={{backgroundColor:"white",flexDirection:"row",justifyContent:"space-around",paddingVertical:15}}>
            <TouchableOpacity onPress={() => setservice(!service)}>
                <View style={{flexDirection:"row",borderWidth:0.5,borderColor:"gray",borderRadius:20,padding:7}}>
                    <Text style={{fontSize:18}}>Services</Text>
                    <Ionic name="chevron-down-sharp" style={{fontSize:22,paddingLeft:2,color:"#9a9b9c"}} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setlocation(!location)}>
                <View style={{flexDirection:"row",borderWidth:0.5,borderColor:"gray",borderRadius:20,padding:7}}>
                    <Ionic name="location" style={{fontSize:22,paddingRight:2,color:"#99a2a9"}} />
                    <Text style={{fontSize:18}}>Location</Text>
                    <Ionic name="chevron-down-sharp" style={{fontSize:22,paddingLeft:2,color:"#9a9b9c"}} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setsort(!sort)}
            >
                <View style={{flexDirection:"row",borderWidth:0.5,borderColor:"gray",borderRadius:20,padding:7}}>
                    <Text style={{fontSize:18}}>Sort by</Text>
                    <Ionic name="chevron-down-sharp" style={{fontSize:22,paddingLeft:2,color:"#9a9b9c"}} />
                </View>
            </TouchableOpacity>
        </View>

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
            <Text style={{fontSize:18,textAlign:"center"}}>Top vendor recommended by Kaodim</Text>
            {lists.map(item => (
            <View key={item.name} style={{backgroundColor:"white",borderRadius:5,paddingHorizontal:20,paddingVertical:10,marginTop:15}}>
                <View style={{flexDirection:"row",width:'80%'}}>
                <Image source={Pers} style={{width:80,height:80,borderRadius:100}} />
                <View style={{paddingLeft:10,paddingBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:"700"}}>{item.name}</Text>
                    <View style={{flexDirection:"row",paddingVertical:10}}>
                        <Text style={{fontSize:18,color:"#6a6a6a"}}>5.0</Text>
                        <View style={{flexDirection:"row",paddingHorizontal:10}}>
                            <Ionic name="star" style={{fontSize:18,color:"rgb(245, 166, 35)"}} />
                            <Ionic name="star" style={{fontSize:18,color:"rgb(245, 166, 35)"}} />
                            <Ionic name="star" style={{fontSize:18,color:"rgb(245, 166, 35)"}} />
                            <Ionic name="star" style={{fontSize:18,color:"rgb(245, 166, 35)"}} />
                            <Ionic name="star" style={{fontSize:18,color:"rgb(245, 166, 35)"}} />
                        </View>
                        <Text style={{fontSize:18,color:"#6a6a6a"}}>{item.rating}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Ionic name="location" style={{fontSize:22,color:"#6a6a6a"}} />
                        <Text style={{fontSize:18}}>{item.location}</Text>
                    </View>   
                </View>
                </View>
                <View style={{flexDirection:"row",backgroundColor:"#c5c3c373",width:200,paddingHorizontal:5,paddingVertical:2,borderRadius:5,marginVertical:10}}>
                    <Image source={Vaccin} style={{width:25,height:25,borderRadius:100}} />
                    <Text style={{fontSize:17,paddingLeft:5}}>Covid-19 Vaccinated</Text>
                </View>
                <View style={{backgroundColor:"gray",height:0.5,marginVertical:10}}></View>
                <View style={{flexDirection:"row",marginVertical:10,width:'90%'}}>
                    <Ionic name="md-barcode-outline" style={{fontSize:22}} />
                    <Text style={{fontSize:18,paddingLeft:5}}>{item.work}</Text>
                </View>
                <Text style={{fontSize:18,color:"#6a6a6a"}}>{item.date}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingVertical:10}}>
                    <TouchableHighlight 
                    style={{
                        backgroundColor:"#c5c3c373",
                        paddingHorizontal:5,
                        paddingVertical:12,
                        borderRadius:5,
                        margin:10,
                        width:'50%'
                    }}
                    >
                        <View style={{flexDirection:"row"}}>
                            <Ionic name="ios-download-outline" style={{fontSize:22}} />
                            <Text style={{fontSize:17}}>Share profile</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                    style={{
                        backgroundColor:"#2692ee",
                        paddingHorizontal:5,
                        paddingVertical:12,
                        borderRadius:5,
                        margin:10,
                        width:'50%'
                    }}
                    >
                        <Text style={{fontSize:17,color:"white"}}>Request vendor</Text>
                    </TouchableHighlight>
                </View>
            </View>
            ))}
            </View>
        </ScrollView>

                {
                    sort ? (
                        <Sortby display="flex" />
                    ) : null
                }
                {
                    location ? (
                        <VendorLocation display="flex" />
                    ) : null
                }
                {
                    service ? (
                        <VendorService display="flex" />
                    ) : null
                }

    </View>
  );
};