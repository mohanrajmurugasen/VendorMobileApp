import React, {Component} from 'react';
import { TextInput, View, Text, ScrollView,Image, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Air from "../img/air.jpeg";
import Plumb from "../img/plumb.jpeg";
import Electric from "../img/electric.jpeg";
import Local from "../img/local.jpeg";
import Person from "../img/person1.jpeg";

let helperArray = require('./userList.json');
export default class Searchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allUsers: helperArray,
          usersFiltered: helperArray,
        };
      }

      _submit() {
        //  if (this.state.usernameInputTxt == '') {
        //    Alert.alert('Failed', 'Username is required'),[
        //      {text: 'Okay'},
        //    ];
        //    return;
        //  }
         this.props.navigation.pop()
       }

       searchUser(textToSearch) {
        this.setState({
          usersFiltered: this.state.allUsers.filter(i =>
            i.name.toLowerCase().includes(textToSearch.toLowerCase()),
            ),
        });
      }

    render() {
    return(
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
            <View style={{backgroundColor:"white"}}>
                <View style={{flexDirection:"row",marginVertical:10}}>
                    <Ionic name="arrow-back" size={30} style={{marginTop:8,paddingRight:10}} onPress={() => this._submit()} />
                    <View style={{flexDirection:"row",
                    backgroundColor:"#66666630",
                    width: '80%',
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
                </View>
                <View style={{height:0.5,backgroundColor:"gray"}}></View>               
                    <View>
                        <Text style={{fontSize:21,fontWeight:"700",padding:15}}>Popular services</Text>
                        { this.state.usersFiltered.map((item,index) => (
                            <View key={item.content}>
                                <TouchableOpacity onPress={()=>this.props.navigation.push('SearchCatagory', item)}>
                                    <View style={{flexDirection:"row",padding:15,width:'70%'}}>
                                        <Image source={Local} style={{width:106,height:80}} />
                                        <Text style={{fontSize:18,paddingHorizontal:10}}>{item.name}</Text>
                                    </View>
                                    <View style={{height:0.5,backgroundColor:"gray"}}></View>
                                </TouchableOpacity>
                            </View>
                        )) }   
                    </View>               
            </View>
        </ScrollView>
    )
                        }
}


// function Searchs({ navigation }) {
//     const [reviews,Setreviews] = useState([
//         {
//             name:"House Cleaning (with Basic \nSanitization)",
//             id:Air,
//             title: "House Cleaners",
//             content: "Get your home cleaned with the help of our trained cleaners. Choose from one-time, weekly, bi-weekly or monthly cleaning depending on your needs. The service comes with wide coverage areas such as the dining room, kitchen, bedroom, living room and bathroom."
//         },
//         {
//             name:"Aircond Servicing",
//             id:Plumb,
//             title: "Aircond Service",
//             content: "Get your aircond serviced with the help of our highly experienced experts. Our experts are familiar with various brands in Malaysia. You can select either Chemical Cleaning or Overhaul Cleaning."
//         },
//         {
//             name:"Plumbing Repair",
//             id:Electric,
//             title: "Plumbers",
//             content: "Get your plumbing problems fixed with the help of our plumbing experts. They are experienced in dealing with common plumbing issues such as clogged pipes, leaking pipes, low water pressure and many more."
//         },
//         {
//             name:"Electrical Wiring / Power Point",
//             id:Local,
//             title: "Electrician",
//             content: "Get a new electrical wiring/power point installed in your home with the help of our professionals. Our electrician professionals are highly experienced in relocating, repair, replacing and installing wiring/power points."
//         },
//         {
//             name:"Local Moving - Budget Lorry",
//             id:Person,
//             title: "Local Moving Budget Lorry Service",
//             content: "Move with ease with our local moving lorry service. The local moving service consists of a driver and a 1-tonne lorry. Quotes rate is based on travel as well as additional add-ons you may require for a more comfortable move such as extra movers, lorry size upgrade."
//         },
//     ])
//     return(
//         <ScrollView
//         refreshControl={
//             <RefreshControl
//               refreshing={false}
//               tintColor="#EBEBEB"
//               title="Loading..."
//               colors={['#2692ee']}
//               progressBackgroundColor="#EBEBEB"
//             />
//             }
//         >
//             <View style={{backgroundColor:"white"}}>
//                 <View style={{flexDirection:"row",marginVertical:10}}>
//                     <Ionic name="arrow-back" size={30} style={{marginTop:8}} onPress={()=>navigation.pop()} />
//                     <View style={{flexDirection:"row",
//                     backgroundColor:"#66666630",
//                     width:370,
//                     paddingLeft:15,
//                     borderRadius:30
//                     }}>
//                         <Ionic name="search" size={25} style={{marginTop:12,color:"#666"}} />
//                         <TextInput
//                         placeholder="search"
//                         style={{paddingLeft:10,fontSize:20,color:"black"}}
//                         />
//                     </View>
//                 </View>
//                 <View style={{height:1,backgroundColor:"gray"}}></View>               
//                     <View>
//                         <Text style={{fontSize:21,fontWeight:"700",padding:15}}>Popular services</Text>
//                         { reviews.map(item => (
//                             <View key={item.id}>
//                                 <TouchableOpacity onPress={()=>navigation.push('SearchCatagory', item)}>
//                                     <View style={{flexDirection:"row",padding:15}}>
//                                         <Image source={item.id} style={{width:106,height:80}} />
//                                         <Text style={{fontSize:18,paddingHorizontal:10}}>{item.name}</Text>
//                                     </View>
//                                     <View style={{height:1,backgroundColor:"gray"}}></View>
//                                 </TouchableOpacity>
//                             </View>
//                         )) }   
//                     </View>               
//             </View>
//         </ScrollView>
//     )
// }

// export default Searchs;