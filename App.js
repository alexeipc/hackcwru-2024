import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { User, onAuthStateChanged } from "@firebase/auth";
import { FIREBASE_AUTH } from "./src/config/firebase";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register"
import Profile from "./src/screens/Profile"

const OutsideStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

function InsideLayout() {
  return(
    <InsideStack.Navigator initialRouteName="Profile">
      {/* <InsideStack.Screen name="Feed"/ component={Feed}> */}
      {/* <InsideStack.Screen name="Socials"/ component={Socials}> */}
      <InsideStack.Screen name="Profile" component={Profile}/>
    </InsideStack.Navigator>
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