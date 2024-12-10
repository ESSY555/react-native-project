import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/app/HomeScreen';
import AboutScreen from './../app/AboutScreen';
import contactScreen from '@/app/contactScreen';

const Stack = createStackNavigator();

const StackScreen = () => (
    <Stack.Navigator>

        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
        />

        <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: 'About Page' }}
        />
        <Stack.Screen
            name="contact"
            component={contactScreen}
            options={{ title: 'contact us Page' }}
        />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    );
}
