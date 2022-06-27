import { Auth } from 'aws-amplify';
import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TouchableOpacity, Alert } from 'react-native';
import COLORS from '../constants/COLORS';

//Email is taken as username

export default function RegisterScreen({route, navigation}) {

  const { email } = route.params;
  const [username, setUsername]= useState(email);
  const [code, setCode]= useState( );

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      Alert.alert('✅ Confirmation Successful');
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('❌ Error confirming...', error.message);
    }
  }


  return (
    <SafeAreaView style={styles.container} onTouchStart={Keyboard.dismiss}>
      <Text style={styles.title}>Confirm</Text>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputFields}>
          <TextInput value={username} onChangeText={(e) => setUsername(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Email" style={styles.input} />
          <TextInput value={code} onChangeText={(e) => setCode(e)} placeholderTextColor={COLORS.grey} placeholder="Enter the Code" style={styles.input} />
    </KeyboardAvoidingView>

    <TouchableOpacity onPress={() => confirmSignUp()} style={styles.loginBtn}>
      <Text style={styles.loginBtnText}>Confirm</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.registerBtn}>
      <Text style={styles.register1}>Don't have an account?</Text>
      <Text style={styles.register2}>Register</Text>
    </TouchableOpacity>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  title: {
    color: COLORS.white,
    fontSize: 40,
    alignSelf: "center",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.yellow,
    padding: 15,
    borderRadius: 10,
    color: COLORS.white,
    marginTop: 20,
  },
  inputFields: {
    marginHorizontal: 20,
    marginTop: "10%",
  },
  loginBtn: {
    backgroundColor: COLORS.yellow,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  loginBtnText: {
    color: COLORS.bg,
    fontWeight: "bold",
    fontSize: 15,
  },
  registerBtn: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  register1: {
    color: COLORS.white,
    fontSize:16,
  },
  register2: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  }
});
