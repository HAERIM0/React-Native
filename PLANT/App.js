import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from './component/Start';
import Login from './component/Login';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});