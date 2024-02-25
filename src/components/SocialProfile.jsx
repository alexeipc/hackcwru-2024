import { Text, View, StyleSheet, Image } from 'react-native'

export default function SocialProfile(props) {
    const username = props.username;
    let pfp = props.profilePicture;
    const dateJoined = props.dateJoined;
    const orgs = props.organizations;

    if(!pfp) {
        pfp =  '../../assets/blank-profile.webp';
    }

    return(
        <View style={styles.profileBox}>
            <Image source={require(pfp)} style={{ height: 20,
                                width: 20,
                            }}/>
            <Text style={styles.heading}>{username}</Text>
            <Text>{dateJoined}</Text>
            <Text>{org}</Text>
            <Text>{body}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    profileBox: {
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