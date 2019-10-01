/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import MapView from 'react-native-maps';
import axios from 'axios';
import Lokasi from './components/Lokasi';
import Register from './components/Register';
import News from './components/News';
import Pengaduan from './components/Pengaduan';
import DetailsScreen from './components/DetailsScreen';
import DetailBerita from './components/DetailBerita';
import styles from './style/Style';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class LogoTitle extends React.Component {
  render() {
    return (
      <Text
        style={{  color: 'white',justifyContent: 'center', textAlign: 'center', marginLeft: '39%' }}
      >PDAM Selayar </Text>

    );
  }
}

class HomeScreen extends React.Component {
  
   state = {
      names: [
         {
            id: 0,
            name: 'Cek / Bayar Tagihan',
            page: 'Details',
         },
         {
            id: 1,
            name: 'Daftar Online',
            page: 'Daftar',
         },
         {
            id: 2,
            name: 'Berita dan Pengumuman',
            page: 'News',
         },
         {
            id: 3,
            name: 'Pengaduan',
            page: 'Pengaduan',
         },
         {
            id: 4,
            name: 'Lokasi / Alamat',
            page: 'Lokasi',
         },
      ]
   }

  static navigationOptions = {
    headerTitle: <LogoTitle  />,
    /*headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        style={{ marginRight:25, backgroundColor:'tomato'}}
      />
    ),*/
  };

  render() {
    return (
      <ImageBackground 
      style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}
      source={require('./assets/back.png')}
      >
          <Image
          source={require('./assets/pdam.png')}
          />
          {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.clist}
                     onPress={() => this.props.navigation.navigate(item.page,
                         {
                          itemId: '86',
                          otherParam: item.name,
                          page:item.name,
                         }
                      )}
                     >
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
          }
      </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Daftar : {
      screen: Register,
    },
    News : {
      screen: News,
    },
    Pengaduan : {
      screen: Pengaduan,
    },
    Lokasi : {
      screen: Lokasi,
    },
    DetailBer : {
      screen: DetailBerita,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

