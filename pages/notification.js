// import React from 'react';
// import { View, Text,Image, TouchableOpacity, TouchableHighlight } from 'react-native';
// import Img from "../img/sleeps.png";

// export default function Request({navigation}) {
//     return(
//         <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
//             <Image source={Img} style={{width:250,height:250}} />
//             <Text style={{fontSize:20,paddingVertical:20,textAlign:"center"}}>Please refresh to try again.</Text>
//         </View>
//     )
// }

import React from 'react';
import { View, Text,Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Img from "../img/thumb.jpg";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Empty from './empty';

function Request(props) {
    const navigation = useNavigation()
    if(props.count) {
        return(
            <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:22,paddingVertical:20,textAlign:"center",fontWeight:"bold"}}>Welcome to Vendor Notification page</Text>
            </View>
        )
    }
    else {
        return(
                    <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
                        <Image source={Img} style={{width:250,height:250}} />
                        <Text style={{fontSize:20,paddingVertical:20,textAlign:"center"}}>Please refresh to try again.</Text>
                    </View>
                )
    }
}

const connecting = (state) => {
    return{
        count: state.counter.count,
        data: state.testers
    }
}

export default connect(connecting,null)(Request);