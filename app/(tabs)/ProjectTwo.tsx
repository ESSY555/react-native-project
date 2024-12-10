import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Image, Modal } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

interface CartItem {
    name: string;
    price: number;
    type: string;
}

export default function ProjectTwo() {
    const [active, setActive] = useState('All');
    const [cart, setCart] = useState<CartItem[]>([]); // Explicitly define the type of cart
    const [message, setMessage] = useState<string>(''); // State for success message
    const [isModalVisible, setIsModalVisible] = useState(false); // State to control the modal visibility

    // Separate Animated Values for each image
    const spinValue1 = useState(new Animated.Value(0))[0];
    const spinValue2 = useState(new Animated.Value(0))[0];
    const spinValue3 = useState(new Animated.Value(0))[0];

    useEffect(() => {
        // Spin animation for Image 1
        Animated.loop(
            Animated.timing(spinValue1, {
                toValue: 1,
                duration: 2000, // 2 seconds
                useNativeDriver: true,
            })
        ).start();

        // Spin animation for Image 2
        Animated.loop(
            Animated.timing(spinValue2, {
                toValue: 1,
                duration: 3000, // 3 seconds
                useNativeDriver: true,
            })
        ).start();

        // Spin animation for Image 3
        Animated.loop(
            Animated.timing(spinValue3, {
                toValue: 1,
                duration: 4000, // 4 seconds
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue1, spinValue2, spinValue3]);

    // Interpolations for each image's unique spin style
    const spin1 = spinValue1.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const spin2 = spinValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'], // Counterclockwise spin
    });

    const spin3 = spinValue3.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'], // Faster spin with double rotation
    });

    // Function to handle adding items to the cart
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item]);
        setMessage(`${item.name} added to cart!`); // Show success message
        // Hide the message after 2 seconds
        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    return (
        <View style={[tw``]}>
            <View style={styles.navbar}>
                {/* User Image */}
                <View style={styles.leftContainer}>
                    <Image
                        source={require('../../assets/images/new-lady.png')} // Use your image source
                        style={styles.userImage}
                    />
                </View>

                {/* Cart Icon with Count */}
                <View style={[tw`bg-white`]}>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <FontAwesome name="shopping-cart" size={24} color="green" />
                        {cart.length > 0 && (
                            <View style={styles.cartBadge}>
                                <Text style={styles.cartBadgeText}>{cart.length}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={[tw`bg-gray-200 p-5 mb-[55px]`]}>
                <Text style={[tw`text-xl text-black`]}>What Would you</Text>
                <View style={[tw`flex-row bg-gray-200 items-center gap-2`]}>
                    <Text style={[tw`text-xl text-black`]}>
                        like <Text style={[tw`font-bold`]}>to order?</Text>
                    </Text>

                    {/* Spinning Image 1 */}
                    <Animated.Image
                        source={require('../../assets/images/round-cap.png')}
                        style={[tw`rounded-full w-6 h-6`, { transform: [{ rotate: spin1 }] }]}
                    />
                </View>

                {/* Horizontal Scroll Section */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[tw`mt-6 mb-3`]}
                >
                    {['All', 'Poke', 'Bowl', 'Soup', 'Dessert', 'Meat', 'meat pie'].map((item) => (
                        <Text
                            key={item}
                            style={[
                                styles.text,
                                tw`mr-4`,
                                item === active ? { color: 'green' } : {},
                            ]}
                            onPress={() => setActive(item)}
                        >
                            {item}
                        </Text>
                    ))}
                </ScrollView>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[tw`mt-4 flex-row gap-5`]}
                >
                    <View style={tw`bg-white rounded-lg p-3 shadow-lg items-center overflow-hidden w-50`}>
                        {/* Spinning Image 2 */}
                        <Animated.Image
                            source={require('../../assets/images/plate-food.png')}
                            style={[tw`w-28 h-28 rounded-md mb-2 -mr-22 -mt-3`, { transform: [{ rotate: spin2 }] }]}
                        />

                        <View style={tw`items-center mb-3`}>
                            <Text style={tw`text-sm text-gray-500`}>NON-VEGETERIAN</Text>
                            <Text style={tw`text-lg font-bold text-gray-800`}>Crispy Chicken Fish</Text>
                        </View>

                        <View style={tw`flex-row justify-between items-center w-full`}>
                            <Text style={tw`text-lg font-bold text-green-700`}>$12.99</Text>
                            <TouchableOpacity
                                style={tw`bg-green-700 rounded-full p-2`}
                                onPress={() =>
                                    addToCart({
                                        name: 'Crispy Chicken Fish',
                                        price: 12.99,
                                        type: 'NON-VEGETERIAN',
                                    })
                                }
                            >
                                <FontAwesome name="plus" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={tw`bg-white rounded-lg p-3 shadow-lg items-center overflow-hidden w-50`}>
                        {/* Spinning Image 3 */}
                        <Animated.Image
                            source={require('../../assets/images/plate-two.png')}
                            style={[tw`w-28 h-28 rounded-md mb-2 -mr-22 -mt-3`, { transform: [{ rotate: spin3 }] }]}
                        />

                        <View style={tw`items-center mb-3`}>
                            <Text style={tw`text-sm text-gray-500`}>VEGETERIAN</Text>
                            <Text style={tw`text-lg font-bold text-gray-800`}>Chilli & Avocado</Text>
                        </View>

                        <View style={tw`flex-row justify-between items-center w-full`}>
                            <Text style={tw`text-lg font-bold text-green-700`}>$13.99</Text>
                            <TouchableOpacity
                                style={tw`bg-green-700 rounded-full p-2`}
                                onPress={() =>
                                    addToCart({
                                        name: 'Chilli & Avocado',
                                        price: 13.99,
                                        type: 'VEGETERIAN',
                                    })
                                }
                            >
                                <FontAwesome name="plus" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`bg-white rounded-lg p-3 shadow-lg items-center overflow-hidden w-50`}>
                        {/* Spinning Image 3 */}
                        <Animated.Image
                            source={require('../../assets/images/plate-two.png')}
                            style={[tw`w-28 h-28 rounded-md mb-2 -mr-22 -mt-3`, { transform: [{ rotate: spin3 }] }]}
                        />

                        <View style={tw`items-center mb-3`}>
                            <Text style={tw`text-sm text-gray-500`}>VEGETERIAN</Text>
                            <Text style={tw`text-lg font-bold text-gray-800`}>Chilli & Avocado</Text>
                        </View>

                        <View style={tw`flex-row justify-between items-center w-full`}>
                            <Text style={tw`text-lg font-bold text-green-700`}>$13.99</Text>
                            <TouchableOpacity
                                style={tw`bg-green-700 rounded-full p-2`}
                                onPress={() =>
                                    addToCart({
                                        name: 'Chilli & Avocado',
                                        price: 13.99,
                                        type: 'VEGETERIAN',
                                    })
                                }
                            >
                                <FontAwesome name="plus" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`bg-white rounded-lg p-3 shadow-lg items-center overflow-hidden w-50`}>
                        {/* Spinning Image 3 */}
                        <Animated.Image
                            source={require('../../assets/images/plate-two.png')}
                            style={[tw`w-28 h-28 rounded-md mb-2 -mr-22 -mt-3`, { transform: [{ rotate: spin3 }] }]}
                        />

                        <View style={tw`items-center mb-3`}>
                            <Text style={tw`text-sm text-gray-500`}>VEGETERIAN</Text>
                            <Text style={tw`text-lg font-bold text-gray-800`}>Chilli & Avocado</Text>
                        </View>

                        <View style={tw`flex-row justify-between items-center w-full`}>
                            <Text style={tw`text-lg font-bold text-green-700`}>$13.99</Text>
                            <TouchableOpacity
                                style={tw`bg-green-700 rounded-full p-2`}
                                onPress={() =>
                                    addToCart({
                                        name: 'Chilli & Avocado',
                                        price: 13.99,
                                        type: 'VEGETERIAN',
                                    })
                                }
                            >
                                <FontAwesome name="plus" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View>
                    <Text style={[tw`text-black font-bold py-5 text-8`]}>Special for you</Text>
                    <View style={[tw`bg-green-800 rounded-lg flex-row gap-4`]}>
                        <Animated.Image
                            source={require('../../assets/images/left-plate.png')}
                            style={[tw`w-30 h-30`]} // Reuse any spin
                        />
                        <View>
                            <Text style={[tw`text-white pt-3`]}>NON-VEGETERIAN</Text>
                            <Text style={[tw`text-white font-bold text-lg`]}>Chicken Curry</Text>
                            <Text style={[tw`text-white font-bold text-lg`]}>$3.99</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Cart Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={tw`text-lg font-bold text-center mb-4`}>Your Cart</Text>
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <View key={index} style={tw`py-2`}>
                                    <Text style={tw`text-black`}>{item.name}</Text>
                                    <Text style={tw`text-gray-500`}>${item.price}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={tw`text-gray-500`}>Your cart is empty.</Text>
                        )}
                        <TouchableOpacity
                            style={tw`mt-4 bg-red-500 py-2 px-4 rounded-full`}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text style={tw`text-white text-center`}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Success Message */}
            {message ? (
                <View style={tw`absolute top-10 left-17 top-10 transform -translate-x-1/2 bg-green-500 p-4 rounded-md shadow-lg`}>
                    <Text style={tw`text-white font-bold`}>{message}</Text>
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
// https://dribbble.com/shots/23040815-Fitness-App-Design-Concept