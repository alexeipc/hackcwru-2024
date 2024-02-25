import { Text, View, StyleSheet, Image } from 'react-native'

export default function SocialProfile(props) {
    const username = props.username;
    let img = require('../../assets/blank-profile.webp')
    const dateJoined = props.dateJoined;
    const orgs = props.organizations;

    if(props.profilePicture) {
        img = requireprops.profilePicture;
    }

    // img = require(imgURL);

    return(
        <View style={styles.profileBox}>
            <View style={{justifyContent: 'center'}}>
                <Image source={img}
                    style={{ height: 50, width: 50, margin: 5, marginRight: 10}}/>
            </View>
            <View>
                <Text style={styles.heading}>{username}</Text>
                <Text style={{marginRight: 60}}>Supports: {orgs[0]}, {orgs[1]}</Text>
                <Text style={{color: 'grey'}}>Date Joined: {dateJoined}</Text>
            </View>
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
        marginBottom: 10,
        flexDirection: 'row'
    },
    heading: {
        padding: 2,
        fontWeight: 'bold'
    }
});