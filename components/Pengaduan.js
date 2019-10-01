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

class Pengaduan extends React.Component {

  state = {
    header : 'Pengaduan',
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Pengaduan',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render () {

    return (
       <ImageBackground 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={require('../assets/back.png')}
      >
        <Text style={{ alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', color:'white', fontWeight: 'bold', fontSize:18 }} >Pengaduan</Text>
        <Text style={{ alignItems: 'center', justifyContent: 'center',
    textAlign: 'center' }}>Silahkan Klik Tombol Dibawah Untuk Melakukan Pengaduan lewat WhatsApp</Text>
        <Text> </Text>    
        
        <Button
        onPress={() => {
                Linking.openURL(
                  'http://api.whatsapp.com/send?phone=62' + 85342072842 
                );
            }}
        title="Pengaduan WhatsApp"
      />
      </ImageBackground>
    );

  }

}



export default Pengaduan;