import { Text, View, StyleSheet } from 'react-native'

export default function Textbox(props) {
    const title = props.title;
    const body = props.body;
    const date = props.date;
    const org = props.organization;

    return(
        <View style={styles.textBox}>
            <Text style={styles.heading}>{title}</Text>
            <Text>{date}</Text>
            <Text>{org}</Text>
            <Text>{body}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textBox: {
        padding: 10,
    
        width: '90%', // Set your desired width
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android
        alignSelf: 'center',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,
        marginBottom: 10
    },
    heading: {
        padding: 2,
        fontWeight: 'bold'
    }
});