import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    AboutScreen: undefined;
};

interface SidebarProps {
    isVisible: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const screenWidth = Dimensions.get('window').width;

    const sidebarAnimation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(sidebarAnimation, {
            toValue: isVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isVisible]);

    const sidebarTranslateX = sidebarAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-screenWidth * 0.7, 0],
    });

    return (
        <Animated.View
            style={[
                tw`absolute top-0 left-0 bottom-0 bg-white z-50 p-4`,
                { width: screenWidth * 0.7, transform: [{ translateX: sidebarTranslateX }] },
            ]}
        >
            <Text style={[tw`text-lg font-bold mb-4`]}>Menu</Text>
            <TouchableOpacity onPress={() => navigation.push('AboutScreen')}>
                <Text style={[tw`text-blue-500 mb-3`]}>Go to About Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
                <Text style={[tw`text-red-500`]}>Close Menu</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Sidebar;
