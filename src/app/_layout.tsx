import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Define global providers

const RootLayout = () => {
    return <GestureHandlerRootView style={{ flex: 1 }}><Slot /></GestureHandlerRootView>;

};

export default RootLayout;
