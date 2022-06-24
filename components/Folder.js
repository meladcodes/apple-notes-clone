import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/COLORS'
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native'


const Folder = ({name, num, notes}) => {
  const navigation = useNavigation();
     return (
    <TouchableOpacity 
    style={styles.container} 
    onPress={() => navigation.navigate("NoteScreen", {
         notes
    })}>
      
      <Icon name='folder' size={32} color={COLORS.yellow}/>

      <Text style={styles.title}>{name}</Text>

     <Text style={styles.number}>{num}</Text>

      <Icon name='chevron-right' size={15} color={COLORS.grey} style={styles.chevronIcon} />
    
    </TouchableOpacity>
  )
}

export default Folder;

const styles = StyleSheet.create({
     container: {
          padding: 10,
          color: "grey",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
     },
     title: {
          marginLeft: 10,
          fontSize: 16,
          color: COLORS.white,
          fontWeight: "500"
     },
     chevronIcon: {
          position: 'absolute',
          right: 0,
          marginRight: 10,
     },
     number: {
          position: "absolute",
          right: 0,
          marginRight: 27,
          fontSize: 15,
          color: "white",
     }
})