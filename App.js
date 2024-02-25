import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { onAuthStateChanged } from "@firebase/auth";
import { FIREBASE_AUTH } from "./src/config/firebase";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register"
import Profile from "./src/screens/Profile"
import Explore from "./src/screens/Explore"
import Socials from "./src/screens/Socials"

const OutsideStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InsideLayout() {
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let rn = route.name;

        if(rn === "Home") {
          iconName = focused ? 'home' : 'home-outline';
        } else if(rn === "Explore") {
          iconName = focused ? 'search-sharp' : 'search-outline';
        } else if(rn === "Socials") {
          iconName = focused ? 'people-sharp' : 'people-outline';
        }

        return <Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'grey',
      tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
      tabBarStyle: { padding: 10, height: 70 }
    })}>

      <Tab.Screen name="Explore" component={Explore}/>
      <Tab.Screen name="Home" component={Profile}/>
      <Tab.Screen name="Socials" component={Socials}/>
    </Tab.Navigator>
  )
}

function LoginLayout() {
  return(
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen name="Login" component={Login} options={{headerShown: true}}/>
      <LoginStack.Screen name="Register" component={Register} options={{headerShown: true}}/>
    </LoginStack.Navigator>
  )
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return(
    <NavigationContainer>
      <OutsideStack.Navigator initialRouteName="Login-Register">
        {user ? (
          <OutsideStack.Screen name="Profile" component={InsideLayout} options={{headerShown: false}}/>
        ) : (
          <OutsideStack.Screen name="Login-Register" component={LoginLayout} options={{headerShown: false}}/>
        )}
      </OutsideStack.Navigator>
    </NavigationContainer>
  );
}

export default App;