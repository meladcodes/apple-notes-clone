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

import { useEffect, useState } from 'react';

import { Amplify, Auth, Hub } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);


const Stack = createNativeStackNavigator();


export default function App() {

  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (error) {
      setUser(null)
    }
  }
  //Check user for the first time
  useEffect( () => {
    checkUser();
    }, [])


    //Check user each time there is a change in sign in or sign out
    useEffect(() => {
      const listener = data => {
        if(data.payload.event === "signIn" || data.payload.event === "signOut") {
          checkUser();
        }
      };

      Hub.listen("auth", listener)
      return () => Hub.remove("auth", listener);
    }, [])

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
