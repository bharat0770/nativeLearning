import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    // <NavigationContainer>
    <NavigationContainer>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <RootNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
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
