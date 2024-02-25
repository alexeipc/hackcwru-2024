import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Text, View, FlatList, Image, Modal, Pressable, TextInput} from "react-native";

import Popup from '../components/Popup'

import { FIREBASE_AUTH } from '../config/firebase'
import styles from '../css/ProfileStyle'

import { FIREBASE_DB } from '../config/firebase';
import { collection, doc, getDocs, getDoc, addDoc, where, query, setDoc} from "firebase/firestore"; 


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
    const [useEffectTrigger, setUseEffecTrigger] = useState(false);
    

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
    }, [useEffectTrigger])

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
        return organization.length * 123 + parseInt(getTotalDonated());
    }

    function getTotalDonated() {
        var sum = 0;
        organizations.map((value, index) => {
            sum += parseFloat(value.donnated);
        })
        return sum;
    }

    
    const [donateInput_, setDonateInput] = useState();
    const donateInput = async () => {
        const donatedAmount = parseFloat(donateInput_);

        try {
            const currentUser = FIREBASE_AUTH.currentUser.email;
            const orgId = currentChooseId;

            // Use Firebase Firestore to retrieve the document
            const q = query(collection(FIREBASE_DB, 'UserOrganizationRelationship'), where('orgID', '==', orgId));
            const querySnapshot = await getDocs(q);

            let orgDoc;
            querySnapshot.forEach((doc) => {
                orgDoc = doc;
            });

            console.log(orgDoc.data());

            if (orgDoc.exists()) {
                const userData = orgDoc.data();
                const updatedDonatedAmount = parseFloat(userData.donatedAmount) + donatedAmount;

            // Use setDoc to update the document
                await setDoc(doc(FIREBASE_DB, 'UserOrganizationRelationship', orgDoc.id), { donatedAmount: updatedDonatedAmount }, { merge: true });

                console.log(`Donation successful: $${donatedAmount}`);
            } else {
                console.error('Organization not found.');
            }
            }   catch (e) {
                console.error('Error donating:', e);
            }

            // Reset the state and close the profile modal
            setDonateInput('');
            setDisplayProfile(false);
            setUseEffecTrigger(!useEffectTrigger);
    };


    return (
    <ScrollView>
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
        <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center', margin: 30, marginBottom: 15, zIndex: 100}}>
            Your Contribution Details:
        </Text>
        {/* style={styles.organizationContainter} */}
        {/* <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />}/>
         */}
         <View>
            <FlatList
                data={organizations}
                renderItem={({item}) => (
                
                <View style={{marginBottom: 30, marginTop: -30}}>
                    <Modal transparent={true} animationType="slide" visible = {displayProfile && currentChooseId == item.id}>
                        <View style= {[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]}>
                            
                            <View style={styles.modalView}>
                                <Popup id={item.name}/>
                                <TextInput placeholder='Donate!!' style={styles.input} onChangeText={setDonateInput} />
                                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                    <Pressable onPress={donateInput} style = {[styles.button, styles.buttonDonate]}>
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
                        setCurrentChooseId(item.id);
                        }} style={styles.organizationBox}>
                        
                        <Text> {item.name} </Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text style={{color: getColorByType(item.type)}}> $ {item.donnated} </Text>
                        </View>
                    </Pressable>
                </View>
            )}>
            </FlatList>
            </View>
    </ScrollView>
  );
};