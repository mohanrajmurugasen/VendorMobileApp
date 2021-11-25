import React,{ Component } from "react";
import { ScrollView, View, Image, RefreshControl } from "react-native";
import Home1 from "../img/home1.jpg";
import Home2 from "../img/image.gif";
import Home3 from "../img/image1.gif";

class LatestView extends Component {
    render() {
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
                <View style={{marginHorizontal:15,backgroundColor:"white"}}>
                    <Image source={Home1} style={{height:200,width:null,marginTop:15}} />
                    <Image source={Home2} style={{height:200,width:null,marginTop:15}} />
                    <Image source={Home3} style={{height:200,width:null,marginTop:15}} />
                </View>
            </ScrollView>
        )
    }
}
export default LatestView;