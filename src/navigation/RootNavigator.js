import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./AppNavigator";

import AnimeInfo from "../screens/AnimeInfo";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tabs" 
        component={Tabs} 
        options={{ headerShown: false }} 
      />

      {/* Detail Screen ABOVE the tab navigator */}
      <Stack.Screen 
        name="AnimeInfo" 
        component={AnimeInfo} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
