import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

const contactScreen = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[tw`text-black text-center`]}>Welcome to the contact us Page!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default contactScreen;
