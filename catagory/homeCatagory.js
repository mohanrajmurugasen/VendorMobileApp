import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Aircond from './home/aircond';
import AutoCar from './home/autoCar';
import AutoMove from './home/autoMove';
import AutoOffice from './home/autoOffice';
import Catering from './home/catering';
import Cleaning from './home/cleaning';
import Computer from './home/computer';
import EventBeauty from './home/eventBeauty';
import EventEntertainment from './home/eventEntertainment';
import EventOffice from './home/eventoffice';
import HealthFitness from './home/healthFitness';
import HealthWellness from './home/healthWellness';
import HomeRenovation from './home/homerenovation';
import HomeRepair from './home/homerepair';
import Interior from './home/interior';
import LandScaping from './home/landscaping';
import Lighting from './home/lighting';
import OfficeEvents from './home/officeEvents';
import OfficeHardware from './home/officeHardware';
import OfficeMove from './home/officeMove';
import OfficePest from './home/officepest';
import Pets from './home/pets';
import Plumber from './home/plumber';
import Security from './home/security';

function HomeCatagory({ navigation,route }) { 

    
    let data = route.params;
    if(data.homeName=="Cleaning Services") {
        return(
            <Cleaning name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Plumber Services") {
        return (
            <Plumber name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Lighting & Wiring Services") {
        return (
            <Lighting name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Aircond Services") {
        return (
            <Aircond name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Interior Design Services") {
        return (
            <Interior name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Home Repair & Maintenance") {
        return (
            <HomeRepair name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Home Renovation & Improvement") {
        return (
            <HomeRenovation name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Security, CCTV, and Alarm") {
        return (
            <Security name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Landscape & Garden Design") {
        return (
            <LandScaping name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Pest Control Services") {
        return (
            <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
                <Text style={{fontSize:20}}>Pest Control Services</Text>
            </View>
        )
    }
    else if(data.homeName=="Movers & Relocators") {
        return (
            <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
                <Text style={{fontSize:20}}>Movers & Relocators</Text>
            </View>
        )
    }
    else if(data.homeName=="Catering, Cakes, & Cookies") {
        return (
            <Catering name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Computer, Laptop, and Phone Service & Repair") {
        return (
            <Computer name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Appliance Service & Repair") {
        return (
            <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
                <Text style={{fontSize:20}}>Appliance Service & Repair</Text>
            </View>
        )
    }
    else if(data.homeName=="Pets Services") {
        return (
            <Pets name={data.homeName} id={data.homeId} content={data.homeContent} />
        )
    }
    else if(data.homeName=="Smart Lock Installation") {
        return (
            <View style={{justifyContent:"center",flex:1,alignItems:"center"}}>
                <Text style={{fontSize:20}}>Smart Lock Installation</Text>
            </View>
        )
    }
    else if(data.eventName=="Catering, Cakes, & Cookies") {
        return(
            <Catering name={data.eventName} id={data.eventId} content={data.eventContent} />
        )
    }
    else if(data.eventName=="Office Events & Space Rental") {
        return(
            <EventOffice name={data.eventName} id={data.eventId} content={data.eventContent} />
        )
    }
    else if(data.eventName=="Entertainment & Events") {
        return(
            <EventEntertainment name={data.eventName} id={data.eventId} content={data.eventContent} />
        )
    }
    else if(data.eventName=="Beauty & Salon Services") {
        return(
            <EventBeauty name={data.eventName} id={data.eventId} content={data.eventContent} />
        )
    }

    else if(data.officeName=="Pest Control Services") {
        return(
            <OfficePest name={data.officeName} id={data.officeId} content={data.officeContent} />
        )
    }
    else if(data.officeName=="Office Events & Space Rental") {
        return(
            <OfficeEvents name={data.officeName} id={data.officeId} content={data.officeContent} />
        )
    }
    else if(data.officeName=="Office Movers & Relocators Services") {
        return(
            <OfficeMove name={data.officeName} id={data.officeId} content={data.officeContent} />
        )
    }
    else if(data.officeName=="Hardware/Software Support") {
        return(
            <OfficeHardware name={data.officeName} id={data.officeId} content={data.officeContent} />
        )
    }

    else if(data.healthName=="Beauty & Salon Services") {
        return(
            <EventBeauty name={data.healthName} id={data.healthId} content={data.healthContent} />
        )
    }
    else if(data.healthName=="Healthy Food & Beverage") {
        return(
            <Catering name={data.healthName} id={data.healthId} content={data.healthContent} />
        )
    }
    else if(data.healthName=="Fitness & Personal Training") {
        return(
            <HealthFitness name={data.healthName} id={data.healthId} content={data.healthContent} />
        )
    }
    else if(data.healthName=="Rehabilitation & Wellness") {
        return(
            <HealthWellness name={data.healthName} id={data.healthId} content={data.healthContent} />
        )
    }

    else if(data.autoName=="Movers & Relocators") {
        return(
            <AutoMove name={data.autoName} id={data.autoId} content={data.autoContent} />
        )
    }
    else if(data.autoName=="Car Repair & Maintenance Services") {
        return(
            <AutoCar name={data.autoName} id={data.autoId} content={data.autoContent} />
        )
    }
    else if(data.autoName=="Office Movers & Relocators Services") {
        return(
            <AutoOffice name={data.autoName} id={data.autoId} content={data.autoContent} />
        )
    }
    else {
        return (
            <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
                <Text style={{fontSize:20}}>404 Found error:</Text>
            </View>
        )
    }
}

export default HomeCatagory;