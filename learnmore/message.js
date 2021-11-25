import React, { Component } from 'react';
import { useState } from 'react';
import { ScrollView, Text, Alert, RefreshControl,StyleSheet, TextInput,TouchableHighlight } from 'react-native';
import PushNotification from "react-native-push-notification";

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          usernameInputTxt: '',
          passwordInputTxt: '',
          refreshing: false
        };
      }
   
      
      _submit() {
        if (this.state.usernameInputTxt == '') {
          Alert.alert('Failed', 'subject is required'),[
            {text: 'Okay'},
          ];
          return;
        }
        else if (this.state.passwordInputTxt == '') {
            Alert.alert('Failed', 'Description is required'),[
              {text: 'Okay'},
            ];
            return;
        }
        PushNotification.localNotification({
          channelId: "test-channel",
          title: this.state.usernameInputTxt,
          message: this.state.passwordInputTxt,
          color: "#2692ee",
          actions: ["Reply", "Mark as read"],
          playSound: true,
          soundName: false ? 'default' : undefined,
        })
        Alert.alert('Success', 'You are submitted'),[
          {text: 'Okay'},
          this.props.navigation.pop()
        ];
        // setInterval(() => {
        //   this.props.navigation.navigate('Tabs');
        //  }, 3000)
        // this.props.navigation.pop()
      }
render() {
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
            <Text style={{fontSize:18}}>Subject</Text>
            <TextInput
                   style={styles.textInputStyle}
                   placeholder="Type Subject here.."
                   returnKeyType= {'next'}
                   autoCapitalize= "none"
                   autoCorrect= {false}
                   onSubmitEditing={(event) => {
                     this.refs.passwordTextInputRef.focus();
                   }}
                   onChangeText={(usernameInputTxt) => this.setState({usernameInputTxt})}
                   value={this.state.usernameInputTxt}
            />
            <Text style={{fontSize:18}}>Description</Text>
            <TextInput
                   style={styles.textInputStyle1}
                   placeholder="Type description here.."
                   returnKeyType= {'next'}
                   autoCapitalize= "none"
                   autoCorrect= {false}
                   onSubmitEditing={(event) => {
                     this.refs.passwordTextInputRef.focus();
                   }}
                   onChangeText={(passwordInputTxt) => this.setState({passwordInputTxt})}
                   value={this.state.passwordInputTxt}
            />
            <TouchableHighlight style={styles.button}
                   underlayColor="#094398"
                   onPress={() => this._submit()}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}
}

const styles=StyleSheet.create({
    textInputStyle: {
        height: 60,
        fontSize: 16,
        paddingLeft:10,
        color: 'black',
        borderColor: '#c3c0c0',
        borderWidth: 0.5,
        borderRadius: 5,
        marginBottom:25,
        marginTop:5
      },
      buttonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
      },
      button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: "#0064f4"
    
      },
      textInputStyle1: {
        height: 120,
        fontSize: 16,
        paddingLeft:10,
        color: 'black',
        borderColor: '#c3c0c0',
        borderWidth: 1,
        borderRadius: 5,
        marginTop:5
      },
})