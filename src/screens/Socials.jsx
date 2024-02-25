import Textbox from "../components/Textbox"
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";

const test = [
    {
        username: 'Beans',
        profilePicture: '../../assets/blank-profile.webp',
        organizations: [
            'Bean scene',
            'Bean scene 2'
        ],
        totalAmountDonated: 300,
        dateJoined: 'November 3, 2023',
    }
];

export default function Socials() {
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={test}
                renderItem={({item}) => <Textbox title={item.title} date={item.date} organization={item.organization} body={item.body}/>}>    
            <Text style={{color: 'grey', textAlign: 'center', padding: 30}}>You've reached the end of your feed</Text>
            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    },
    list: {
        textAlign: 'center'
    }
});