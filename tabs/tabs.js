import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../pages/home';
import Request from '../pages/request';
import Inbox from '../pages/inbox'; 
import Notification from '../pages/notification';
import More from '../pages/more';

const Tab = createBottomTabNavigator();

function Tabs({ navigation, route }) {
  // const otherParam = route.params;
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, size, color}) => {
        let iconName;
        if(route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home";
        } else if (route.name === "Request") {
          iconName = focused ? "reader-sharp" : "reader-sharp";
        } else if (route.name === "Inbox") {
          iconName = focused ? "chatbubble-sharp" : "chatbubble-sharp";
        } else if (route.name === "Notification") {
          iconName = focused ? "notifications" : "notifications";
        } else if (route.name === "More") {
          iconName = focused ? "ios-menu" : "ios-menu";
        }
        return <Ionic name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#2692ee",
      tabBarInactiveTintColor: "rgb(160, 172, 183)",
      tabBarLabelPosition: "below-icon",
      tabBarLabelStyle: {
        fontSize: 14
      },
      tabBarStyle: {
        backgroundColor: "white",
        paddingBottom:6,
        paddingTop: 10,
        height:62,
        borderTopWidth:1.5
      },
    })}  
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Request" children={() => <Request userData={"otherParam"} />} options={{ headerShown: false }} />
      <Tab.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={More} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default Tabs;