import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";


import styles from '../css/ProfileStyle';

import { FIREBASE_DB } from '../config/firebase';

const db = FIREBASE_DB;

const test = [
    {
        username: 'Kaleb',
        image: 'url',
        organizations: [
            'Malaria Consortium',
            'Red Cross'
        ],
        totalAmountDonated: 300,
        dateJoined: 'August 3, 2023',

    }, {
        username: 'Ye',
        image: 'url',
        organizations: [
            'Against Malaria Foundation',
            'Red Cross'
        ],
        totalAmountDonated: 3,
        dateJoined: 'Jan 5, 2022',
    }, {
        username: 'Eli',
        image: 'url',
        organizations: [
            'One Tree Planted',
            'New Incentives'
        ],
        totalAmountDonated: 100000,
        dateJoined: 'November 15, 2013',
    }, {
        username: 'Connor',
        image: 'url',
        organizations: [
            'Malaria Consortium',
            'Helen Keller International'
        ],
        totalAmountDonated: 500,
        dateJoined: 'November 30, 2020',
    }, {
        username: 'Phat',
        image: 'url',
        organizations: [
            'Kids Cancer Foundation',
            'The Leukemia & Lymphoma Society',
            'Feeding Matters Inc.'
        ],
        totalAmountDonated: 20,
        dateJoined: 'July 5, 2015',
    }, {
        username: 'Jason',
        image: 'url',
        organizations: [
            'Save the Children',
            'CARE'
        ],
        totalAmountDonated: 76,
        dateJoined: 'December 21, 2023',
    }, {
        username: 'Cudi',
        image: 'url',
        organizations: [
            'Domestic Violence Crisis Center',
            'National Network to End Domestic Violence'
        ],
        totalAmountDonated: 68,
        dateJoined: 'November 3, 2023',
    }
];

export default function Socials() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={test}
                renderItem={({ item }) => <Textbox image={item.image} name={item.name} organization={item.organization} body={item.body} />}>
                <Text style={{ color: 'grey', textAlign: 'center', padding: 30 }}>Invite Friends To See More</Text>
            </FlatList>
        </View>
    )
};

styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    },
    list: {
        textAlign: 'center'
    }
});