import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native';
import COLORS from '../constants/COLORS';


export default function RegisterScreen({navigation}) {

  const [username, setUsername]= useState("");
  const [code, setCode]= useState("");

  return (
    <SafeAreaView style={styles.container} onTouchStart={Keyboard.dismiss}>
      <Text style={styles.title}>Confirm</Text>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputFields}>
          <TextInput value={username} onChangeText={(e) => setUsername(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Username" style={styles.input} />
          <TextInput value={code} onChangeText={(e) => setCode(e)} placeholderTextColor={COLORS.grey} placeholder="Enter the Code" style={styles.input} />
    </KeyboardAvoidingView>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginBtnText}>Login</Text>
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
