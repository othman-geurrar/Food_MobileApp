import {View, Text, KeyboardAvoidingView, Platform, Animated, Dimensions, ImageBackground, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Slot} from "expo-router";
import ScrollView = Animated.ScrollView;
import {images} from "@/constants";




export default function _Layout() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView className={"bg-white h-full"} keyboardShouldPersistTaps={"handled"}>
                <View className={"w-full relative"} style={{height: Dimensions.get("screen").height / 2.25}}>
                    <ImageBackground source={images.loginGraphic} className={"size-full rounded-b-lg"} resizeMode={"cover"}/>
                    <Image source={images.logo} className={"absolute self-center size-48 -bottom-16 z-10"} resizeMode={"contain"}/>
                </View>
            <Slot />
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
