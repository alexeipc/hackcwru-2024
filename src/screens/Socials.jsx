import React, { useState } from 'react'
import { Text, View, ScrollView, Image, Modal, Pressable} from "react-native";

import Popup from '../components/Popup'
import Button from '../components/Button'

import { FIREBASE_AUTH } from '../config/firebase'
import styles from '../css/ProfileStyle'

import { FIREBASE_DB } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore"; 

const db = FIREBASE_DB;

export default function Socials() {
    return(
        <View>
            <Button title="hjfha;sli"></Button>
        </View>
    )
}