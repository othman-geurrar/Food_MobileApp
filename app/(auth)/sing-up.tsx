import {View, Text, Button} from 'react-native'
import React from 'react'
import {router} from "expo-router";

const SingUp = () => {
    return (
        <View>
            <Text>SingUp</Text>
            <Button title={"Sign In"} onPress={() => router.push("/sign-in")}/>
        </View>
    )
}
export default SingUp
