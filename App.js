import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import "./global.css";

import config from './tamagui.config.js';
import { TamaguiProvider } from 'tamagui';

export default function App() {
  return (
    // <NavigationContainer>

        <TamaguiProvider config={config}>
      <NavigationContainer>
        {/* <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
        </Text>TamaguiProvider config={config}>
        <View />
        </TamaguiProvider>
        </View> */}
        <StatusBar backgroundColor="orange" barStyle="light-content" />
        <RootNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>

    </TamaguiProvider>
    // <AppNavigator />
    // <View style={styles.container}>

    //   <Text>Hello World!</Text>
    //   <StatusBar style="auto" />

    // </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
