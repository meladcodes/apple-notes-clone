import { Keyboard, TouchableOpacity,KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { CommonActions, useRoute } from '@react-navigation/native';
import COLORS from '../constants/COLORS';
import Icon from "react-native-vector-icons/FontAwesome";


const NoteDetailScreen = ({navigation}) => {
     const route = useRoute();
     const title = route.params.title;
     const content = route.params.content;
     const [titleInput, setTitleInput] = useState()

  return (
    <SafeAreaView onTouchStart={Keyboard.dismiss} style={styles.mainContainer}>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Icon name="chevron-left" size={28} color={COLORS.yellow}/>
        <Text style={styles.backBtnText}>Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveContainer}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback>
        <View style={styles.inner}>
          <TextInput multiline={true} defaultValue={title} placeholderTextColor="lightgrey" style={styles.titleInput} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback>
        <View style={styles.inner}>
          <TextInput multiline={true} defaultValue={content} placeholderTextColor="white" style={styles.contentInput} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default NoteDetailScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  titleInput: {
    padding: 10,
    marginHorizontal:20,
    fontSize: 25,
    color: "white",
  },
  contentInput: {
    padding: 10,
    marginTop: 10,
    marginHorizontal:20,
    fontSize: 18,
    color: "white",
    fontWeight: "300",
  },
  backBtn: {
    marginHorizontal: 20,
    top: 20,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 100,
  },
  backBtnText: {
    color: COLORS.yellow,
    marginLeft: 10,
    fontSize: 17,
  },
  saveContainer: {
    position: "absolute",
    top: 40,
    right: 0,
    marginHorizontal: 20,
  },
  saveText: {
    color: COLORS.yellow,
    fontSize: 17,
  }
})