import { Button, Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { FIREBASE_AUTH } from "../config/firebase";

const test = [
    {
        title: 'Over 100M+ Trees are Planted!',
        date: 'January 6, 2024',
        organization: 'TeamTrees',
        body: 'Again, the team behind TeamTrees has finally done another thing. Blah blah blah blah blah...'
    }
];

export default function Settings() {
    return(
        <View style={styles.container}>
            <Text style={{padding: 30, textAlign: 'center', fontSize: 30}}>GET OUTTTTT</Text>

            
        <View style={{padding: 30, marginTop: 100}}>
          <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign Out"/>
        </View>
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