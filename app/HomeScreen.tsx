import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, ScrollView, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Sidebar from './Sidebar';

type RootStackParamList = {
    Home: undefined;
    AboutScreen: undefined;
    contactScreen: undefined;
};

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const screenWidth = Dimensions.get('window').width;
    const imageData = [
        { id: 1, image: require('../assets/images/beef1.png'), text: 'Breakfast' },
        { id: 2, image: require('../assets/images/beef2.png'), text: 'Healthy' },
        { id: 3, image: require('../assets/images/beef3.png'), text: 'Meat' },
        { id: 4, image: require('../assets/images/beef4.png'), text: 'Dessert' },
        { id: 5, image: require('../assets/images/beef5.png'), text: 'Lunch' },
    ];

    return (
        <View style={[tw`flex-1 bg-gray-200`]}>
            <ScrollView>
                {/* Header Section */}
                <View style={[tw`p-4 flex-row justify-between items-center bg-gray-100`]}>
                    <View style={[tw`flex-row items-center gap-3`]}>
                        <Image source={require('../assets/images/man-smile.png')} style={{ width: 40, height: 40, borderRadius: 20 }} />
                        <Text style={[tw`font-bold text-black`]}>Hello, Ade Murphy</Text>
                    </View>
                    <Image source={require('../assets/images/search-pro3.png')} style={{ width: 35, height: 35 }} />
                </View>

                {/* Featured Recipe Section */}
                <View style={[tw`p-4`]}>
                    <Text style={[tw`font-bold text-lg`]}>Spicy Delicious Chicken Wings</Text>
                    <Text style={[tw`text-gray-600 pt-2`]}>Juicy, tender chicken wings coated in a spicy glaze.</Text>
                    <Image source={require('../assets/images/beef1.png')} style={{ width: '100%', height: 200, borderRadius: 8, marginTop: 10 }} />

                    <View style={[tw`flex-row gap-2 pt-4`]}>
                        <TouchableOpacity style={[tw`flex-row items-center rounded-full bg-blue-100 p-2`]}>
                            <Image source={require('../assets/images/clock1.png')} style={{ width: 20, height: 20 }} />
                            <Text style={[tw`pl-2`]}>30 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[tw`flex-row items-center rounded-full bg-blue-100 p-2`]}>
                            <Image source={require('../assets/images/fork.png')} style={{ width: 20, height: 20 }} />
                            <Text style={[tw`pl-2`]}>Chicken</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[tw`p-2`]}>
                    <View style={[tw`flex-row gap-4`]}>
                        {imageData.map(item => (
                            <View key={item.id} style={[tw`bg-white p-2 rounded-lg`]}>
                                <Image source={item.image} style={{ width: 90, height: 90, borderRadius: 8 }} />
                                <Text style={[tw`text-center mt-2`]}>{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>


                <TouchableOpacity style={[tw`mt-6 mx-4 bg-black p-3 rounded-lg`]} onPress={() => navigation.push('AboutScreen')}>
                    <Text style={[tw`text-white text-center`]}>Go to About Page</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[tw`mt-6 mx-4 bg-black p-3 rounded-lg`]} onPress={() => navigation.push('contactScreen')}>
                    <Text style={[tw`text-white text-center`]}>Go to About Page</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
});

export default HomeScreen;
