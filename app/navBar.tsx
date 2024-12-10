import React from "react";
import { View, Text } from "@/components/Themed"; // Ensure Themed has both View and Text exported
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function NavBar() {
    return (
        <View
            style={[
                tw`absolute rounded-lg z-1000`, // Removed `fixed`
                {
                    bottom: 0, // Explicitly set bottom alignment
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgb(21, 154, 138)',
                },
            ]}
        >
            <View
                style={[
                    tw`flex-row justify-between items-center p-4 rounded-full`,
                    { backgroundColor: 'rgb(21, 154, 138)' },
                ]}
            >
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <FontAwesome name="home" size={24} color="white" />
                    <Text style={tw`text-white border-b-2 border-gray-300`}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <FontAwesome name="calendar" size={24} color="white" />
                    <Text style={tw`text-white`}>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <FontAwesome name="bar-chart" size={24} color="white" />
                    <Text style={tw`text-white`}>Charts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-1 items-center`}>
                    <FontAwesome name="user" size={24} color="white" />
                    <Text style={tw`text-white`}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
