import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { FIREBASE_AUTH } from "./src/config/firebase";
import Login from "./src/screens/Login";

const OutsideStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function insideLayout() {
  return(
    <InsideStack.Navigator>
      {/* <InsideStack.Screen name="Feed"/ component={Feed}> */}
      {/* <InsideStack.Screen name="Socials"/ component={Socials}> */}
      <InsideStack.Screen name="Home" component={Home}/>
    </InsideStack.Navigator>
  )
}

function App() {
  const [user, setUser] = useState<User | null>(null);

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
          <OutsideStack.Screen name="Login" component={Login} options={{headerShown: true}}/>
        )}
      </OutsideStack.Navigator>
    </NavigationContainer>
  );
}

export default App;