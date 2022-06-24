import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FolderScreen from './Screens/FolderScreen';
import NoteScreen from './Screens/NoteScreen';
import OnBoardScreen from './Screens/OnBoardScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import NoteDetailScreen from './Screens/NoteDetailScreen';
import ConfirmScreen from "./Screens/ConfirmScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  const user = false;
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        user ? (
          <>
            <Stack.Screen name='FolderScreen' component={FolderScreen}/>
            <Stack.Screen name='NoteScreen' component={NoteScreen}/>
            <Stack.Screen name='NoteDetailScreen' component={NoteDetailScreen}/>
          </>
        ) : (
          <>
            <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='ConfirmScreen' component={ConfirmScreen}/>
          </>
        )
      }
    </Stack.Navigator>
    </NavigationContainer>
  );
}
