import {View, Text} from 'react-native'
import React from 'react'
import {Navigator, Redirect} from "expo-router";
import Slot = Navigator.Slot;

export default function _Layout() {
    const isAthenticated = false ;
    if(!isAthenticated) return <Redirect href={"/sign-in"} />
    return <Slot />
}
