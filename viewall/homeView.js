import React,{ useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import Hv1 from "../img/hv1.jpeg";
import Hv2 from "../img/hv2.jpeg";
import Hv3 from "../img/hv3.jpeg";
import Hv4 from "../img/hv4.jpeg";
import Hv5 from "../img/hv5.jpeg";
import Hv6 from "../img/hv6.jpeg";
import Hv7 from "../img/hv7.jpeg";
import Hv8 from "../img/hv8.jpeg";
import Hv9 from "../img/hv9.jpeg";
import Hv10 from "../img/hv10.jpeg";
import Hv11 from "../img/hv11.jpeg";
import Hv12 from "../img/hv12.jpeg";
import Hv13 from "../img/hv13.jpeg";
import Hv14 from "../img/hv14.jpeg";
import Hv15 from "../img/hv15.jpeg";
import Hv16 from "../img/hv16.jpeg";

function HomeView ({navigation}) {
    const [review,Setreview] = useState([
        {
            homeId: Hv1,
            homeName: "Cleaning Services",
            homeContent: "Enjoy the comfort of your home without needing to worry about cleanliness! Get a peace of mind by hiring experienced cleaners to keep your home neat, tidy, and dust-free.",
        },
        {
            homeId: Hv2,
            homeName: "Plumber Services",
            homeContent: "Don't let your leaky pipes cause more damages to your home and your water bills! Leave the dirty work to the experts and get your repairs and installations done by experienced and reliable plumbers.",
        },
        {
            homeId: Hv3,
            homeName: "Lighting & Wiring Services",
            homeContent: "Want to brighten up your space with more light fixtures? Need some help from wiring experts? Get in touch with the right service providers for all your lighting and wiring installation or repair needs.",
        },
        {
            homeId: Hv4,
            homeName: "Aircond Services",
            homeContent: "Dust buildups can cause more damages to your aircond than you think! Don't sweat it and extend the lifespan of your aircond with proper services and maintenance from experienced aircond service providers.",
        },
        {
            homeId: Hv5,
            homeName: "Interior Design Services",
            homeContent: "Wish you lived in a better home? You don't have to keep your dream home in your imaginations! Make your imaginations come true with quality interior design services and live in the home of your dreams.",
        },
        {
            homeId: Hv6,
            homeName: "Home Repair & Maintenance",
            homeContent: "Sick of all the problems that your home is giving you? Get your household troubles resolved in a breeze with quality home repair and maintenance services from trusted experts.",
        },
        {
            homeId: Hv7,
            homeName: "Home Renovation & Improvement",
            homeContent: "Are you looking to give your home a makeover? Want to renovate your home but not sure who to ask? Get matched to a experienced and trusted contractor on Kaodim to give your home a facelift! Find the perfect contractor that suits your project and budget.",
        },
        {
            homeId: Hv8,
            homeName: "Security, CCTV, and Alarm",
            homeContent: "It's always better to be safe than sorry! Play a part in keeping your neighbourhood safe while protecting your family and home from intruders with professionally-installed alarm and security systems.",
        },
        {
            homeId: Hv9,
            homeName: "Landscape & Garden Design",
            homeContent: "From potted plants to trees, sprinkler systems, and outdoor furniture, we have everything you need to transform your home into the eco haven that you've always wanted. Make your dream garden come true with experienced landscaping specialists!",
        },
        {
            homeId: Hv10,
            homeName: "Pest Control Services",
            homeContent: "Is your home getting invaded by pests? Just can't deal with ants and rats? Need help getting rid of those cockroaches? Get connected to trained and trusted pest control experts to help keep your pest problems under control.",
        },
        {
            homeId: Hv11,
            homeName: "Movers & Relocators",
            homeContent: "Enjoy a fresh start by moving into your new home without the stress and trouble! Get assistance from experienced and trusted movers who will handle your furniture and belongings with utmost care.",
        },
        {
            homeId: Hv12,
            homeName: "Catering, Cakes, & Cookies",
            homeContent: "Hosting something special? Complete your event with delicious food and beverages for all your guests! Choose from home-cooked local food, western food, cakes, gourmet coffee, and more. Hire the perfect caterer for your event today!",
        },
        {
            homeId: Hv13,
            homeName: "Computer, Laptop, and Phone Service & Repair",
            homeContent: "Why replace your gadgets when you can repair them? Get your gadgets repaired by trusted and experienced repairmen who will help keep your personal information and data private and confidential.",
        },
        {
            homeId: Hv14,
            homeName: "Appliance Service & Repair",
            homeContent: "Got a broken refrigerator but don't know what to do with it? Worry no more and get your household appliances repaired by experienced and reliable repairmen. Experience quality repair services from experts that are guaranteed to satisfy.",
        },
        {
            homeId: Hv15,
            homeName: "Pets Services",
            homeContent: "Your pets deserve the best. Show them how much you love them by giving them the best experience with grooming, boarding, and training with animal-loving experts.",
        },
        {
            homeId: Hv16,
            homeName: "Smart Lock Installation",
            homeContent: "Want guaranteed safety of you home and family? Achieve a safer home by controlling and monitoring your home from anywhere.",
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
                        <Text style={{fontSize:19,fontWeight:"bold",paddingBottom:10}}>Your home is our priority</Text>
                        <Text style={styles.txt}>Whether it's cleaning, repair, installations, or moving services, we can satisfy all your household needs! Rest assured that our service providers are trusted and experienced - satisfaction guaranteed.</Text>
                        <View style={{height:0.5,backgroundColor:"gray",marginVertical:20}}></View>
                        { review.map(items => (
                            <View key={items.homeId}>
                                <TouchableOpacity onPress={()=>navigation.navigate('HomeCatagory', items)}>
                                    <View style={{flexDirection:"row",width:'68%'}}>
                                        <Image source={items.homeId} style={{width:106,height:80}} />
                                        <View style={{paddingLeft:15}}>
                                            <Text style={{fontSize:18,paddingBottom:7}}>{items.homeName}</Text>
                                            <Text style={{fontSize: 18,color: "#6a6a6a"}}>{items.homeContent}</Text>
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
        color: "#6a6a6a",
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
export default HomeView;