import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Image, Modal, Pressable} from "react-native";

import Popup from '../components/Popup'

import { FIREBASE_AUTH } from '../config/firebase'
import styles from '../css/ProfileStyle'

import { FIREBASE_DB } from '../config/firebase';
import { collection, doc, getDocs, getDoc, addDoc, where, query} from "firebase/firestore"; 


const db = FIREBASE_DB;

async function printAllOrganization() {
  try {
    
    const currentUser = FIREBASE_AUTH.currentUser.email;
    
    const q = query(collection(FIREBASE_DB, 'UserOrganizationRelationship'), where (
        "userEmail", "==", currentUser
    ))

    const querySnapshot = await getDocs(q);
    
    return querySnapshot
    
  } catch (e) {
     console.error("Error fetching data:", e);
  }
}

function getBankAccountMoney() {
    return "100,000"
}

function getDonatedOrganization() {
    var arr = [];
    printAllOrganization().then(
        (data) => {
            data.forEach((doc) => {
                var element = {};
                element.id = doc.data().orgID;
                element.donnated = doc.data().donatedAmmount;  
                element.name = doc.data().name;
                element.type = doc.data().type;
                
                arr.push(element)
            })
            //console.log(arr);
        }
    )

    var arr1 = [{
        id: 1,
        name: "Planet Tree",
        type: 1,
        donnated: 10,
    }, 
    {
        id: 1.5,
        name: "Planet Tree",
        type: 1,
        donnated: 43,
    },
    {
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
    },{
      id: 10,
      name: "Save Children 2",
      type: 3,
      donnated: 4,
  }];

    return arr1;
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

export default Main = () => {

    const [displayProfile, setDisplayProfile] = useState(false);
    const [currentChooseId, setCurrentChooseId] = useState(0);
    const [organizations, setOrganizations] = useState([]);
    

    useEffect(() => {
        async function getData() {
            data = await printAllOrganization();
        
                    arr = []
                    data.forEach((doc) => {
                        var element = {};
                        element.id = doc.data().orgID;
                        element.donnated = doc.data().donatedAmount;  
                        element.name = doc.data().name;
                        element.type = doc.data().type;
                
                        arr.push(element)
                    })
            setOrganizations(arr)
        }
        getData();
    }, [])

    function getTypeDetail() {
        var organization = organizations;

        var donatedType = [0,0,0,0,0,0,0,0];

        organization.map(value => {
            donatedType[value.type] += 123;
        })
        return donatedType;
    }

    function getScore() {
        var organization = organizations;
        return organization.length * 123;
    }

    function getTotalDonated() {
        var sum = 0;
        organizations.map((value, index) => {
            sum += value.donnated;
        })
        return sum;
    }

    return (
    <ScrollView style={{height: '100%'}}>
        <View style={styles.scoreBox}>
            <Text>Your Contribution:</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{color: 'green', fontSize: 40}}> {getScore() + " "} </Text>
                <Image source={require('../../assets/environment-icon-png-14981.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>
                <Text style={{color: 'green'}}>{getTypeDetail()[1] + "   "}</Text>
                <Image source={require('../../assets/dog-32-512.png')} style={{
                                height: 20,
                                width: 20,
                            }}/>
                <Text style={{color: 'brown'}}>{getTypeDetail()[2] + "   "}</Text>
                <Image source={require('../../assets/pill-512.png')} style={{
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
        <Text style={{width: '80%', alignSelf: 'center', marginTop: 10, paddingBottom: 10, zIndex: 100}}>
            Detail of Your Contribution:
        </Text>
        {/* style={styles.organizationContainter} */}
        {/* <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />}/>
         */}
         <ScrollView style={styles.organizationContainter}>
            
            {organizations.map((value, index) => (
                <View>
                    <Modal transparent={true} animationType="slide" visible = {displayProfile && currentChooseId == value.id}>
                        <View style= {[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}>
                            
                            <View style={styles.modalView}>
                                <Popup id={currentChooseId}/>

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
        <View style={{paddingTop: 30}}>
          <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign Out"/>
        </View>
        
    </ScrollView>
  );
};