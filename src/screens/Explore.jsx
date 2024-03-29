import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native'
import { FIREBASE_DB, FIREBASE_AUTH } from '../config/firebase'
import Popup from '../components/Popup'

export default Explore = () => {
    const [displayProfile, setDisplayProfile] = useState(false);
    const [currentChooseId, setCurrentChooseId] = useState(0);


  const data = [
    { id: 1, image: 'data:image/jpeg;base64,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', username: 'Red Cross', points: 'Earn 💊', description: "The American Red Cross, also known as the American National Red Cross, is a nonprofit humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.", link: 'https://www.redcross.org/donate/donation.html/?cid=donation_brand&med=cpc&source=google&scode=RSG00000E017&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQQa2eNm9JyPYFxlHpIgL9R2-tOhEKCWPALw8kdG3XOqkLdjiHaV6e4aAs_VEALw_wcB&gclsrc=aw.ds'},
    { id: 2, image: 'https://assets.tiltify.com/uploads/cause/avatar/419/blob-321b36c6-1311-4476-b6ae-47446e9842fd.png', username: 'Feeding America', points: 'Earn 💊', description: 'Feeding America is a United States–based non-profit organization that is a nationwide network of more than 200 food banks that feed more than 46 million people through food pantries, soup kitchens, shelters, and other community-based agencies.', link: 'https://give.feedingamerica.org/xr7J45zwTku9ZuH4ritfLg2?s_src=Y24XP2H1Y&utm_source=google&utm_medium=cpc&utm_content=brand&utm_campaign=paid&s_subsrc=c&s_keyword=feeding%20america%20donation&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T_C5ov3OU69B1UxvCCJ5exrzeARVRcQ21-95P9T2SfXV7ALaHe5cssaAlfdEALw_wcB&gclsrc=aw.ds' },
    { id: 3, image: 'data:image/jpeg;base64,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', username: 'Cleveland Clinic', points: 'Earn 💊', description: 'Cleveland Clinic is an American nonprofit academic medical center based in Cleveland, Ohio. Owned and operated by the Cleveland Clinic Foundation, an Ohio nonprofit corporation, Cleveland Clinic was founded in 1921 by a group of faculty and alumni from the Case Western Reserve University School of Medicine. ', link: 'https://give.ccf.org/give/187824?_gl=1*juxuei*_ga*MTg0MTkwMzU2MC4xNzA4ODM1NTM4*_ga_HWJ092SPKP*MTcwODg3MDA5MS4yLjAuMTcwODg3MDA5My4wLjAuMA..#!/donation/checkout'},
    { id: 4, image: 'https://yt3.googleusercontent.com/ytc/AIf8zZRd_sL9v7qZLBLBSUJ3m7hMkQtwFj9a7x8TGPQL_KM=s900-c-k-c0x00ffffff-no-rj', username: 'ASPCA', points: 'Earn 🐕', description: 'ASPCA’s mission, as stated by ASPCA founder Henry Bergh in 1866, is “to provide effective means for the prevention of cruelty to animals throughout the United States.” The American Society for the Prevention of Cruelty to Animals® (ASPCA®) was the first humane society to be established in North America and is, today, one of the largest in the world. To this day, they have assisted over 545,000 animals.', link: 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlebrand&initialms=MP_PMK_Googlebrand&pcode=WPSN7GO2PK01&lpcode=WPSN7GO1PK01&test&ds_rl=1066461&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T-BIFDHLcHwzwjlvgi9KyPy8O4ZVhLaeh735jSssy_rpekHmHRa43waAudDEALw_wcB&gclsrc=aw.ds'},
    { id: 5, image: 'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/43681/1/?bust=1696542671', username: 'Best Friends', points: 'Earn 🐕', description: 'In 1984, a group of friends who have been leading advocacy and rescue work for years decided to realize a vision that they had long shared: to create a sanctuary for abandoned and abused animals. Thirty years later Best Friends has grown into a big movement aiming to “save them all”. They want to make every shelter and every community “no-kill” by 2025. Today, they work with national network partners and pet lifesaving centers.', link: 'https://bestfriends.org/?form=FUNLJQZPGEN&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T-kmwmUDju712cg9uhDBXfqtR0iYhFJLUcZn9lGQMd2AxrycW0R1y4aApcWEALw_wcB&gclsrc=aw.ds' },
    { id: 6, image: 'data:image/png;base64,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', username: 'Humane Society', points: 'Earn 🐕', description: 'The Humane Society “fights the big fights to end suffering for all animals”. They are focused on ending the worst forms of institutionalized animal suffering. To accomplish this, they work with governments, as well as the private sector and multinational corporations and organizations. They run public awareness and consumer education campaigns. They respond to large-scale cruelty cases and disasters around the world, providing rescue, hands-on care, logistics, and expertise when animals are caught in crises. Finally, through partnerships, training, support, collaboration, and more, they’re expanding the capacity of animal welfare advocates and organizations in the United States and globally.', link: 'https://secured.humanesociety.org/page/81880/donate/1?hl=3&ea.tracking.id=ad_gg_slink_donate_today&en_txn10=ad_gg_cpc_120727562_95281941738_466480004308_humane%20society%20donation&en_og_source=ad_gg_fndr_81880_hsus&utm_source=google&utm_medium=cpc&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T8dOFs-bBmzR1CmJDNkDD7-q2aIyy_nm8mdEZ1HqyM41dsaD_8fcw8aAvSDEALw_wcB'  },
    { id: 7, image: 'https://yt3.googleusercontent.com/ytc/AIf8zZS8by3b4B_VIGaGnjeVFsNNz60svJd8xuE0FTOj7Q=s900-c-k-c0x00ffffff-no-rj', username: 'Trees for Cities', points: 'Earn 🌳', description: 'Trees for Cities is a UK charity which aims to plant urban trees and create greener cities. Since 1993, the organisation has reported that 125,000 volunteers have planted over 1,200,000 urban trees in parks, streets, woodlands, schools, hospitals and housing estates', link:'https://shop.arborday.org/campaign/reforestation-donation/give?utm_source=google&utm_medium=paid-search&utm_campaign=08923&utm_term=10%20free%20trees&utm_content=free-trees'  },
    { id: 8, image: 'data:image/png;base64,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', username: 'Tree Aid', points: 'Earn 🌳', description: 'Tree Aid is an international development non-governmental organisation which focuses on working with people in the Sahel region in Africa to tackle poverty and the effects of climate change by growing trees, improving peoples incomes, and restoring and protecting land.', link: 'https://www.treeaid.org/donate/?donationType=One-off'   },
] 

  const [friends, setFriends] = useState(data)
  const [dropdownState, setDropdownState] = useState({})

  const toggleDropdown = (itemId) => {
    setDropdownState(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId] || false,
    }))
  }

  const handlePress = (link) => {
    Linking.openURL(link);
  };


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

  const modalPopup = (item) => {
    <Modal transparent={true} animationType="slide" visible = {displayProfile}>
            <View style= {[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]}>
                
                <View style={styles.modalView}>
                    <Popup id={item.username}/>
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
  }

  return (
    
    <View style={styles.container}>
        <TextInput style={styles.searchBar} placeholder={"Search..."}>
        </TextInput>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.flatListContent}
          data={friends}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleDropdown(item.id)}>
              <View style={styles.box}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.image} source={{ uri: item.image }}/>
                    <Text style={styles.username}>{item.username}</Text>
                </View>
                <Text style={styles.points}>{item.points}</Text>
              </View>
              {dropdownState[item.id] && (
                <View style={styles.dropdown}>
                  {/* Dropdown menu content */}
                  <Text>{item.description}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => modalPopup(item)}>
                  <Text style={styles.buttonText}>Donate!</Text>
                    </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => handlePress(item.link)}>
                  <Text style={styles.buttonText}>More Info</Text>
                    </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
        fontSize: 16,
        margin: 10,
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10
      },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#20B2AA',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  flatListContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    minWidth: '90%',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    justifyContent: 'space-between'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  username: {
    color: '#000000',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  points: {
    color: '#000000',
    fontSize: 12,
    alignSelf: 'center',
    marginRight: 10
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 5,
    maxWidth: '90%',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#20B2AA',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})