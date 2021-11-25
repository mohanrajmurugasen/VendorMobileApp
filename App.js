// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Tabs from './tabs/tabs';
import LearnMore from './learnmore/learnmore';
import Location from './location/location';
import SearchCatagory from './search/searchcatagory';
import Searchs from './search/searchs';
import LatestView from './viewall/latestView';
import HomeView from './viewall/homeView';
import HomeCatagory from './catagory/homeCatagory';
import Cleaning from './catagory/home/cleaning';
import OverAllDetails from './catagory/overalldetails';
import EventView from './viewall/eventView';
import OfficeView from './viewall/officeView';
import Faq from './learnmore/faq';
import Message from './learnmore/message';
import LocationDetail from './location/locationDetail';
import privacy from './pages/privacy';
import termsOfUse from './pages/termsOfUse';
import { Provider } from 'react-redux';
import store from './store';
import { Vendors } from './vendors/vendors';
import PushNotification from "react-native-push-notification";
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();
 
function App() { 
  useEffect(() => {
    createChannels();
  });

  const createChannels = () => {
     PushNotification.createChannel(
       {
         channelId: "test-channel",
         channelName: "Test channel"
       }
     )
   } 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Searchs" component={Searchs} options={{ headerShown: false }} />
        <Stack.Screen name="Help & Support" component={LearnMore} />
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name="SearchCatagory" component={SearchCatagory} options={{ headerShown: false }} />
        <Stack.Screen name="LatestView" component={LatestView} />
        <Stack.Screen name="Home " component={HomeView} />
        <Stack.Screen name="Events" component={EventView} />
        <Stack.Screen name="Office" component={OfficeView} />
        <Stack.Screen name="FAQ" component={Faq} />
        <Stack.Screen name="Vendor Directory" component={Vendors} />
        <Stack.Screen name="Terms of use" component={termsOfUse} />
        <Stack.Screen name="Privacy Policy" component={privacy} />
        <Stack.Screen name="Location details" component={LocationDetail} />
        <Stack.Screen name="Send a message" component={Message} />
        <Stack.Screen name="HomeCatagory" component={HomeCatagory} options={{ headerShown: false }} />
        <Stack.Screen name="OverAllDetails" component={OverAllDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  ); 
}

export default App;