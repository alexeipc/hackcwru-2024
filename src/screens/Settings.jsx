import Textbox from "../components/Textbox"
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";

const test = [
    {
        title: 'Over 100M+ Trees are Planted!',
        date: 'January 6, 2024',
        organization: 'TeamTrees',
        body: 'Again, the team behind TeamTrees has finally done another thing. Blah blah blah blah blah...'
    }
];

export default function Feed() {
    return(
        <View style={styles.container}>
            <Text>Settings!</Text>
            <Text>There isn't much here but connecting the Plaid API</Text>
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