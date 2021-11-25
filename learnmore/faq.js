import route from 'color-convert/route';
import React from 'react';
import { RefreshControl, ScrollView, Text } from 'react-native';

export default function Faq({navigation,route}) {
    let data=route.params;
    return(
        <ScrollView
        style={{backgroundColor:"white",paddingHorizontal:15,paddingVertical:15}}
        refreshControl={
            <RefreshControl refreshing={false}
            tintColor="#EBEBEB"
            title="Loading..."
            colors={['#2692ee']}
            progressBackgroundColor="#EBEBEB"
            />
        }
        >
            <Text style={{fontSize:21,fontWeight:"bold",paddingBottom:10}}>
                {data.name}
            </Text>
            <Text style={{fontSize:19}}>
                You may cancel your job request through the app. However, we hope that you avoid last-minute cancellations as our vendors have already allocated their schedule for your job. There will be cancellation charges for certain service types as stated in job request details. We may also contact you to understand your reasons for cancellation.
            </Text>
        </ScrollView>
    )
}