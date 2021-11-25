import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Call from "../img/call.jpg";
import Message from "../img/message.jpg";
import LearnCategory from './learncatagory';

function LearnMore ({navigation}) {
    const [help,Sethelp] = useState([
        { id: 1, name: "What if I do not wish to proceed with the request?", },
        { id: 2,name: "Kelayakan bayaran balik bayaran pendahuluan", },
        { id: 3,name: "New Feature: Call Masking & Virtual Number", },
        { id: 4,name: "Apakah kaedah pembayaran atas-talian yang Kaodim terima?", },
        { id: 5,name: "Bagaimanakah cara untuk menggunakan kod promo atau kod rujukan?", },
        { id: 6,name: "How do I book a service provider?", },
        { id: 7,name: "The service provider I booked (Kaodim Compare) or get matched with (Kaodim Direct) is not suitable for my request, do I need to cancel the request?", },
        { id: 8,name: "Bolehkah saya bayar secara tunai setelah servis selesai?", },
        { id: 9,name: "Keep all communications and transactions within Kaodim", },
        { id: 10,name: "How do I book a vendor for a Kaodim Direct request?", },
        { id: 11,name: "The vendor has accepted or quoted for my job. Will there be further changes in the price of the service?", },
        { id: 12,name: "Upfront Payment Policy", },
        { id: 13,name: "Do I need to create a separate account on the Kaodim app to submit a request?", },
        { id: 14,name: "Upfront Payment Refund Eligibility", },
        { id: 15,name: "Will Kaodim be providing the Kaodim Guarantee and Kaodim Protection benefits only if I book and pay via Grabpay?", },
        { id: 16,name: "Cara membuat bayaran untuk servis", },
        { id: 17,name: "How do I tell if it is a Kaodim Compare service?", },
        { id: 18,name: "How do I view my request history?", },
        { id: 19,name: "Bolehkah saya gunakan kod promo semasa membuat bayaran?", },
        { id: 20,name: "Will I be receiving a receipt after completion of a service?", },
        { id: 21,name: "Kelayakan bayaran balik bayaran pendahuluan", },
        { id: 22,name: "Apakah kaedah pembayaran atas-talian yang Kaodim terima?", },
        { id: 23,name: "Cara membuat bayaran untuk servis", },
        { id: 24,name: "The service provider I booked (Kaodim Compare) or get matched with (Kaodim Direct) is not suitable for my request, do I need to cancel the request?", },
        { id: 25,name: "Bolehkah saya bayar secara tunai setelah servis selesai?", },
        { id: 26,name: "New Feature: Call Masking & Virtual Number", },
        { id: 27,name: "What if I do not wish to proceed with the request?", },
        { id: 28,name: "Do I need to create a separate account on the Kaodim app to submit a request?", },
        { id: 29,name: "Upfront Payment Refund Eligibility", },
        { id: 30,name: "Keep all communications and transactions within Kaodim", },
        { id: 31,name: "Will I be receiving a receipt after completion of a service?", },
        { id: 32,name: "Will Kaodim be providing the Kaodim Guarantee and Kaodim Protection benefits only if I book and pay via Grabpay?", },
        { id: 33,name: "Bolehkah saya gunakan kod promo semasa membuat bayaran?", },
        { id: 34,name: "How do I see past payments made by my customers?", },
        { id: 35,name: "Polisi Pembayaran Pendahuluan", },
        { id: 36,name: "Apakah Bayaran Tambahan?", },
        { id: 37,name: "How do I view my request history?", },
        { id: 38,name: "How do I communicate with service providers?", },
        { id: 39,name: "Saya tidak lagi perlukan servis, bagaimana boleh saya batalkan permintaan?", },
        { id: 40,name: "Why do prices vary in the quotes that I received?", },
    ])
        return(
            <ScrollView>
                <View style={{flexDirection:"row",backgroundColor:"#dcd8d869",padding:20,justifyContent:"space-evenly"}}>
                    <TouchableOpacity>
                        <View style={{backgroundColor:"white",alignItems:"center",width:160,paddingVertical:20,margin:5}}>
                            <Image source={Call} style={{
                            height: 60,width: 60,
                            resizeMode: "center",
                            }} />
                            <Text style={{fontSize:18,color:"#6a6a6a",paddingTop:10}}>Call us</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Send a message')}>
                        <View style={{backgroundColor:"white",alignItems:"center",width:160,paddingVertical:20,margin:5}}>
                            <Image source={Message} style={{
                            height: 60,width: 60,
                            resizeMode: "center",
                            }} />
                            <Text style={{fontSize:18,color:"#6a6a6a",paddingTop:10}}>Message us</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:"700",padding:20}}>FAQs</Text>
                    <View style={{height:0.5,backgroundColor:"gray"}}></View>
                    { help.map(help => (
                        <TouchableOpacity
                        key={help.id}
                        onPress={()=>navigation.navigate('FAQ', help)}
                        >
                            <LearnCategory name={help.name} />
                        </TouchableOpacity>
                    )) }
                </View>
            </ScrollView>
        )
}

export default LearnMore;