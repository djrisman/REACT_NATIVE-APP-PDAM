import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform, 
  Image, 
  TouchableOpacity, 
  Button, TextInput, 
  ImageBackground, 
  Linking, 
  PixelRatio, 
  Alert
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import styles from '../style/Style';
import axios from 'axios';

class Register extends React.Component {

  state = {
    header : 'Daftar Online',
    nama:'',
    alamat:'',
    no_hp:'',
    not_sent:false,
    sent:false,
    hide:true,
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Form Daftar Online',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };


  handleNama = (text) => {
    this.setState({
      nama : text
    });

    console.log(this.state.nama);
  }


  handleAlamat = (text) => {
    this.setState({
      alamat : text
    });

    console.log(this.state.alamat);
  }

  handleNohp = (text) => {
    this.setState({
      no_hp : text
    });

    console.log(this.state.no_hp);
  }

  daftar = (nama, alamat, no_hp) => {
      let dat = {
          "nama" : this.state.nama,
          "alamat" : this.state.alamat,
          "no_hp" : this.state.no_hp
      }
      axios({
        method: 'post',
        url : 'http://hmikomkedokteranuh.com/tesji/ci/tes/daftar',
        data : dat
      }).then( (response) => {
        console.log(response);
        if(response.data.daftar == 'no'){
          this.setState({
            not_sent:true
          });
        }else{
          this.setState({
            sent:true,
            hide:false,
          });
        }
      }).catch((error) =>{
        console.error(error);
      });
      //alert(id);
   }

  render () {

    return (
       <ImageBackground 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={require('../assets/back.png')}
      >
      
      { this.state.hide ?

      <View>
       <Text style={{fontSize: 17, color:'white' ,fontWeight: 'bold', textDecorationLine: 'underline',}}>Masukkan Data Pendafatar</Text>
        <TextInput style = {styles.input1}
        underlineColorAndroid = "transparent"
        placeholder = " Nama ...                          "
        placeholderTextColor = "dodgerblue"
        autoCapitalize = "none"
        onChangeText = {this.handleNama}/>
        <TextInput style = {styles.input1}
        underlineColorAndroid = "transparent"
        placeholder = " Alamat ...                          "
        placeholderTextColor = "dodgerblue"
        autoCapitalize = "none"
        onChangeText = {this.handleAlamat}/>

        <TextInput style = {styles.input1}
        underlineColorAndroid = "transparent"
        placeholder = " No. Handphone ...              "
        placeholderTextColor = "dodgerblue"
        autoCapitalize = "none"
        keyboardType='numeric'
        onChangeText = {this.handleNohp}/>

        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
                    () => this.daftar(this.state.name, this.state.alamat, this.state.no_hp)
        }>
        <Text style = {styles.submitButtonText}> Daftar </Text>
        </TouchableOpacity>    
      </View>
        :null
      }

      {
        this.state.sent ?
        <View style={styles.datapdam} >
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Terimakasih telah mendaftar Secara Online
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Selanjutnya PDAM akan Menghubungi Anda
                </Text>
           </View>
      :null
      } 

      {
        this.state.not_sent ?
        <View style={styles.datapdam} >
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Terjadi Kesalahan Input
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Silahkan coba lagi atau hubungi Pengaduan di menu pengaduan
                </Text>
           </View>
      :null
      } 

      </ImageBackground>
    );

  }

}


export default Register;