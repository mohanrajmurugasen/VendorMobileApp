import React, { useState } from 'react';
import { View, Text, StyleSheet, RefreshControl, Image, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Logo from "../img/logo.png";
import Person from "../img/person1.jpeg";
import Air from "../img/air.jpeg";
import Plumb from "../img/plumb.jpeg";
import Electric from "../img/electric.jpeg";
import Local from "../img/local.jpeg";
import Home1 from "../img/home1.jpg";
import Home2 from "../img/image.gif";
import Home3 from "../img/image1.gif";
import Line from "../img/line.webp";
import Thumb from "../img/thumb.jpg";
import Thumb1 from "../img/thumb1.jpg";
import Thumb2 from "../img/thumb2.jpg";
import Category from './category';
import Categories from './categories';
import Kad1 from "../img/kad1.png";
import Kad from "../img/kad.png";
import FootCategory from './footcatagory';
import Hv1 from "../img/hv1.jpeg";
import Hv2 from "../img/hv2.jpeg";
import Hv3 from "../img/hv3.jpeg";
import Hv4 from "../img/hv4.jpeg";
import Hv5 from "../img/hv5.jpeg";
import Hv6 from "../img/hv6.jpeg";
import Hv7 from "../img/hv7.jpeg";
import Hv8 from "../img/hv8.jpeg";
import Hv9 from "../img/hv9.jpeg";
import Hv10 from "../img/hv10.jpeg";
import Hv11 from "../img/hv11.jpeg";
import Hv12 from "../img/hv12.jpeg";
import Hv13 from "../img/hv13.jpeg";
import Hv14 from "../img/hv14.jpeg";
import Hv15 from "../img/hv15.jpeg";
import Hv16 from "../img/hv16.jpeg";
import Ev1 from "../img/events/ev1.jpeg";
import Ev2 from "../img/events/ev2.jpeg";
import Ev3 from "../img/events/ev3.jpeg";
import Ev4 from "../img/events/ev4.jpeg";
import Ev5 from "../img/events/ev5.jpeg";
import Ev6 from "../img/events/ev6.jpeg";
import Off1 from "../img/office/off1.jpeg";
import Off2 from "../img/office/off2.jpeg";
import Off3 from "../img/office/off3.jpeg";
import Off4 from "../img/office/off4.jpeg";
import Off5 from "../img/office/off5.jpeg";
import Off6 from "../img/office/off6.jpeg";
import Hel1 from "../img/health/hel1.jpeg";
import Hel2 from "../img/health/hel2.jpeg";
import Hel3 from "../img/health/hel3.jpeg";
import Hel4 from "../img/health/hel4.jpeg";
import Au1 from "../img/auto/au1.jpeg";
import Au2 from "../img/auto/au2.jpeg";
import Au3 from "../img/auto/au3.jpeg";
import Ls1 from "../img/lesson/ls1.jpeg"
import Ls2 from "../img/lesson/ls2.jpeg"
import Ls3 from "../img/lesson/ls3.jpeg"
import Ls4 from "../img/lesson/ls4.jpeg"
import PushNotification from "react-native-push-notification";

function Home({ navigation }) {

    const [reviews,Setreviews] = useState([
        {
            name:"House Cleaning (with Basic Sanitization)",
            id:Air,
            title: "House Cleaners",
            content: "Get your home cleaned with the help of our trained cleaners. Choose from one-time, weekly, bi-weekly or monthly cleaning depending on your needs. The service comes with wide coverage areas such as the dining room, kitchen, bedroom, living room and bathroom."
        },
        {
            name:"Aircond Servicing",
            id:Plumb,
            title: "Aircond Service",
            content: "Get your aircond serviced with the help of our highly experienced experts. Our experts are familiar with various brands in Malaysia. You can select either Chemical Cleaning or Overhaul Cleaning."
        },
        {
            name:"Plumbing Repair",
            id:Electric,
            title: "Plumbers",
            content: "Get your plumbing problems fixed with the help of our plumbing experts. They are experienced in dealing with common plumbing issues such as clogged pipes, leaking pipes, low water pressure and many more."
        },
        {
            name:"Electrical Wiring / Power Point",
            id:Local,
            title: "Electrician",
            content: "Get a new electrical wiring/power point installed in your home with the help of our professionals. Our electrician professionals are highly experienced in relocating, repair, replacing and installing wiring/power points."
        },
        {
            name:"Local Moving - Budget Lorry",
            id:Person,
            title: "Local Moving Budget Lorry Service",
            content: "Move with ease with our local moving lorry service. The local moving service consists of a driver and a 1-tonne lorry. Quotes rate is based on travel as well as additional add-ons you may require for a more comfortable move such as extra movers, lorry size upgrade."
        },
])

const [review,Setreview] = useState([
    {
        homeId: Hv1,
        homeName: "Cleaning Services",
        homeContent: "Enjoy the comfort of your home without needing to worry about cleanliness! Get a peace of mind by hiring experienced cleaners to keep your home neat, tidy, and dust-free.",
    },
    {
        homeId: Hv2,
        homeName: "Plumber Services",
        homeContent: "Don't let your leaky pipes cause more damages to your home and your water bills! Leave the dirty work to the experts and get your repairs and installations done by experienced and reliable plumbers.",
    },
    {
        homeId: Hv3,
        homeName: "Lighting & Wiring Services",
        homeContent: "Want to brighten up your space with more light fixtures? Need some help from wiring experts? Get in touch with the right service providers for all your lighting and wiring installation or repair needs.",
    },
    {
        homeId: Hv4,
        homeName: "Aircond Services",
        homeContent: "Dust buildups can cause more damages to your aircond than you think! Don't sweat it and extend the lifespan of your aircond with proper services and maintenance from experienced aircond service providers.",
    },
    {
        homeId: Hv5,
        homeName: "Interior Design Services",
        homeContent: "Wish you lived in a better home? You don't have to keep your dream home in your imaginations! Make your imaginations come true with quality interior design services and live in the home of your dreams.",
    },
    {
        homeId: Hv6,
        homeName: "Home Repair & Maintenance",
        homeContent: "Sick of all the problems that your home is giving you? Get your household troubles resolved in a breeze with quality home repair and maintenance services from trusted experts.",
    },
    {
        homeId: Hv7,
        homeName: "Home Renovation & Improvement",
        homeContent: "Are you looking to give your home a makeover? Want to renovate your home but not sure who to ask? Get matched to a experienced and trusted contractor on Kaodim to give your home a facelift! Find the perfect contractor that suits your project and budget.",
    },
    {
        homeId: Hv8,
        homeName: "Security, CCTV, and Alarm",
        homeContent: "It's always better to be safe than sorry! Play a part in keeping your neighbourhood safe while protecting your family and home from intruders with professionally-installed alarm and security systems.",
    },
    {
        homeId: Hv9,
        homeName: "Landscape & Garden Design",
        homeContent: "From potted plants to trees, sprinkler systems, and outdoor furniture, we have everything you need to transform your home into the eco haven that you've always wanted. Make your dream garden come true with experienced landscaping specialists!",
    },
    {
        homeId: Hv10,
        homeName: "Pest Control Services",
        homeContent: "Is your home getting invaded by pests? Just can't deal with ants and rats? Need help getting rid of those cockroaches? Get connected to trained and trusted pest control experts to help keep your pest problems under control.",
    },
    {
        homeId: Hv11,
        homeName: "Movers & Relocators",
        homeContent: "Enjoy a fresh start by moving into your new home without the stress and trouble! Get assistance from experienced and trusted movers who will handle your furniture and belongings with utmost care.",
    },
    {
        homeId: Hv12,
        homeName: "Catering, Cakes, & Cookies",
        homeContent: "Hosting something special? Complete your event with delicious food and beverages for all your guests! Choose from home-cooked local food, western food, cakes, gourmet coffee, and more. Hire the perfect caterer for your event today!",
    },
    {
        homeId: Hv13,
        homeName: "Computer, Laptop, and Phone Service & Repair",
        homeContent: "Why replace your gadgets when you can repair them? Get your gadgets repaired by trusted and experienced repairmen who will help keep your personal information and data private and confidential.",
    },
    {
        homeId: Hv14,
        homeName: "Appliance Service & Repair",
        homeContent: "Got a broken refrigerator but don't know what to do with it? Worry no more and get your household appliances repaired by experienced and reliable repairmen. Experience quality repair services from experts that are guaranteed to satisfy.",
    },
    {
        homeId: Hv15,
        homeName: "Pets Services",
        homeContent: "Your pets deserve the best. Show them how much you love them by giving them the best experience with grooming, boarding, and training with animal-loving experts.",
    },
    {
        homeId: Hv16,
        homeName: "Smart Lock Installation",
        homeContent: "Want guaranteed safety of you home and family? Achieve a safer home by controlling and monitoring your home from anywhere.",
    },
])

const [event,Setevent] = useState([
    {
        eventId: Ev1,
        eventName: "Catering, Cakes, & Cookies",
        eventContent: "Hosting something special? Complete your event with delicious food and beverages for all your guests! Choose from home-cooked local food, western food, cakes, gourmet coffee, and more. Hire the perfect caterer for your event today!",
    },
    {
        eventId: Ev2,
        eventName: "Office Events & Space Rental",
        eventContent: "Planning an event for your company? Give your colleagues and superiors the time of their lives by planning the perfect event with the right solutions to all your event needs.",
    },
    {
        eventId: Ev3,
        eventName: "Entertainment & Events",
        eventContent: "Planning an event for a special day? Don't stress and make your event perfect by finding the solutions to your event essentials here. From catering to photobooth services, we have just what you need.",
    },
    {
        eventId: Ev4,
        eventName: "Wedding Services",
        eventContent: "Planning the perfect wedding shouldn't be stressful! Find the solutions to all your wedding needs on Kaodim - from photography services to hair and makeup services, we've got just what you need.",
    },
    {
        eventId: Ev5,
        eventName: "Photographers & Videographers",
        eventContent: "People always say to live in the moment, but why not make those moments last forever? Keep your memories alive by capturing moments into photographs and videos. Find professional photographers and videographers for your event today.",
    },
    {
        eventId: Ev6,
        eventName: "Beauty & Salon Services",
        eventContent: "Reward yourself with quality pampering sessions in the comfort of your home! Experience expert makeup, lash, hair, facial, nails, and more services with trained and trusted beauty experts on Kaodim.",
    },
])

const [office,Setoffice] = useState([
    {
        officeId: Off1,
        officeName: "Pest Control Services",
        officeContent: "Is your home getting invaded by pests? Just can't deal with ants and rats? Need help getting rid of those cockroaches? Get connected to trained and trusted pest control experts to help keep your pest problems under control.",
    },
    {
        officeId: Off2,
        officeName: "Office Events & Space Rental",
        officeContent: "Planning an event for your company? Give your colleagues and superiors the time of their lives by planning the perfect event with the right solutions to all your event needs.",
    },
    {
        officeId: Off3,
        officeName: "Office Movers & Relocators Services",
        officeContent: "Moving your business into a new location? Don't stress it and let us handle all the heavy lifting for you! Find the right movers with a truck of your choice and make your move a breeze.",
    },
    {
        officeId: Off4,
        officeName: "Office Maintenance Services",
        officeContent: "Keep your office clean and comfortable for maximum work productivity! Let our experts help manage your office - from cleaning to electrical services, we have it all.",
    },
    {
        officeId: Off5,
        officeName: "Professional & Freelance Services",
        officeContent: "Need an extra pair of hands in your company? Find experienced and reliable freelance professionals to support your business! From accountants to web developers, hire the right person to get the job done right.",
    },
    {
        officeId: Off6,
        officeName: "Hardware/Software Support",
        officeContent: "Need some tech support for your company? Trust our Kaodim experts to get your hardware, software, network, and data issues resolved! Rest assured that we will try our very best to get your problems resolved.",
    },
])

const [health,Sethealth] = useState([
    {
        healthId: Hel1,
        healthName: "Beauty & Salon Services",
        healthContent: "Reward yourself with quality pampering sessions in the comfort of your home! Experience expert makeup, lash, hair, facial, nails, and more services with trained and trusted beauty experts on Kaodim.",
    },
    {
        healthId: Hel2,
        healthName: "Healthy Food & Beverage",
        healthContent: "Need healthy solutions to your catering needs? Treat your guests to healthy and scrumptious delicacies with expert caterers who offer a wide selection of food and beverages.",
    },
    {
        healthId: Hel3,
        healthName: "Fitness & Personal Training",
        healthContent: "Want to stay fit but don't know how? Workout with expert guidance from experienced personal trainers! Get matched to the right personal trainer today.",
    },
    {
        healthId: Hel4,
        healthName: "Rehabilitation & Wellness",
        healthContent: "Experience the best care and recover your health with guidance from experienced experts. Find the right caregiver or physiotherapist who can fulfill your rehabilitation and wellness needs today.",
    },
])

const [auto,Setauto] = useState([
    {
        autoId: Au1,
        autoName: "Movers & Relocators",
        autoContent: "Enjoy a fresh start by moving into your new home without the stress and trouble! Get assistance from experienced and trusted movers who will handle your furniture and belongings with utmost care.",
    },
    {
        autoId: Au2,
        autoName: "Car Repair & Maintenance Services",
        autoContent: "Skip looking for repair shops, our top-rated mobile mechanics will come to your home or office to service your car anywhere.",
    },
    {
        autoId: Au3,
        autoName: "Office Movers & Relocators Services",
        autoContent: "Moving your business into a new location? Don't stress it and let us handle all the heavy lifting for you! Find the right movers with a truck of your choice and make your move a breeze.",
    }
])

const [lesson,Setlesson] = useState([
    {
        lessonId: Ls1,
        lessonName: "Language Lessons",
        lessonContent: "Learning a new language gives you a new skill, identity, and perspective. Get language lessons from experienced and reliable tutors and explore a whole new culture.",
    },
    {
        lessonId: Ls2,
        lessonName: "Professional Lessons",
        lessonContent: "A jack of all trades is always appreciated in the workplace. Don't hesitate to equip yourself with new knowledge and skills with the help of experienced and trusted tutors.",
    },
    {
        lessonId: Ls3,
        lessonName: "Lifestyle & Hobby Lessons",
        lessonContent: "Better balance, happier life! Achieve work-life balance by exploring new hobbies and learning something new with our experienced instructors.",
    },
    {
        lessonId: Ls4,
        lessonName: "Academic Lessons",
        lessonContent: "Learning is always better done without the stress. Give your children the best learning experience by letting them learn new knowledge in the comfort of your home with experienced and reliable tutors.",
    }
])

// const handleNotification = (item) => {
//     PushNotification.localNotification({
//         channelId: "test-channel",
//         title: "You clicked on" + item.title,
//         message: item.name
//     })
// }

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
                <View style={{ paddingVertical:20,backgroundColor:"white"}}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Location')}>
                            <Text style={styles.location}>
                                <Ionic name="ios-location-sharp" style={{fontSize:16}} />
                                {} Set your location {}
                                <Ionic name="chevron-down-outline" style={{fontSize:16}} />
                            </Text>
                        </TouchableOpacity> 
                        <Image source={Logo} style={styles.image} />
                        <Text style={styles.txt}>Hire  the best service providers</Text>
                        <Text style={styles.txt}>for your everyday needs</Text>
                    </View>
                    <TouchableHighlight activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={()=>navigation.navigate('Searchs')} style={styles.search}>
                        <Text style={styles.for}>
                            <Ionic name="search" style={{fontSize: 19}} />
                            {}  Search for service
                        </Text>
                    </TouchableHighlight>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{marginTop:20}}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                                { reviews.map(item => (
                                    <View key={item.id}>
                                        {/* onPress={() => { handleNotification(item) }} */}
                                        <TouchableOpacity onPress={()=>navigation.push('SearchCatagory', item)} >
                                            <Category imageUri={item.id} name={item.name} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20}}></View>                 
                    <View style={{marginHorizontal:20,paddingVertical:20}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                            
                            <Text style={{fontSize:18,fontWeight:"bold"}}>Latest Updates</Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('LatestView')}
                            >
                                <Text style={{color:"#2692ee",fontSize:18}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={Home1} style={{height:200,width:null,marginTop:20}} />
                        <Image source={Home2} style={{height:200,width:null,marginTop:20}} />
                        <Image source={Home3} style={{height:200,width:null,marginTop:20}} />
                    </View>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20,marginBottom:20}}></View>
                    <View style={styles.box}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>Browse through vendor directory</Text>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>and share with others</Text>
                        <Image source={Line} style={{width: 250,height:65,resizeMode:"cover",marginVertical:20}} />
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Vendor Directory')}
                        >
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:18,fontWeight:"bold",color:"#2692ee"}}>
                                    Discover all vendors from directory
                                </Text>
                                <Ionic name="chevron-forward" style={{fontSize:19,color:"#2692ee",marginTop:4,paddingLeft:2}}/>
                            </View>
                        </TouchableOpacity>
                    </View>            
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginHorizontal:20}}>                            
                            <Text style={{fontSize:18,fontWeight:"bold"}}>Home</Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('Home ')}
                            >
                                <Text style={{color:"#2692ee",fontSize:18}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { review.map(items => (
                                        <View key={items.homeId}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', items)}
                                            >
                                                <Category imageUri={items.homeId} name={items.homeName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginHorizontal:20}}>                            
                            <Text style={{fontSize:18,fontWeight:"bold"}}>Events</Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('Events')}
                            >
                                <Text style={{color:"#2692ee",fontSize:18}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { event.map(events => (
                                        <View key={events.eventId}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', events)}
                                            >
                                                <Category imageUri={events.eventId} name={events.eventName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{backgroundColor:"#e9f4fd",padding:10,paddingBottom:20}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>How it works in 3 easy steps</Text>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    <Categories imageUri={Thumb}
                                    name={"1. Request services"}
                                    txt={"Need some help? Tell us"}
                                    txt1={"what services you need and"}
                                    txt2={"where do you need them."}
                                    />
                                    <Categories imageUri={Thumb1}
                                    name={"2. Get matched"}
                                    txt={"Depending on the service,"}
                                    txt1={"we will send you up to 5"}
                                    txt2={"quotes or assign you a"}
                                    txt3={"vendor at fixed prices."}
                                    />
                                    <Categories imageUri={Thumb2}
                                    name={"3. Hire & Pay"}
                                    txt={"Hire the right vendor for"}
                                    txt1={"you. Once completed, you"}
                                    txt2={"can pay them directly"}
                                    txt3={"through the app."}
                                    />
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{marginLeft:20,fontSize:18,fontWeight:"bold",marginTop:30}}>Health & Fitness</Text>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { health.map(health => (
                                        <View key={health.healthName}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', health)}
                                            >
                                                <Category imageUri={health.healthId} name={health.healthName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20}}></View>
                    <View>
                        <Text style={{marginLeft:20,fontSize:18,fontWeight:"bold",marginTop:30}}>Automotive & Transport</Text>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { auto.map(auto => (
                                        <View key={auto.autoId}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', auto)}
                                            >
                                                <Category imageUri={auto.autoId} name={auto.autoName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}

                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20}}></View>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginHorizontal:20}}>                            
                            <Text style={{fontSize:18,fontWeight:"bold"}}>Office</Text>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('Office')}
                            >
                                <Text style={{color:"#2692ee",fontSize:18}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { office.map(office => (
                                        <View key={office.officeId}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', office)}
                                            >
                                                <Category imageUri={office.officeId} name={office.officeName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20}}></View>
                    <View>
                        <Text style={{marginLeft:20,fontSize:18,fontWeight:"bold",marginTop:30}}>Lessons</Text>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    { lesson.map(lesson => (
                                        <View key={lesson.lessonId}>
                                            <TouchableOpacity
                                            onPress={()=>navigation.navigate('HomeCatagory', lesson)}
                                            >
                                                <Category imageUri={lesson.lessonId} name={lesson.lessonName} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{height:1,backgroundColor:"#cac7c7db",marginHorizontal:20}}></View>
                    <View style={{backgroundColor:"#f2f2f2",paddingHorizontal:20,marginTop:20,paddingVertical:20}}>
                        <Text style={{fontSize:19,fontWeight:"bold"}}>Book with Kaodim to be covered with these great benefits:</Text>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                    <FootCategory imageUri={Kad1} 
                                    name={"Enjoy free insurance"}
                                    name1={"coverage for damage &"}
                                    name2={"theft."}
                                    />
                                    <FootCategory imageUri={Kad}
                                    name={"Request for reservice if you"}
                                    name1={"are not satisfied with the"}
                                    name2={"service."}
                                    />
                                </ScrollView>
                            </View>
                        </ScrollView>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>
                            <Text>Terms & conditions apply.</Text>
                            <Text style={{color: "#2692ee"}}
                            onPress={()=>navigation.navigate('Help & Support')}
                            > Learn more</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    location: {
      color: "#2692ee",
      fontSize: 16
    },
    image: {
        marginVertical: 20
    },
    txt: {
        fontSize: 18
    },
    search: {
        backgroundColor: "#cac7c7db",
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 25,
        padding: 10,
        marginVertical: 15
    },
    for: {
        fontSize: 18,
        color: "#6a6a6a"
    },
    box: {
        marginHorizontal:20,
        borderColor: "#cac7c7db",
        borderWidth: 0.8,
        alignItems: "center",
        paddingVertical: 20
    }
});

export default Home;