import { Auth } from 'aws-amplify';
import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TouchableOpacity, Alert } from 'react-native';
import COLORS from '../constants/COLORS';


export default function RegisterScreen({navigation}) {

  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");


  async function signIn() {
    try {
      await Auth.signIn(username, password);
      Alert.alert('✅ Sign-In Confirmed');
    } catch (error) {
      Alert.alert('❌ Error signing In...', error.message);
    }
}

  return (
    <SafeAreaView style={styles.container} onTouchStart={Keyboard.dismiss}>
      <Text style={styles.title}>Login</Text>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputFields}>
          <TextInput value={username} onChangeText={(e) => setUsername(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Email.." style={styles.input} />
          <TextInput secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Password.." style={styles.input} />
    </KeyboardAvoidingView>

    <TouchableOpacity onPress={() => signIn()} style={styles.loginBtn}>
      <Text style={styles.loginBtnText}>Login</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} style={styles.registerBtn}>
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
