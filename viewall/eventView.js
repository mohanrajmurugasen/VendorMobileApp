import React,{ useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import Ev1 from "../img/events/ev1.jpeg";
import Ev2 from "../img/events/ev2.jpeg";
import Ev3 from "../img/events/ev3.jpeg";
import Ev4 from "../img/events/ev4.jpeg";
import Ev5 from "../img/events/ev5.jpeg";
import Ev6 from "../img/events/ev6.jpeg";

function EventView ({navigation}) {
    const [review,Setreview] = useState([
        {
            eventId: Ev1,
            eventName: "Catering, Cakes, & Cookies",
            eventContent: "Hosting something special? Complete your event with delicious food and beverages for all your guests! Choose from home-cooked local food, western food, cakes, gourmet coffee, and more. Hire the perfect caterer for your event today!",
        },
        {
            eventId: Ev2,
            eventName: "Office Events & Space Rental",
            eventContent: "Planning an event for your company? Give your colleagues and superiors the time of their lives by planning the perfect event with the right solutions to all your event needs.",
        },
        {
            eventId: Ev3,
            eventName: "Entertainment & Events",
            eventContent: "Planning an event for a special day? Don't stress and make your event perfect by finding the solutions to your event essentials here. From catering to photobooth services, we have just what you need.",
        },
        {
            eventId: Ev4,
            eventName: "Wedding Services",
            eventContent: "Planning the perfect wedding shouldn't be stressful! Find the solutions to all your wedding needs on Kaodim - from photography services to hair and makeup services, we've got just what you need.",
        },
        {
            eventId: Ev5,
            eventName: "Photographers & Videographers",
            eventContent: "People always say to live in the moment, but why not make those moments last forever? Keep your memories alive by capturing moments into photographs and videos. Find professional photographers and videographers for your event today.",
        },
        {
            eventId: Ev6,
            eventName: "Beauty & Salon Services",
            eventContent: "Reward yourself with quality pampering sessions in the comfort of your home! Experience expert makeup, lash, hair, facial, nails, and more services with trained and trusted beauty experts on Kaodim.",
        },
    ]) 
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
                <View style={{backgroundColor:"white",width:'100%'}}>
                    <View style={{paddingHorizontal:'3%',paddingVertical:20}}>
                        <Text style={{fontSize:19,fontWeight:"bold",paddingBottom:10}}>Planning an event has never been easier.</Text>
                        <Text style={styles.txt}>Throw the event of the year with all your solutions to your event planning needs in one place. Find the right service providers for your event - convenient, fast, and easy.</Text>
                        <View style={{height:0.5,backgroundColor:"gray",marginVertical:20}}></View>
                        { review.map(events => (
                            <View key={events.eventId}>
                                <TouchableOpacity onPress={()=>navigation.navigate('HomeCatagory', events)}>
                                    <View style={{flexDirection:"row",width:'68%'}}>
                                        <Image source={events.eventId} style={{width:106,height:80}} />
                                        <View style={{paddingLeft:15}}>
                                            <Text style={{fontSize:18,paddingBottom:7}}>{events.eventName}</Text>
                                            <Text style={{fontSize: 18,color: "#6a6a6a"}}>{events.eventContent}</Text>
                                        </View>
                                    </View>
                                    <View style={{height:0.5,backgroundColor:"gray",marginVertical:20}}></View>
                                </TouchableOpacity>
                            </View>
                        )) }
                    </View>
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        color: "#6a6a6a"
    },
    box: {
        flexDirection:"row",
    },
    img: {
        width: 100,
        height:100,
        borderRadius: 5
    }
})
export default EventView;