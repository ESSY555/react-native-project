import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Navbar() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <View style={styles.navbar}>
            {/* User Image */}
            <View style={styles.leftContainer}>
                <Image
                    source={require('../../assets/images/new-lady.png')} // Use your image source
                    style={styles.userImage}
                />
            </View>

            {/* Toggle and Add to Cart buttons */}
            <View style={[tw`bg-white`]}>


                <TouchableOpacity >
                    <FontAwesome name="shopping-cart" size={24} color="green" />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        height: 60,
        elevation: 5, // Add shadow for better depth effect on Android
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20, // Space between the buttons
        marginRight: 10, // Align the buttons to the right
    },
    toggleButton: {
        backgroundColor: '#444',
        padding: 10,
        borderRadius: 25,
    },
    cartButton: {
        backgroundColor: '#444',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        gap: 5,
    },
    cartText: {
        color: '#fff',
        fontSize: 16,
    },
});
