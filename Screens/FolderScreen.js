import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Feather from "react-native-vector-icons/Feather"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Folder from '../components/Folder';
import COLORS from '../constants/COLORS';
import FoldersData from '../Data/FoldersData';

export default function FolderScreen({navigation}) {


  const renderItem = ({item}) => (
    <Folder name={item.name} num={item.num} notes={item.notes} />
  )
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.editBtn}>
        <Text style={{color: COLORS.yellow, fontSize: 15,}}>Edit</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Folders</Text>

      <Text style={styles.subTitle}>On my iPhone</Text>

      <View style={styles.foldersContainer}>
        <FlatList 
        data={FoldersData}
        renderItem={renderItem}
        keyExtractor={item => item.num}
        />
      </View>
      <TouchableOpacity style={styles.createFolderBtn}>
        <Feather name='folder-plus' size={32} color={COLORS.yellow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.createNoteBtn} onPress={() => createNote()}>
        <Feather name="edit" color={COLORS.yellow} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  editBtn: {
    marginTop: 30,
    marginHorizontal: 20,
    position: "absolute",
    right: 0,
    top: 0,
  },
  title: {
    color: COLORS.white,
    marginHorizontal: 20,
    marginTop: 50,
    fontSize: 35,
    fontWeight: "bold",
  },
  subTitle: {
    color: COLORS.white,
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
  },
  foldersContainer: {
    marginTop: 20,
    backgroundColor: "#505050",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  createFolderBtn: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  createNoteBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginHorizontal: 20,
    marginBottom: 10,
  }
});
