import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hr1 from "../../img/homeRepair/hr1.jpeg";
import Hr2 from "../../img/homeRepair/hr2.jpeg";
import Hr3 from "../../img/homeRepair/hr3.jpeg";
import Hr4 from "../../img/homeRepair/hr4.jpeg";
import Hr5 from "../../img/homeRepair/hr5.jpeg";
import Hr6 from "../../img/homeRepair/hr6.jpeg";
import Hr7 from "../../img/homeRepair/hr7.jpeg";
import Hr8 from "../../img/homeRepair/hr8.jpeg";
import Hr9 from "../../img/homeRepair/hr9.jpeg";
import Hr10 from "../../img/homeRepair/hr10.jpeg";
import Hr11 from "../../img/homeRepair/hr11.jpeg";
import Hr12 from "../../img/homeRepair/hr12.jpeg";
import Hr13 from "../../img/homeRepair/hr13.jpeg";
import Hr14 from "../../img/homeRepair/hr14.jpeg";
import Hr15 from "../../img/homeRepair/hr15.jpeg";
import Hr16 from "../../img/homeRepair/hr16.jpeg";
import Hr17 from "../../img/homeRepair/hr17.jpeg";
import Hr18 from "../../img/homeRepair/hr18.jpeg";
import Hr19 from "../../img/homeRepair/hr19.jpeg";
import Hr20 from "../../img/homeRepair/hr20.jpeg";
import Hr21 from "../../img/homeRepair/hr21.jpeg";
import Hr22 from "../../img/homeRepair/hr22.jpeg";
import Hr23 from "../../img/homeRepair/hr23.jpeg";
import Hr24 from "../../img/homeRepair/hr24.jpeg";
import Hr25 from "../../img/homeRepair/hr25.jpeg";
import Hr26 from "../../img/homeRepair/hr26.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function HomeRepair(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Hr1,
            cleanName: "Roofing Repair",
            cleanContent: "Get our experts for roof repair services and get money back if unsatisfied.",
        },
        {
            cleanId: Hr2,
            cleanName: "TV Mounting",
            cleanContent: "Get access to TV mounting service experts for a great screening experience.",
        },
        {
            cleanId: Hr3,
            cleanName: "Window Tinting",
            cleanContent: "Guaranteed satisfaction or free reservice for all home improvement service.",
        },
        {
            cleanId: Hr4,
            cleanName: "Cabinet Refurbishing",
            cleanContent: "Give your cabinet a new and refreshed look!",
        },
        {
            cleanId: Hr5,
            cleanName: "Blinds & Shades Making and Installation",
            cleanContent: "Book our trusted experts for blinds & shades installation services.",
        },
        {
            cleanId: Hr6,
            cleanName: "Aluminium Work",
            cleanContent: "Get your money back if unsatisfied with our aluminium work services.",
        },
        {
            cleanId: Hr7,
            cleanName: "3 Phase Wiring",
            cleanContent: "Receive quotes within 24 hours for fast wiring services by experts.",
        },
        {
            cleanId: Hr8,
            cleanName: "Plumbing Repair",
            cleanContent: "Book plumbing repair services by experts & get money back if unsatisfied.",
        },
        {
            cleanId: Hr9,
            cleanName: "Feature Wall Painting",
            cleanContent: "Make your space stand out with our feature painting inclusive of paint and labor.",
        },
        {
            cleanId: Hr10,
            cleanName: "Awning",
            cleanContent: "Hire trusted awning service experts for your awning needs, beautiful and practical designs for your home.",
        },
        {
            cleanId: Hr11,
            cleanName: "Windscreen Replacement",
            cleanContent: "Trust our glass experts for windshield replacement services for all vehicle makes and models",
        },
        {
            cleanId: Hr12,
            cleanName: "Pest Control - Flush Out Treatment",
            cleanContent: "Keep your home protected with our pest control experts, get flush out treatment to rid your home of unwanted pests.",
        },
        {
            cleanId: Hr13,
            cleanName: "Flooring Repair / Replacement",
            cleanContent: "Book flooring repair/replacement service & get money back if unsatisfied.",
        },
        {
            cleanId: Hr14,
            cleanName: "Gate / Autogate Repair",
            cleanContent: "Kaodim Protection against property damage and theft when you hire our handyman.",
        },
        {
            cleanId: Hr15,
            cleanName: "Waterproofing Repair",
            cleanContent: "Book our waterproofing repair services by our Kaodim experts.",
        },
        {
            cleanId: Hr16,
            cleanName: "Floor Polishing",
            cleanContent: "KaodimPay ensures secured cashless transactions when you hire our experts.",
        },
        {
            cleanId: Hr17,
            cleanName: "Partition",
            cleanContent: "Create the divide with our partition experts. Trusted and reliable and ready to assist with your partition needs.",
        },
        {
            cleanId: Hr18,
            cleanName: "Plastering",
            cleanContent: "Cashless transaction with KaodimPay when you hire our plastering services.",
        },
        {
            cleanId: Hr19,
            cleanName: "Tiling Repair",
            cleanContent: "We ensure satisfaction or your money back when you hire our experts.",
        },
        {
            cleanId: Hr20,
            cleanName: "Tiling Installation",
            cleanContent: "Receive fast quotes when you book tiling installation services.",
        },
        {
            cleanId: Hr21,
            cleanName: "Plumbing Installation",
            cleanContent: "Get free protection coverage for damage and theft by hiring our certified plumbers.",
        },
        {
            cleanId: Hr22,
            cleanName: "Lock Installation / Repair",
            cleanContent: "Get matched with up to 5 quotes after you request for our locksmiths.",
        },
        {
            cleanId: Hr23,
            cleanName: "Painting - Labor & Paint Supply",
            cleanContent: "Get High-quality Nippon paint at one fixed price inclusive of paint and labor.",
        },
        {
            cleanId: Hr24,
            cleanName: "Wall Drilling & Mounting",
            cleanContent: "Great deals with services starting from RM 80 with our renovation experts.",
        },
        {
            cleanId: Hr25,
            cleanName: "Painting - Labor Only",
            cleanContent: "Hire our verified painters for guaranteed satisfaction or get a reservice.",
        },
        {
            cleanId: Hr26,
            cleanName: "Alarm & CCTV",
            cleanContent: "Enhance the security of your property with alarm and CCTV installation for a safer and secured home.",
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
                    { rates.map(repair => (
                        <View key={repair.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', repair)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={repair.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{repair.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{repair.cleanContent}</Text>
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