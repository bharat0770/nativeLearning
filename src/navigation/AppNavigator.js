import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MyList from "../screens/MyList";
import SearchScreen from "../screens/SearchScreen";
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }}  name="home" component={HomeScreen} />
                <Tab.Screen options={{ headerShown: false }}  name="search" component={SearchScreen} />
                <Tab.Screen options={{ headerShown: false }}  name="myList" component={MyList} />
                <Tab.Screen options={{ headerShown: false }}  name="login page" component={LoginScreen} />
        </Tab.Navigator>
    )
}
export default Tabs;