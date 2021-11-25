/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {
   StyleSheet, 
   Text, 
   View,
   ScrollView,
   Alert,
   TextInput,
   Dimensions,
   TouchableHighlight,
   Platform,
   Image,
   RefreshControl,
   fetchData
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import PushNotification from "react-native-push-notification";

 import Cond from "../img/logo.png";
import { useState, useEffect } from 'react';
import store, {increment, decrement} from '../store';
 
 const deviceWidth = Dimensions.get('window').width;
 const deviceHeight = Dimensions.get('window').height;
 
 export default function Login({navigation}) {
   const [[usernameInputTxt,passwordInputTxt], setstates] = useState(["",""]);
   const [refreshing,setrefresh] = useState(false);

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

   const _submit = () => {
     if (usernameInputTxt == '') {
      // store.dispatch({ type: decrement });
      Alert.alert('Failed', 'Email or Mobile Number is required'),[
        {text: 'Okay'},
      ];
     }
     else {
        store.dispatch({ type: increment });
        navigation.pop()
     }
   }
 
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  //      usernameInputTxt: '',
  //      passwordInputTxt: '',
  //      refreshing: false,  
  //    };
  //  }
  //  componentDidMount() {
  //    this.createChannels();
  //  }
 
  //  createChannels = () => {
  //    PushNotification.createChannel(
  //      {
  //        channelId: "test-channel",
  //        channelName: "Test channel"
  //      }
  //    )
  //  }
   
  //  _submit() {
  //    let val = this.state.usernameInputTxt;
  //    if (val == '') {
  //      Alert.alert('Failed', 'Username is required'),[
  //        {text: 'Okay'},
  //      ];
  //      return;
  //    }
  //    this.props.navigation.pop()
  //  }
 
     return (
       <View style={styles.container}>
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
 
             <View style={{alignItems: 'center', justifyContent: 'center'}}>
 
               <View style={styles.imageContainer}>
                 <Image
                   resizeMode="contain"
                   source={Cond}
                   style={styles.image}
                 />
               </View>

               <View>
                 <Text style={styles.temp}>Please provide your information to receive updates on job request</Text>
               </View>

                <TouchableHighlight style={styles.buttons}
                   underlayColor="#23345a"
                   onPress={() => alert("Facebook Login")}
                 >
                  <Text style={styles.buttonText}>Login with facebook</Text>
                </TouchableHighlight>

                <View style={{alignItems:"center"}}>
                  <View style={styles.line} />
                  <Text style={styles.or}>or</Text>
                </View>

               <View style={styles.formContainer}>
                 <Text style={{fontSize:17,paddingBottom: 10,color: '#6b6a6a'}}>Mobile number or email</Text>
                 <TextInput
                   style={styles.textInputStyle}
                   placeholder="Enter your email or mobile"
                   returnKeyType= {'next'}
                   autoCapitalize= "none"
                   autoCorrect= {false}
                   onSubmitEditing={(event) => {
                     refs.passwordTextInputRef.focus();
                   }}
                   onChangeText={(usernameInputTxt) => setstates([usernameInputTxt,""])}
                   value={usernameInputTxt}
                 />
 
                 <View style={styles.textInputBottomLine} />
 
                 <TouchableHighlight style={styles.button}
                   underlayColor="#094398"
                   onPress={() => _submit()}
                 >
                   <Text style={styles.buttonText}>Continue</Text>
                 </TouchableHighlight>
 
                 <TouchableHighlight style={styles.buttonSignup}
                   underlayColor={'transparent'}
                   onPress={() => {
                     Alert.alert('Info', 'Don\'t have account clicked'),[
                       {text: 'Okay'},
                     ];
                   }}
                 >
                   <Text style={[styles.buttonTextSignup, {color: '#6D6E70'}]}>Don't have account? Click here</Text>
                 </TouchableHighlight>
 
                 <View style={styles.viewTextRights}>
                   <Text style={styles.textRights}>© 2018 All Rights Reserved</Text>
                 </View>
 
               </View>
             </View>
           </ScrollView>
       </View>
     );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFFFFF',
     paddingTop:15
   },
   imageContainer: {
     alignItems: 'center',
   },
   image: {
     width: 230,
     height: 120,
   },
   formContainer: {
     marginTop: 10,
     paddingHorizontal: 30,
   },
   textInputStyle: {
     height: 40,
     fontSize: 16,
     paddingLeft:10,
     color: 'black',
     borderColor: '#c3c0c0',
     borderWidth: 1,
     borderRadius: 5
   },
   temp: {
     textAlign: 'center',
     fontSize: 17,
     lineHeight: 25,
     paddingHorizontal: 30,
     color: '#4a4a4a'
   },
   textInputBottomLine: {
     height: 1,
     backgroundColor: (Platform.OS == 'ios') ? '#E6E7E9': 'transparent',
   },
   button: {
     height: 40,
     width: 300,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 40,
     borderRadius: 5,
     borderWidth: 2,
     borderColor: 'transparent',
     backgroundColor: "#0064f4"
 
   },
   buttons: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: "#3b5998"

  },
  or: {
    fontSize: 17,
    color: '#c3c0c0',
    borderColor: '#c3c0c0',
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    width: 47,
    paddingLeft: 15,
    marginTop: 30,
    marginBottom: 20
  },
   buttonText: {
     fontSize: 17,
     color: 'white',
     fontWeight: 'bold',
   },
   buttonSignup: {
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 30,
   },
   buttonTextSignup: {
     fontSize: 12,
   },
   viewTextRights: {
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 30,
   },
   textRights: {
     fontSize: 10,
     color: '#A3BF3A',
   },
 });