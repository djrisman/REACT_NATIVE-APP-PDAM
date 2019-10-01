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

import MapView, {Marker} from 'react-native-maps';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import styles from '../style/Style';

class Lokasi extends React.Component {


  state = {
    header : 'Lokasi / Alamat ',
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Lokasi',
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
        <Text>Lokasi</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -6.110602,
            longitude: 120.471531,
            latitudeDelta: 0.03222,
            longitudeDelta: 0.02221,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: -6.110437,
            longitude: 120.471553}} 
            title={" Kantor PDAM Selayar "}
            description={" Jl. Tien Soeharto, Putabangung, Bontoharu, Kepulauan Selayar, Sulawesi Selatan "}
         />
        </MapView>
      </ImageBackground>
    );

  }

}

export default Lokasi;