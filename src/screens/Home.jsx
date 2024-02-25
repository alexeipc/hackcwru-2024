import React from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import { FIREBASE_AUTH } from '../config/firebase'

export default function HomeScreen(props) {
    return (
        <View>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign Out"/>
            <Text>Home Screen</Text>
        </View>
    )
}