import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Dimensions } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import NavBar from './navBar';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';
import * as Animatable from "react-native-animatable";
import { StatusBar } from 'expo-status-bar';

export default function ProjectThree() {
    const days = [
        { name: 'Sun', date: '22' },
        { name: 'Mon', date: '23' },
        { name: 'Tue', date: '24' },
        { name: 'Wed', date: '25' },
        { name: 'Thur', date: '26' },
        { name: 'Fri', date: '27' },
        { name: 'Sat', date: '28' },
    ];
    return (
        <View style={[tw`w-11/12 m-auto`]}>
            <View style={[tw`flex-row justify-between items-center`, { backgroundColor: 'rgb(245, 245, 245)' }]}>
                <Image
                    source={require('../assets/images/pro3-lady.png')} // Use require for local images
                    style={{ width: 35, height: 35 }}
                />
                <View>
                    <Text style={[tw`font-bold text-black`]}>
                        Hello, Sandra
                    </Text>
                    <Text style={[tw`text-black text-center text-3`]}>
                        Today 30 Nov
                    </Text>
                </View>

                <Image
                    source={require('../assets/images/search-pro3.png')} // Use require for local images
                    style={{ width: 35, height: 35 }}
                />
            </View>
            <View style={[tw`flex-row items-center justify-between px-3 rounded-lg mt-8`, { backgroundColor: 'rgb(179,160,255)' }]}>
                <View>
                    <Text style={[tw`font-bold text-xl`]}>
                        Daily
                    </Text>
                    <Text style={[tw`font-bold text-xl`]}>
                        Challenge
                    </Text>
                    <Text style={[tw`pb-2`]}>
                        Do yor plan before 09:00 AM
                    </Text>
                    <Image
                        source={require('../assets/images/people-pro3.png')} // Use require for local images
                        style={{ width: 100, height: 35 }}
                    />
                </View>
                <View style={[tw`-mt-[19px]`]}>
                    <Image
                        source={require('../assets/images/ribbon-pro3.png')} // Use require for local images
                        style={{ width: 100, height: 149 }}
                    />
                </View>
            </View>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[tw`mt-6 mb-3`]}
                >
                    <View style={tw`flex-row flex-wrap justify-between`}>
                        {days.map((day, index) => (
                            <View
                                key={index}
                                style={[
                                    tw`rounded-xl border border-gray-600 p-4 m-2`, // Default styles
                                    day.name === 'Wed' && tw`bg-black`, // Black background for Wed
                                ]}
                            >
                                {/* Conditionally add the dot */}
                                {['Mon', 'Wed', 'Fri', 'Sat'].includes(day.name) && (
                                    <Text
                                        style={[
                                            tw`text-10 -mt-10 -mb-2 text-center`, // Default dot styles
                                            day.name === 'Wed' && tw`text-white`, // White dot for Wed
                                        ]}
                                    >
                                        .
                                    </Text>
                                )}

                                <Text
                                    style={[
                                        tw`font-bold text-center`, // Default text styles
                                        day.name === 'Wed' && tw`text-white`, // White text for Wed
                                    ]}
                                >
                                    {day.name}
                                </Text>

                                <Text
                                    style={[
                                        tw`font-bold text-center text-lg`, // Default text styles
                                        day.name === 'Wed' && tw`text-white`, // White text for Wed
                                    ]}
                                >
                                    {day.date}
                                </Text>
                            </View>

                        ))}
                    </View>
                </ScrollView>

                <View>
                    <Text style={[tw`text-black text-9 pb-2 font-bold`]}>
                        Your Plan
                    </Text>

                    <View style={[tw`flex-row gap-5`]}>
                        <View style={[tw`p-2 rounded-lg`, { backgroundColor: 'rgb(255,189,89)' }]}>
                            <Text style={[tw`text-black text-center rounded-full bg p-2 w-19`, { backgroundColor: 'rgb(255,206,135)' }]}>
                                Medium</Text>

                            <Text style={[tw`font-bold pt-4 pb-2 text-6`,]}>
                                Yoga Group
                            </Text>
                            <Text style={[tw``,]}>
                                25 Nov.
                            </Text>
                            <Text style={[tw`py-2`,]}>
                                14:00-15:00
                            </Text>
                            <Text style={[tw``,]}>
                                A5 room
                            </Text>


                            <View style={[tw`flex-row items-center mt-9`]}>
                                <Image
                                    source={require('../assets/images/eye-class.png')} // Use require for local images
                                    style={{ width: 50, height: 50 }}
                                />

                                <View style={[tw`pl-4`]}>
                                    <Text style={[tw`font-bold text-black`]}>
                                        Trainer
                                    </Text>
                                    <Text style={[tw`font-bold text-black`]}>
                                        Ade way
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={[tw`py-2 pl-3 rounded-lg bg-blue-200 flex-row`]}>
                                <View>
                                    <Text style={[tw`text-black rounded-full bg p-2 w-19 bg-blue-100 text-center`]}>
                                        Light</Text>

                                    <Text style={[tw`font-bold pt-4 pb-2 text-6`,]}>
                                        Balance
                                    </Text>
                                    <Text style={[tw``,]}>
                                        30 Nov.
                                    </Text>
                                    <Text style={[tw`py-2`,]}>
                                        18:00-19:30
                                    </Text>
                                    <Text style={[tw``,]}>
                                        A2 room
                                    </Text>
                                </View>

                                <View style={[tw`mt-15 -ml-5`]}>
                                    <Image
                                        source={require('../assets/images/pot-removebg-preview.png')} // Use require for local images
                                        style={{ width: 85, height: 115 }}
                                    />

                                </View>

                            </View>

                            <View style={[tw`bg-pink-200 py-5 gap-3 justify-center items-center mt-3 rounded-lg flex-row`, { backgroundColor: 'rgb(251,159,253)' }]}>
                                <Image
                                    source={require('../assets/images/circle1.png')} // Use require for local images
                                    style={{ width: 35, height: 35 }}
                                />
                                <Image
                                    source={require('../assets/images/circle2.png')} // Use require for local images
                                    style={{ width: 35, height: 35 }}
                                />
                                <Image
                                    source={require('../assets/images/circle3.png')} // Use require for local images
                                    style={{ width: 35, height: 35 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[tw`bg-black justify-between -mb-8 items-center py-2 gap-5 mt-5 rounded-full flex-row`]}>
                <View style={[tw`rounded-full w-15 h-15`]}>
                    <Image
                        source={require('../assets/images/house.png')}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30, // Adjust for circular effect
                        }}
                    />
                </View>
                <Image
                    source={require('../assets/images/menu.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Image
                    source={require('../assets/images/third-menu.png')}
                    style={{ width: 40, height: 40 }}
                />
                <View style={[tw`mr-2`]}>
                    <Image
                        source={require('../assets/images/forth-menu.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </View>
            </View>

        </View>
    )
}