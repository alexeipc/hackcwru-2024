import React, { Component, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Alert, } from 'react-native';

export default function Explore() {
  return (    
    <View>
      <View style2={styles.container}>
      <TextInput //searchbar
        style={{
          flex: 1,
          borderColor: 'gray',
          backgroundColor: 'powderblue'
        }}
        defaultValue="Search"
      />
      <StatusBar style="auto" />
      </View>
      <FlatList data={[{key: 'malaria consotium'}]}

      />
    </View>

  
  );
}




export orgExplorePage = () => {
  const orgData =[
    {
      id = 1,
      name: 'Malaria Consortium',
      tags: ['Malaria', 'Africa'],
      siteLink:'https://www.malariaconsortium.org/',
      description:'Malaria Consortium is one of the world’s leading non-profit organisations specialising in the prevention, control and treatment of malaria and other communicable diseases among vulnerable populations. Our mission is to save lives and improve health in Africa and Asia, through evidence-based programmes that combat targeted diseases and promote universal health coverage', 
      icon:'https://www.malariaconsortium.org/website-2013/images_social/mc-social.png',
      output: ['Number of children treated with a full course of medicine', '$6.66']
    },
    {
      id = 2,
      name: 'Against Malaria Foundation',
      tags: ['Malaria','Africa'],
      siteLink:'https://www.againstmalaria.com/',
      description:'We help protect people from malaria. We fund anti-malaria nets, specifically long-lasting insecticidal nets (LLINs), and work with distribution partners to ensure they are used. We track and report on net use and impact.',
      icon:'https://www.againstmalaria.com/images/logo_AMF.gif',
      outcome: ['Number of nets delivered to households', '$5.51']
    },
    {
      id = 3,
      name: 'One Tree Planted',
      tags:['Environment'],
      siteLink:'https://onetreeplanted.org/',
      description:'We want to make it simple for anyone to help the environment by planting trees. Together we can restore forests, create habitat for biodiversity, and make a positive social impact around the world.',
      icon:One_Tree_Plante.png,
      outcome: ['Number of trees planted', '$1.00']
    }
  ] 

  const [options, setOptions] = useState(orgData)
  const [query, setQuery] = useState()

  const cardClickEventListener = item => {
    Alert.alert(item.name)
  }

  const tagClickEventListener = tagName => {
    Alert.alert(tagName)
  }

  const renderTags = item => {
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.btnColor}
          onPress={() => tagClickEventListener(tag)}>
          <Text>{tag}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{ uri: 'https://img.icons8.com/color/70/000000/search.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            onChangeText={q => setQuery(q)}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { borderColor: item.color }]}
              onPress={() => {
                cardClickEventListener(item)
              }}>
              <View style={styles.cardContent}>
                <Image style={[styles.image, styles.imageContent]} source={{ uri: item.icon }} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={[styles.cardContent, styles.tagsContent]}>{renderTags(item)}</View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center',
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: '#eee',
    marginTop: 5,
  },
})
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
});

const orgData = () => {
  const data =[
    {
      name: 'Malaria Consortium',
      tags: ['Malaria', 'Africa'],
      siteLink:'https://www.malariaconsortium.org/',
      description:'Malaria Consortium is one of the world’s leading non-profit organisations specialising in the prevention, control and treatment of malaria and other communicable diseases among vulnerable populations. Our mission is to save lives and improve health in Africa and Asia, through evidence-based programmes that combat targeted diseases and promote universal health coverage', 
      icon:'https://www.malariaconsortium.org/website-2013/images_social/mc-social.png',
      output: ['Number of children treated with a full course of medicine', '$6.66']
    },
    {
      name: 'Against Malaria Foundation',
      tags: ['Malaria','Africa'],
      siteLink:'https://www.againstmalaria.com/',
      description:'We help protect people from malaria. We fund anti-malaria nets, specifically long-lasting insecticidal nets (LLINs), and work with distribution partners to ensure they are used. We track and report on net use and impact.',
      icon:'https://www.againstmalaria.com/images/logo_AMF.gif',
      outcome: ['Number of nets delivered to households', '$5.51']
    },
    {
      name: 'One Tree Planted',
      tags:['Environment'],
      siteLink:'https://onetreeplanted.org/',
      description:'We want to make it simple for anyone to help the environment by planting trees. Together we can restore forests, create habitat for biodiversity, and make a positive social impact around the world.',
      icon:'data:image/png;base64,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',
      outcome: ['Number of trees planted', '$1.00']
    }
  ] 
}

