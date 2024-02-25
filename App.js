import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "@firebase/auth";
import { FIREBASE_AUTH } from "./src/config/firebase";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register"
import Home from "./src/screens/Home"

const OutsideStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

function insideLayout() {
  return(
    <InsideStack.Navigator>
      {/* <InsideStack.Screen name="Feed"/ component={Feed}> */}
      {/* <InsideStack.Screen name="Socials"/ component={Socials}> */}
      <InsideStack.Screen name="Home" component={Home}/>
    </InsideStack.Navigator>
  )
}

function loginLayout() {
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
      <OutsideStack.Navigator initialRouteName="Login">
        {user ? (
          <OutsideStack.Screen name="Home" component={insideLayout} options={{headerShown: false}}/>
        ) : (
          <OutsideStack.Screen name="Login" component={loginLayout} options={{headerShown: false}}/>
        )}
      </OutsideStack.Navigator>
    </NavigationContainer>
  );
}

export default App;