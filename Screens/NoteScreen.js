import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import COLORS from '../constants/COLORS';
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { CommonActions } from '@react-navigation/native';
import Note from "../components/Note";

export default function NoteScreen({navigation}) {
  const route = useRoute();
  const notes = route.params.notes;

  const renderItem = ({item}) => (
    <Note title={item.title} content={item.content} />
  )
  console.log(notes);

  return (
    <View style={styles.container} onPress={Keyboard.dismiss}>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Icon name="chevron-left" size={28} color={COLORS.yellow}/>
        <Text style={styles.backBtnText}>Folders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.moreIcon}>
        <Feather name="align-left" size={28} color={COLORS.yellow}/>
      </TouchableOpacity>

      <Text style={styles.title}>Notes</Text>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback>
        <View style={styles.inner}>
          <TextInput placeholder="Search" placeholderTextColor="lightgrey" style={styles.input} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    <View style={styles.notesContainer}>
        <FlatList 
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  backBtn: {
    position: "absolute",
    marginHorizontal: 10,
    top: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtnText: {
    color: COLORS.yellow,
    marginLeft: 10,
    fontSize: 17,
  },
  moreIcon: {
    position: "absolute",
    top: 40,
    right: 0,
    marginHorizontal: 10,
  },
  title: {
    color: COLORS.white,
    marginHorizontal: 20,
    marginTop: 80,
    fontSize: 35,
    fontWeight: "bold",
  },
  inner: {
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 17,
    color: "lightgrey",
  },
  notesContainer: {
    marginTop: 20,
    backgroundColor: "#505050",
    marginHorizontal: 20,
    borderRadius: 10,
  }
});
