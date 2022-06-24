import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import COLORS from '../constants/COLORS';
import Notes from "../assets/Notes.svg"

export default function OnBoardScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.openingText}>
      <Text style={styles.Title}>Apple Notes</Text>
      <Text style={styles.Title2}>Clone</Text>
    </View>

    <View style={styles.heroContainer}>
      <Notes width={300} height={350} />
    </View>

    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} style={styles.getStartedBtn}>
      <Text style={styles.getStartedBtnText}>Get Started</Text>
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
  Title: {
    color: COLORS.white,
    fontSize: 40,
    alignSelf: "center",
    marginTop: 30,
  },
  Title2: {
    color: COLORS.yellow,
    fontSize: 40,
    alignSelf: "center",
  },
  heroContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    alignItems: "center"
  },
  getStartedBtn: {
    backgroundColor: COLORS.yellow,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  getStartedBtnText: {
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
