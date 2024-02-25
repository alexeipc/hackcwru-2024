import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native'

export default FriendsView = () => {
  const data = [
    { id: 1, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe1', points: '1000 pts', },
    { id: 2, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe2', points: '900 pts', },
    { id: 3, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe3', points: '1200 pts', },
    { id: 4, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe4', points: '1300 pts', },
    { id: 5, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe5', points: '300 pts', },
    { id: 6, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', username: 'johndoe6', points: '100 pts', },
  ]

  const [friends, setFriends] = useState(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          
          <Text style={styles.name}>Friends</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={friends}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }}/>
                  
                  <Text style={styles.username}>{item.username}</Text>
                  <Text style={styles.points}>{item.points}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#20B2AA',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  box: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
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
    marginLeft: 30,
  },
})

/*import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';


const Separator = () => <View style={styles.separator} />;

const App = () => (
  //<SafeAreaView style={styles.container}>
  <SafeAreaView>
    <Text>

    </Text>
    <Text style={{ fontSize: 20, textAlign: 'center'}}>
  Friends
</Text>
    <Text>

    </Text>
    <View style={{flexDirection: 'row'}}>
      <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      <Button
        title= "Jason"
        color="#000000"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />

    </View>
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Button
          title="Phat"
          color="#000000"
          onPress={() => Alert.alert('Cannot press this one')}
        /> 
        <View style={{ alignItems: 'flex-end' }}>
        <Text>
            10000 pts
          </Text> 
        </View>
        
      </View>
      
    </View>
    

  </SafeAreaView>
);

const styles = StyleSheet.create({
  tinyLogo: {
    
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'left',
    //backgroundColor: '#000080',
    marginHorizontal: 10,
  },
  main: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'right',
    marginVertical: 8,
  },
  centeredContent: {
    alignItems: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;*/


