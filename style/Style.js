import React, {Fragment} from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlignVertical: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    color:'red',
    height:45,
    width:'100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  clist: {
      padding: 10,
      marginTop: 17,
      width:'80%',  
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   nlist: {
      padding: 10,
      marginTop: 17,
      flexDirection: 'row',
      width:'100%',  
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   text: {
      color: 'white'
   },
    input: {
      margin: 15,
      height: 40,
      width:135,
      backgroundColor: '#fff',
      borderColor: 'dodgerblue',
      borderWidth: 1
   },
    input1: {
      margin: 15,
      height: 40,
      width:'auto',
      backgroundColor: '#fff',
      borderColor: 'dodgerblue',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'dodgerblue',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButton1: {
      backgroundColor: 'tomato',
      padding: 10,
      margin: 15,
      height: 40,
      width:'auto'
   },
   submitButtonText:{
      color: 'white',
      textAlignVertical: 'center',
      justifyContent: 'center',
      textAlign: 'center',
   },
   datapdam : {
    backgroundColor: '#fff',
    margin:15,
    padding:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
   },
   map: {
    width:250,
    height:350,
  },
});

export default styles;