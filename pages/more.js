// import React, { Component } from 'react';
// import { useState } from 'react';
// import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import { connect } from 'react-redux';

// function More({navigation},props) {
//     const [list, setList] = useState([
//         {name: "Saved Locations",icon:"ios-location-sharp",lock:"lock-closed",color:"rgb(160, 172, 183)"},
//         {name:"Settings",icon:"settings-sharp",lock:"lock-closed",color:"rgb(160, 172, 183)"},
//         {name:"Vendor Directory",icon:"people-sharp",lock:"chevron-forward",color:"black"},
//         {name:"Help & Support",icon:"ios-help-circle",lock:"chevron-forward",color:"black"},
//         {name:"Invite & Earn",icon:"person",lock:"lock-closed",color:"rgb(160, 172, 183)"}
//     ])
    
//     return(
//         <ScrollView>
//             <View>
//                 <View style={{backgroundColor:"white",paddingVertical:40,paddingHorizontal:10,alignItems:"center",marginBottom:15}}>
//                     <Text style={{fontSize:18,color:"black",textAlign:"center",paddingBottom:20}}>Sign up or login to your account to access more features</Text>
//                     <TouchableHighlight
//                     underlayColor="#0f63ab"
//                     onPress={()=>navigation.navigate('Login')}
//                     style={{
//                         backgroundColor:"#2692ee",
//                         paddingHorizontal:15,
//                         paddingVertical:10,
//                         borderRadius: 6,
                    
//                     }}
//                     >
//                         <Text style={{textAlign:"center",fontSize:18,color:"white"}}>Sign up or login with Trafft</Text>
//                     </TouchableHighlight>
//                 </View>
//                 { list.map(item=>(
//                     <TouchableOpacity key={item.name}
//                     onPress={()=>{
//                         if(item.name=="Help & Support") {
//                             navigation.navigate('Help & Support')
//                         }
//                         else if(item.name=="Saved Locations") {
//                             navigation.navigate('Login')
//                         }
//                     }}
//                     >
//                         <View style={{backgroundColor:"white",marginTop:3,paddingHorizontal:15,paddingVertical:20}}>
//                             <View style={{
//                                 flexDirection:"row",
//                                 justifyContent:"space-between",
//                             }}>
//                                 <View style={{
//                                     flexDirection:"row"
//                                 }}>
//                                     <Ionic name={item.icon} style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
//                                     <Text style={{fontSize:18,paddingLeft:10,color:item.color}}>{item.name}</Text>
//                                 </View>
//                                 <Ionic name={item.lock} style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                 )) }
//                 <TouchableOpacity>
//                     <View style={{backgroundColor:"white",marginTop:20,paddingHorizontal:15,paddingVertical:15}}>
//                         <View style={{
//                             flexDirection:"row",
//                             justifyContent:"space-between",
//                         }}>
//                             <View style={{
//                                 flexDirection:"row"
//                             }}>
//                                 <Ionic name="lock-closed" style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
//                                 <Text style={{fontSize:18,paddingLeft:10,color:"black"}}>Switch to Trafft</Text>
//                             </View>
//                             <Ionic name="chevron-forward" style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={{flexDirection:"row",marginTop:20,justifyContent:"center"}}>
//                     <TouchableOpacity
//                     onPress={()=>navigation.navigate('Terms of use')}
//                     >
//                         <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Terms of Use</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                     onPress={()=>navigation.navigate('Privacy Policy')}
//                     >
//                         <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Privacy Policy</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// const connecting = (state) => {
//     return{
//         count: state.counter.count,
//         data: state.testers
//     }
// }

// export default connect(connecting)(More);

import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Empty from './empty';

function More(props) {
    const [list, setList] = useState([
        {name:"Saved Locations",icon:"ios-location-sharp",lock:"lock-closed",color:"rgb(160, 172, 183)"},
        {name:"Settings",icon:"settings-sharp",lock:"lock-closed",color:"rgb(160, 172, 183)"},
        {name:"Vendor Directory",icon:"people-sharp",lock:"chevron-forward",color:"black"},
        {name:"Help & Support",icon:"ios-help-circle",lock:"chevron-forward",color:"black"},
        {name:"Invite & Earn",icon:"person",lock:"lock-closed",color:"rgb(160, 172, 183)"}
    ])

    const navigation = useNavigation()
    
    if(props.count) {
            return(
            <ScrollView style={{paddingBottom:20}}>
                <View>
                    <View style={{backgroundColor:"white",paddingVertical:36,paddingHorizontal:10,alignItems:"center",marginBottom:12}}>
                        <Text style={{fontSize:18,color:"black",textAlign:"center",paddingBottom:20}}>Sign up or login to your account to access more features</Text>
                        <TouchableHighlight
                        underlayColor="#0f63ab"
                        onPress={()=>navigation.navigate('Login')}
                        style={{
                            backgroundColor:"#2692ee",
                            paddingHorizontal:15,
                            paddingVertical:10,
                            borderRadius: 6,                       
                        }}
                        >
                            <Text style={{textAlign:"center",fontSize:18,color:"white"}}>Sign up or login with Trafft</Text>
                        </TouchableHighlight>
                    </View>
                    { list.map(item=>(
                        <TouchableOpacity key={item.name}
                        onPress={()=>{
                            if(item.name=="Help & Support") {
                                navigation.navigate('Help & Support')
                            }
                            else if(item.name=="Saved Locations") {
                                navigation.navigate('Login')
                            }
                        }}
                        >
                            <View style={{backgroundColor:"white",marginTop:3,paddingHorizontal:15,paddingVertical:20}}>
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                }}>
                                    <View style={{
                                        flexDirection:"row"
                                    }}>
                                        <Ionic name={item.icon} style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
                                        <Text style={{fontSize:18,paddingLeft:10,color:"black"}}>{item.name}</Text>
                                    </View>
                                    <Ionic name="chevron-forward" style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )) }
                    <TouchableOpacity>
                        <View style={{backgroundColor:"white",marginTop:15,paddingHorizontal:15,paddingVertical:15}}>
                            <View style={{
                                flexDirection:"row",
                                justifyContent:"space-between",
                            }}>
                                <View style={{
                                    flexDirection:"row"
                                }}>
                                    <Ionic name="lock-closed" style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
                                    <Text style={{fontSize:18,paddingLeft:10,color:"black"}}>Switch to Trafft</Text>
                                </View>
                                <Ionic name="chevron-forward" style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",marginTop:20,justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Terms of use')}
                        >
                            <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Terms of Use</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Privacy Policy')}
                        >
                            <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    )
    }
    else {
        return(
            <ScrollView>
                <View style={{paddingBottom:20}}>
                    <View style={{backgroundColor:"white",paddingVertical:36,paddingHorizontal:10,alignItems:"center",marginBottom:12}}>
                        <Text style={{fontSize:18,color:"black",textAlign:"center",paddingBottom:20}}>Sign up or login to your account to access more features</Text>
                        <TouchableHighlight
                        underlayColor="#0f63ab"
                        onPress={()=>navigation.navigate('Login')}
                        style={{
                            backgroundColor:"#2692ee",
                            paddingHorizontal:15,
                            paddingVertical:10,
                            borderRadius: 6,                       
                        }}
                        >
                            <Text style={{textAlign:"center",fontSize:18,color:"white"}}>Sign up or login with Trafft</Text>
                        </TouchableHighlight>
                    </View>
                    { list.map(item=>(
                        <TouchableOpacity key={item.name}
                        onPress={()=>{
                            if(item.name=="Help & Support") {
                                navigation.navigate('Help & Support')
                            }
                            else if(item.name=="Saved Locations") {
                                navigation.navigate('Login')
                            }
                        }}
                        >
                            <View style={{backgroundColor:"white",marginTop:3,paddingHorizontal:15,paddingVertical:20}}>
                                <View style={{
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                }}>
                                    <View style={{
                                        flexDirection:"row"
                                    }}>
                                        <Ionic name={item.icon} style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
                                        <Text style={{fontSize:18,paddingLeft:10,color:item.color}}>{item.name}</Text>
                                    </View>
                                    <Ionic name={item.lock} style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )) }
                    <TouchableOpacity>
                        <View style={{backgroundColor:"white",marginTop:15,paddingHorizontal:15,paddingVertical:15}}>
                            <View style={{
                                flexDirection:"row",
                                justifyContent:"space-between",
                            }}>
                                <View style={{
                                    flexDirection:"row"
                                }}>
                                    <Ionic name="lock-closed" style={{fontSize:25,color:"rgb(160, 172, 183)"}}/>
                                    <Text style={{fontSize:18,paddingLeft:10,color:"black"}}>Switch to Trafft</Text>
                                </View>
                                <Ionic name="chevron-forward" style={{fontSize:25,color:"rgb(160, 172, 183)"}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",marginTop:20,justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Terms of use')}
                        >
                            <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Terms of Use</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Privacy Policy')}
                        >
                            <Text style={{paddingHorizontal:5,color:"#2692ee",fontSize:15}}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>            
        )
    }
}

const connecting = (state) => {
    return{
        count: state.counter.count,
        data: state.testers
    }
}

export default connect(connecting,null)(More);