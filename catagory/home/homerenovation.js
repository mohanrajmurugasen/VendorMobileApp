import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Hr1 from "../../img/homeRepair/hr1.jpeg";
import Hr2 from "../../img/homeRepair/hr2.jpeg";
import Hr3 from "../../img/homeRepair/hr3.jpeg";
import Hr4 from "../../img/homeRepair/hr4.jpeg";
import Hr6 from "../../img/homeRepair/hr6.jpeg";
import Hr9 from "../../img/homeRepair/hr9.jpeg";
import Hr10 from "../../img/homeRepair/hr10.jpeg";
import Hr12 from "../../img/homeRepair/hr12.jpeg";
import Hr16 from "../../img/homeRepair/hr16.jpeg";
import Hr17 from "../../img/homeRepair/hr17.jpeg";
import Hr18 from "../../img/homeRepair/hr18.jpeg";
import Hr20 from "../../img/homeRepair/hr20.jpeg";
import Hr21 from "../../img/homeRepair/hr21.jpeg";
import Hr22 from "../../img/homeRepair/hr22.jpeg";
import Hr23 from "../../img/homeRepair/hr23.jpeg";
import Hr24 from "../../img/homeRepair/hr24.jpeg";
import Hr25 from "../../img/homeRepair/hr25.jpeg";

import Hr27 from "../../img/homeRepair/hr27.jpeg";
import Hr28 from "../../img/homeRepair/hr28.jpeg";
import Hr29 from "../../img/homeRepair/hr29.jpeg";
import Hr30 from "../../img/homeRepair/hr30.jpeg";
import Hr31 from "../../img/homeRepair/hr31.jpeg";
import Hr32 from "../../img/homeRepair/hr32.jpeg";
import Hr33 from "../../img/homeRepair/hr33.jpeg";
import Hr34 from "../../img/homeRepair/hr34.jpeg";
import Hr35 from "../../img/homeRepair/hr35.jpeg";
import Hr36 from "../../img/homeRepair/hr36.jpeg";
import Hr37 from "../../img/homeRepair/hr37.jpeg";
import Hr38 from "../../img/homeRepair/hr38.jpeg";
import Hr39 from "../../img/homeRepair/hr39.jpeg";
import Hr40 from "../../img/homeRepair/hr40.jpeg";
import { useNavigation } from '@react-navigation/native';

export default function HomeRenovation(props) {
    const [rates,Setrates] = useState([
        {
            cleanId: Hr27,
            cleanName: "Glasswork",
            cleanContent: "Hire experienced glasswork experts to provide high-quality thorough design and installation services.",
        },
        {
            cleanId: Hr28,
            cleanName: "Electrical Wiring / Power Point",
            cleanContent: "Get quotes within 24 hours when you book our wiring/power point service.",
        },
        {
            cleanId: Hr29,
            cleanName: "Curtain & Drapes Making and Installation",
            cleanContent: "Enjoy free Kaodim Protection coverage against damage for curtain & drapes service.",
        },
        {
            cleanId: Hr30,
            cleanName: "Cabinetry",
            cleanContent: "Book cabinetry service & get free protection coverage against property damage and theft.",
        },
        {
            cleanId: Hr31,
            cleanName: "Window Installation",
            cleanContent: "Book window installation services and receive quotes within 24 hours.",
        },
        {
            cleanId: Hr32,
            cleanName: "Wallpaper Supply / Installation",
            cleanContent: "",
        },
        {
            cleanId: Hr33,
            cleanName: "Flooring Installation",
            cleanContent: "Book flooring installation services & enjoy secured cashless payments.",
        },
        {
            cleanId: Hr34,
            cleanName: "Renovation",
            cleanContent: "Get up to 5 quotes to compare from our trusted professionals",
        },
        {
            cleanId: Hr35,
            cleanName: "Gate / Autogate Installation",
            cleanContent: "Install a brand new gate and the perfect gate system with our certified experts.",
        },
        {
            cleanId: Hr36,
            cleanName: "Waterproofing Installation",
            cleanContent: "Get a reservice if unsatisfied with our waterproofing installation service.",
        },
        {
            cleanId: Hr37,
            cleanName: "Concreting",
            cleanContent: "Get reliable & quality concreting experts to assist with your concrete driveways, concrete resurfacing, stamped concrete and stencil concrete.",
        },
        {
            cleanId: Hr38,
            cleanName: "Ironwork",
            cleanContent: "Let our experts coordinate your projects with the best quality products and services.",
        },

        {
            cleanId: Hr39,
            cleanName: "Fan Installation",
            cleanContent: "Get ceiling fan installation service from our trusted installers for guaranteed satisfaction.",
        },
        {
            cleanId: Hr40,
            cleanName: "Lighting Installation",
            cleanContent: "Hire our service experts and get free protection coverage for damage and theft",
        },
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
            cleanId: Hr6,
            cleanName: "Aluminium Work",
            cleanContent: "Get your money back if unsatisfied with our aluminium work services.",
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
            cleanId: Hr12,
            cleanName: "Pest Control - Flush Out Treatment",
            cleanContent: "Keep your home protected with our pest control experts, get flush out treatment to rid your home of unwanted pests.",
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
                    { rates.map(renovation => (
                        <View key={renovation.cleanName} style={{paddingHorizontal:15}}>
                            <TouchableOpacity
                             onPress={()=>navigation.navigate('OverAllDetails', renovation)}
                            >
                                <View style={{flexDirection:"row",paddingVertical:15}}>
                                    <Image source={renovation.cleanId} style={{width:110,height:95,borderRadius:5}} />
                                    <View style={{paddingLeft:15,width:'70%'}}>
                                        <Text style={{fontSize:18,paddingBottom:7}}>{renovation.cleanName}</Text>
                                        <Text style={{fontSize: 18,color: "#6a6a6a"}}>{renovation.cleanContent}</Text>
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