import React,{ useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import Off1 from "../img/office/off1.jpeg";
import Off2 from "../img/office/off2.jpeg";
import Off3 from "../img/office/off3.jpeg";
import Off4 from "../img/office/off4.jpeg";
import Off5 from "../img/office/off5.jpeg";
import Off6 from "../img/office/off6.jpeg";

function OfficeView ({navigation}) {
    const [review,Setreview] = useState([
        {
            officeId: Off1,
            officeName: "Pest Control Services",
            officeContent: "Is your home getting invaded by pests? Just can't deal with ants and rats? Need help getting rid of those cockroaches? Get connected to trained and trusted pest control experts to help keep your pest problems under control.",
        },
        {
            officeId: Off2,
            officeName: "Office Events & Space Rental",
            officeContent: "Planning an event for your company? Give your colleagues and superiors the time of their lives by planning the perfect event with the right solutions to all your event needs.",
        },
        {
            officeId: Off3,
            officeName: "Office Movers & Relocators Services",
            officeContent: "Moving your business into a new location? Don't stress it and let us handle all the heavy lifting for you! Find the right movers with a truck of your choice and make your move a breeze.",
        },
        {
            officeId: Off4,
            officeName: "Office Maintenance Services",
            officeContent: "Keep your office clean and comfortable for maximum work productivity! Let our experts help manage your office - from cleaning to electrical services, we have it all.",
        },
        {
            officeId: Off5,
            officeName: "Professional & Freelance Services",
            officeContent: "Need an extra pair of hands in your company? Find experienced and reliable freelance professionals to support your business! From accountants to web developers, hire the right person to get the job done right.",
        },
        {
            officeId: Off6,
            officeName: "Hardware/Software Support",
            officeContent: "Need some tech support for your company? Trust our Kaodim experts to get your hardware, software, network, and data issues resolved! Rest assured that we will try our very best to get your problems resolved.",
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
                        { review.map(office => (
                            <View key={office.officeId}>
                                <TouchableOpacity onPress={()=>navigation.navigate('HomeCatagory', office)}>
                                    <View style={{flexDirection:"row",width:'68%'}}>
                                        <Image source={office.officeId} style={{width:106,height:80}} />
                                        <View style={{paddingLeft:15}}>
                                            <Text style={{fontSize:18,paddingBottom:7}}>{office.officeName}</Text>
                                            <Text style={{fontSize: 18,color: "#6a6a6a"}}>{office.officeContent}</Text>
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
export default OfficeView;