import { Text, View, StyleSheet, ScrollView, Image} from "react-native";


function getOrganization(id) {
    return {
        name: "Planet Dog",
        information: "This is the organization to save abandoned dogs around the world.",
        type: 2,
    }
}

const getColorByType = (type) => {
  switch (type) {
    case 1:
      return 'green';
    case 2:
      return 'brown';
    case 3:
      return '#AA336A';
    default:
      return 'black'; 
  }
};

const getProjectPicture = (id) => {
    return (
        <Image source={require('../../assets/TSP2B1-3.jpeg')} style={{
                                height: 100,
                                width:  100,
                                borderRadius: '50%'
                            }}></Image>
    )
}

const getImgLinkByType = (type) => {
  switch (type) {
    case 1:
        return (<Image source={require('../../assets/environment-icon-png-14981.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>)
    case 2:
        return (<Image source={require('../../assets/dog-32-512.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>)
    case 3:
        return (<Image source={require('../../assets/pill-512.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>)
    default:
      return 'black'; 
  }
};

const ProfilePage = (props) => {
    const organization = getOrganization(props.id);
    
    return (
        <View style={[styles.centeredView, {width: '100%'}]}>
            {getProjectPicture(props.id)}
            <View style={[{margin: 10, flexDirection: 'row'}]}>
                <Text style={{fontSize: 20, color: getColorByType(organization.type)}}> {organization.name} </Text>
                {getImgLinkByType(organization.type)}
                
            </View>  
            <Text style={{margin: 10, textAlign: "center"}}>{organization.information}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
})

export default ProfilePage;