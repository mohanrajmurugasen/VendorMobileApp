import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

function SearchCatagory({ navigation,route }) {
    let data = route.params;
        return(
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
                <View style={{backgroundColor:"white",paddingBottom:20}}>
                    <View style={{marginHorizontal:'3%'}}>
                        <View style={{flexDirection:"row",width: '90%'}}>
                            <TouchableOpacity onPress={()=>navigation.pop()} style={{marginTop:8}}>
                                <Ionic name="arrow-back" size={30} style={{paddingRight:10}} />
                            </TouchableOpacity>
                            <Text style={{fontSize:18,marginTop:10}}>{data.name}</Text>
                        </View>
                        <Text style={{textAlign:"center",fontSize:21,fontWeight:"bold",marginTop:5}}>Where do you need it?</Text>
                    </View>
                    <View style={{flexDirection:"row",
                        backgroundColor:"#66666630",
                        marginHorizontal:15,
                        paddingLeft:15,
                        borderRadius:30,
                        marginVertical:15
                        }}>
                            <Ionic name="search" size={25} style={{marginTop:12,color:"#666"}} />
                            <TextInput
                            placeholder="search"
                            style={{paddingLeft:10,fontSize:20,color:"black"}}
                            />
                    </View>  
                    <View style={{height:0.5,backgroundColor:"gray"}}></View>
                    <View>
                    <Text style={{marginHorizontal:20,fontSize:21,fontWeight:"bold",marginTop:5}}>Why Choose Kaodim {data.title}</Text>
                    <Text style={{marginHorizontal:20,fontSize:19,marginTop:5}}>
                        Enjoy great benefits when you book such as free reservice if unsatisfied, free protection coverage against damages or theft and more.
                        {data.content}
                    </Text>
                    </View>             
                </View>
            </ScrollView>
        )
    }

export default SearchCatagory;