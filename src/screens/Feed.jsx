import Textbox from "../components/Textbox"
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";

const test = [
    {
        title: 'Over 100M+ Trees are Planted!',
        date: 'January 6, 2024',
        organization: 'TeamTrees',
        body: 'Again, the team behind TeamTrees has finally done another thing. Blah blah blah blah blah...'
    },
    {
        title: 'Over 10M+ Trees are Planted!',
        date: 'February 14, 2023',
        organization: 'TeamTrees',
        body: 'Recently, the team behind TeamTrees has finally done a thing. Blah blah blah blah blah...'
    },
    {
        title: 'New LLAMA model debut',
        date: 'February 13, 2023',
        organization: 'Meta',
        body: 'Meta created another version of LLAMA. Very cool.'
    },
    {
        title: 'Over 100M+ Trees are Planted!',
        date: 'January 6, 2024',
        organization: 'TeamTrees',
        body: 'Again, the team behind TeamTrees has finally done another thing. Blah blah blah blah blah...'
    },
    {
        title: 'Over 10M+ Trees are Planted!',
        date: 'February 14, 2023',
        organization: 'TeamTrees',
        body: 'Recently, the team behind TeamTrees has finally done a thing. Blah blah blah blah blah...'
    },
    {
        title: 'New LLAMA model debut',
        date: 'February 13, 2023',
        organization: 'Meta',
        body: 'Meta created another version of LLAMA. Very cool.'
    }
];

export default function Feed() {
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