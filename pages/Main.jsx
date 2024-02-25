import { Text, View, StyleSheet, ScrollView, Image, Modal, Pressable} from "react-native";
import ProfilePage from './PopUpComponents/profilePage.jsx'
import { useState } from "react";

function getTypeDetail() {
    var organization = getDonatedOrganization();

    var donatedType = [0,0,0,0,0,0,0,0];

    organization.map(value => {
        donatedType[value.type] += 123;
    })
    return donatedType;
}

function getScore() {
    var organization = getDonatedOrganization();

    return organization.length * 123;
}

function getBankAccountMoney() {
    return "100,000"
}

function getTotalDonated() {
    var sum = 0;
    getDonatedOrganization().map((value, index) => {
        sum += value.donnated;
    })
    return sum;
}

function getDonatedOrganization() {
    var arr = [{
        id: 1,
        name: "Planet Tree",
        type: 1,
        donnated: 10,
    }, {
        id: 2,
        name: "Planet Animal",
        type: 2,
        donnated: 12,
    }, {
        id: 3,
        name: "Save Children",
        type: 3,
        donnated: 43,
    },
    {
        id: 4,
        name: "Planet Tree 1",
        type: 1,
        donnated: 10,
    }, {
        id: 5,
        name: "Planet Animal 1",
        type: 2,
        donnated: 15,
    }, {
        id: 6,
        name: "Save Children 1",
        type: 3,
        donnated: 25,
    },
    {
        id: 7,
        name: "Planet Tree 2", 
        type: 1,
        donnated: 3,
    }, {
        id: 8,
        name: "Planet Animal 2",
        type: 2,
        donnated: 23,
    }, {
        id: 9,
        name: "Save Children 1",
        type: 3,
        donnated: 4,
    },];

    return arr;
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

const RoundedBox = () => {
    const [displayProfile, setDisplayProfile] = useState(false);
    const [currentChooseId, setCurrentChooseId] = useState(0);

    return (
    <View>
        <View style={styles.scoreBox}>
            <Text>Score:</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{color: 'green', fontSize: 40}}> {getScore() + " "} </Text>
                <Image source={require('../assets/environment-icon-png-14981.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>
                <Text style={{color: 'green'}}>{getTypeDetail()[1] + "   "}</Text>
                <Image source={require('../assets/dog-32-512.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>
                <Text style={{color: 'brown'}}>{getTypeDetail()[2] + "   "}</Text>
                <Image source={require('../assets/pill-512.png')} style={{
                                height: 15,
                                width: 15,
                            }}/>
                <Text style={{color: '#AA336A'}}>{" "+getTypeDetail()[3] + "   "}</Text>
            </View>
            
        </View>
        <View style={styles.container}>
            <View style={styles.bankAndOrganizationBox}>
                <Text>Bank Account:</Text>
                <Text style={{color: 'blue', fontSize: 20}}> $ {getBankAccountMoney()}</Text>
            </View>
            <View style={styles.bankAndOrganizationBox}>
                <Text>Total Donated: </Text>
                <Text style={{color: 'brown', fontSize: 20}}>  $ {getTotalDonated()}</Text>
            </View>
        </View>
        <ScrollView style={styles.organizationContainter}>
            {getDonatedOrganization().map((value, index) => (
                <View>
                    <Modal transparent={true} animationType="slide" visible = {displayProfile}>
                        <View style= {[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}>
                            
                            <View style={styles.modalView}>
                                <ProfilePage id={currentChooseId}/>

                                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                    <Pressable style = {[styles.button, styles.buttonDonate]}>
                                        <Text>Donate</Text>
                                    </Pressable>
                                    <Pressable style = {[styles.button, styles.buttonClose]} onPress={() => setDisplayProfile(!displayProfile)}>
                                        <Text> {" Close "} </Text>
                                    </Pressable>
                                </View>
                                
                            </View>
                            
                        </View>
                        
                    </Modal>
                    <Pressable onPress={() => {
                        setDisplayProfile(true);
                        setCurrentChooseId(value.id);
                        }} style={styles.organizationBox}>
                        
                        <Text> {value.name} </Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{color: getColorByType(value.type)}}> $ {value.donnated} </Text>
                        </View>
                    </Pressable>

                </View>
                
            ))}
            
        </ScrollView>
    </View>
    
  );
};

export default function Main() {
  return (
    <View>
        < RoundedBox />
    </View>
  );
}

const styles = StyleSheet.create({
  scoreBox: {
    paddingLeft: 30,
    paddingTop: 10,

    width: '90%', // Set your desired width
    height: 100, // Set your desired height
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginVertical: 20, // Adjust margin as needed
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
  },
  organizationBox: {
    flexDirection: 'row',
    padding: 10,
    width: '90%', // Set your desired width
    height: 40, // Set your desired height
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginVertical: -15,
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width: '90%',
  },
  organizationContainter: {
    margin: 10,
    overflow: 'hidden',
  },
  bankAndOrganizationBox: {
    padding: 30,
    flex: 1,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    marginLeft: 3,
    marginRight: 3,
  },
  fixedBox: {
    width: '100%', // Set your desired width
    height: 80, // Set your desired height
    backgroundColor: 'grey',
    marginVertical: 20, // Adjust margin as needed
    alignSelf: 'center',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
    bottom: 50,
    position: 'absolute',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height: 400,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonDonate: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
});