import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import HomeScreen from './HomeScreen'; // Import your HomeScreen component

type RootStackParamList = {
    HomeScreen: undefined;
    About: undefined;
    contactScreen: undefined;
};

export default function Project4() {
    // Explicitly type the navigation prop for Stack navigation
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={[tw`text-white`]}>
            <Text style={[tw`text-white`]}>This is lovely</Text>

            <TouchableOpacity
                style={[tw`flex-row items-center rounded-lg bg-black p-3`]}
                onPress={() => navigation.push("HomeScreen")} // Use push with the correct screen name
            >
                <Text style={[tw`text-white pr-2`]}>View Recipes</Text>
                <Image
                    source={require('../assets/images/right-arrow.png')}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[tw`flex-row items-center rounded-lg bg-black p-3`]}
                onPress={() => navigation.push("contactScreen")} // Use push with the correct screen name
            >
                <Text style={[tw`text-white pr-2`]}>View Recipes</Text>
                <Image
                    source={require('../assets/images/right-arrow.png')}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // Each card takes 45% of the width to fit two in a row with spacing
    },
    image: {
        width: '100%', // Ensures the image fits the card width
        height: 90,
        borderRadius: 8,
    },
});










// import { StyleSheet, TouchableOpacity } from 'react-native';
// import { Text, View, Dimensions } from 'react-native';
// import tw from 'twrnc';
// import { FontAwesome } from '@expo/vector-icons';
// import NavBar from './navBar';
// import { Image } from 'expo-image';
// import { ScrollView } from 'react-native';
// import * as Animatable from "react-native-animatable";
// import { StatusBar } from 'expo-status-bar';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type RootStackParamList = {
//     HomeScreen: undefined;
//     about: undefined;
// };
// export default function Project4() {
//     const screenWidth = Dimensions.get('window').width;
//     const imageData = [
//         {
//             id: 1,
//             image: require('../assets/images/beef1.png'),
//             text: 'Breakfast',
//         },
//         {
//             id: 2,
//             image: require('../assets/images/beef2.png'),
//             text: 'Healthy',
//         },
//         {
//             id: 3,
//             image: require('../assets/images/beef3.png'),
//             text: 'Meat',
//         },
//         {
//             id: 4,
//             image: require('../assets/images/beef4.png'),
//             text: 'Desert',
//         },
//         {
//             id: 5,
//             image: require('../assets/images/beef5.png'),
//             text: 'Launch',
//         },
//     ];
//     const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
//     return (
//         <View>


//             <ScrollView>
//                 <View style={[tw`mb-[50px]`, { backgroundColor: 'rgb(231,249,253)' }]}>
//                     <View style={[tw`p-2 flex-row justify-between items-center`, { backgroundColor: 'rgb(245, 245, 245)' }]}>

//                         <View style={[tw`flex-row gap-2 items-center`]}>
//                             <View style={[tw`rounded-full`]}>
//                                 <Image
//                                     source={require('../assets/images/man-smile.png')} // Use require for local images
//                                     style={{ width: 40, height: 40 }}
//                                 />
//                             </View>
//                             <View>
//                                 <Text style={[tw`font-bold text-black`]}>
//                                     Hello, Ade Murphy
//                                 </Text>

//                             </View>
//                         </View>

//                         <Image
//                             source={require('../assets/images/search-pro3.png')} // Use require for local images
//                             style={{ width: 35, height: 35 }}
//                         />
//                     </View>
//                     <View style={[tw`mb-[50px]`]}>

//                         <View style={[tw`p-4`, { backgroundColor: 'rgb(231,249,253)' }]}>
//                             {/* Content Container */}
//                             <View>
//                                 {/* Hot Recipes Button */}
//                                 <TouchableOpacity
//                                     style={[
//                                         tw`rounded-full text-center p-2 w-32`,
//                                         { backgroundColor: 'rgb(217,217,217)' },
//                                     ]}
//                                 >
//                                     <Text style={[tw`text-black`]}>Hot Recipes</Text>
//                                 </TouchableOpacity>

//                                 {/* Title Section */}
//                                 <View style={[tw`pt-5`]}>
//                                     <Text style={[tw`text-lg font-bold`]}>
//                                         Spicy delicious Chicken Wings
//                                     </Text>

//                                     <Text style={[tw`text-gray-700 pt-4`]}>
//                                         Juicy, tender chicken wings coated in a spicy, flavorful
//                                     </Text>
//                                     <Text style={[tw`text-gray-700`]}>
//                                         glaze that packs a delicious kick in every bite.
//                                     </Text>
//                                 </View>

//                                 {/* Tags Section */}
//                                 <View style={[tw`flex-row pt-5 gap-4`]}>
//                                     <TouchableOpacity
//                                         style={[
//                                             tw`flex-row items-center rounded-full p-2`,
//                                             { backgroundColor: 'rgb(225,243,247)' },
//                                         ]}
//                                     >
//                                         <Image
//                                             source={require('../assets/images/clock1.png')}
//                                             style={{ width: 20, height: 20 }}
//                                         />
//                                         <Text style={[tw`pl-2`]}>Hot Recipes</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity
//                                         style={[
//                                             tw`flex-row items-center rounded-full p-2`,
//                                             { backgroundColor: 'rgb(225,243,247)' },
//                                         ]}
//                                     >
//                                         <Image
//                                             source={require('../assets/images/fork.png')}
//                                             style={{ width: 20, height: 20 }}
//                                         />
//                                         <Text style={[tw`pl-2`]}>Chicken</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                                 {/* Footer Section */}
//                                 <View style={[tw`flex-row justify-between items-center mt-7`]}>
//                                     {/* Author Info */}
//                                     <View style={[tw`flex-row items-center gap-2`]}>
//                                         <Image
//                                             source={require('../assets/images/man-smile.png')}
//                                             style={{ width: 40, height: 40, borderRadius: 20 }}
//                                         />
//                                         <View>
//                                             <Text style={[tw`text-black font-semibold`]}>Ade Murphy</Text>
//                                             <Text style={[tw`text-gray-600`]}>6 December 2024</Text>
//                                         </View>
//                                     </View>
//                                     {/* View Recipes Button */}
//                                     <View style={[tw`text-white`]}>

//                                         <TouchableOpacity
//                                             style={[tw`flex-row items-center rounded-lg bg-black p-3`]}
//                                             onPress={() => navigation.push("about")} // Use push with the correct screen name
//                                         >
//                                             <Text style={[tw`text-white pr-2`]}>View Recipes</Text>
//                                             <Image
//                                                 source={require('../assets/images/right-arrow.png')}
//                                                 style={{ width: 20, height: 20 }}
//                                             />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                             </View>

//                             {/* Image Section */}
//                             <View style={[tw`mt-8 flex items-center`]}>
//                                 <Image
//                                     source={require('../assets/images/beef1.png')}
//                                     style={{ width: 300, height: 200, resizeMode: 'cover' }}
//                                 />
//                             </View>
//                         </View>


//                         <ScrollView
//                             horizontal={true}
//                             showsHorizontalScrollIndicator={false}
//                             contentContainerStyle={[tw`mt-6 mb-3`]}>
//                             <View style={[tw`flex-row gap-5 p-2`]}>
//                                 {imageData.map((item) => (
//                                     <View key={item.id} style={[tw` bg-white rounded-lg`, styles.card]}>
//                                         <Image
//                                             source={item.image}
//                                             style={{ width: 90, height: 90 }}
//                                         />
//                                         <Text style={[tw`font-bold p-3 text-center`]}>{item.text}</Text>
//                                     </View>
//                                 ))}
//                             </View>
//                         </ScrollView>

//                         <View style={[tw`p-2`]}>
//                             <Text style={[tw`font-bold text-black text-6`]}>Simple and tasty recipes</Text>
//                             <Text style={[tw`pt-2`]}>Discover simple,tasty recipes that are easy to make of </Text>
//                             <Text style={[tw`text-center pt-2`]}>flavor perfect for quick meals and satisfying cravings with minimal effeort.</Text>
//                         </View>

//                         <View style={[tw`flex-row items-center justify-between p-2`]}>
//                             {/* Text Section */}
//                             <View style={[tw`flex-1 p-2`]}>
//                                 <Text style={[tw`font-bold text-black `]}>
//                                     Everyone can become
//                                 </Text>
//                                 <Text style={[tw`font-bold text-black`]}>
//                                     Chef on their own kitchen
//                                 </Text>
//                                 <Text style={[tw`text-gray-700 pt-2`]}>
//                                     Unleash your inner chef with easy-to-follow recipes
//                                 </Text>

//                                 <TouchableOpacity
//                                     style={[tw`mt-3 bg-black p-3 rounded-lg w-full max-w-xs`]}
//                                 >
//                                     <Text style={[tw`text-white text-center`]}>Learn more</Text>
//                                 </TouchableOpacity>
//                             </View>

//                             {/* Image Section */}
//                             <View style={[tw`ml-4`]}>
//                                 <Image
//                                     source={require('../assets/images/beef1.png')}
//                                     style={{
//                                         width: 150, // Scale down for a balanced layout
//                                         height: 150, // Keep aspect ratio or square
//                                         resizeMode: 'contain',
//                                     }}
//                                 />
//                             </View>
//                         </View>


//                     </View>
//                 </View>
//             </ScrollView>
//             <NavBar />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     card: {
//         // Each card takes 45% of the width to fit two in a row with spacing

//     },
//     image: {
//         width: '100%', // Ensures the image fits the card width
//         height: 90,
//         borderRadius: 8,
//     },
// });

