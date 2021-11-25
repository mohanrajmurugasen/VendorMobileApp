import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

let helperArray = require('./userList.json');
export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allUsers: helperArray,
          usersFiltered: helperArray,
          isLoaded: false,
        };
      }
      searchUser(textToSearch) {
        this.setState({
          usersFiltered: this.state.allUsers.filter(i =>
            i.name.toLowerCase().includes(textToSearch.toLowerCase()),
            ),
        });
        if(textToSearch==textToSearch.toLowerCase()) {
          this.setState({
            isLoaded: true
          })
        }
      }
    render() {
        return(
            
                <View style={{backgroundColor:"white"}}>
                    <View style={{flexDirection:"row",marginVertical:10,marginHorizontal:20}}>
                        <Ionic name="arrow-back" size={30} style={{marginTop:8}} onPress={()=>this.props.navigation.pop()} />
                        <Text style={{fontSize:20,marginTop:9,paddingStart:30}}>Where do you need it?</Text>
                    </View>
                    <View style={{flexDirection:"row",
                        backgroundColor:"#66666630",
                        marginHorizontal:20,
                        paddingLeft:15,
                        borderRadius:30
                        }}>
                            <Ionic name="search" size={25} style={{marginTop:12,color:"#666"}} />
                            <TextInput
                            placeholder="search"
                            style={{paddingLeft:10,fontSize:20,color:"black"}}
                            onChangeText={text=>{this.searchUser(text)}}
                            />
                    </View>
                    <View style={{height:0.8,backgroundColor:"gray",marginTop:20}}></View>
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
                    {this.state.usersFiltered.map((item) => (
                    <View key={item.id} style={this.state.isLoaded ? styles.loaded : { display: "none" }}>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Location details',item)}
                        >
                            <View style={{flexDirection:"row",backgroundColor:"white",borderBottomColor:"gray",borderBottomWidth:1,marginHorizontal:15,paddingVertical:15}}>
                                <Ionic name="ios-location-sharp" style={{fontSize:30,color:"rgb(153, 162, 169)",paddingRight:10}} />
                                <Text style={this.state.isLoaded ? styles.loaded : { display: "none" }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    ))}
                    </ScrollView>
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    loaded: {
      fontSize: 20
    }
  })