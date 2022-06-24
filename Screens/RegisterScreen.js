import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native';
import COLORS from '../constants/COLORS';


export default function RegisterScreen({navigation}) {

  const [name, setName] = useState("");
  const [uesrname, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={styles.container} onTouchStart={Keyboard.dismiss}>
      <Text style={styles.title}>Register</Text>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputFields}>
          <TextInput value={name} onChangeText={(e) => setName(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Name.." style={styles.input} />
          <TextInput value={uesrname} onChangeText={(e) => setUsername(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Username.." style={styles.input} />
          <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Email.." style={styles.input} />
          <TextInput secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} placeholderTextColor={COLORS.grey} placeholder="Enter your Password.." style={styles.input} />
    </KeyboardAvoidingView>

    <TouchableOpacity style={styles.registerBtn}>
      <Text style={styles.registerBtnText}>Register</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={styles.loginBtn}>
      <Text style={styles.login1}>Already have an account?</Text>
      <Text style={styles.login2}>Login</Text>
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
  registerBtn: {
    backgroundColor: COLORS.yellow,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  registerBtnText: {
    color: COLORS.bg,
    fontWeight: "bold",
    fontSize: 15,
  },
  loginBtn: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  login1: {
    color: COLORS.white,
    fontSize:16,
  },
  login2: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  }
});
