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
  Alert,
  Dimensions 
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styles from '../style/Style';
import axios from 'axios';
import HTML from 'react-native-render-html';


class DetailBerita extends React.Component {


constructor(props){
  super(props);
  this.state = {
    header : 'Detail Berita',
    isi:'',
  }
}
 


  componentDidMount() {
     axios({
        method: 'post',
        url : 'http://hmikomkedokteranuh.com/tesji/ci/tes/detail_berita',
        data : {id:this.props.navigation.state.params.itemId}
      }).then( (response) => {
        console.log(response.data[0].isi);
        this.setState({
          isi: response.data[0].isi
        });
      }).catch((error) =>{
        console.error(error);
      });
  }


  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'Detail Berita',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };


  render () {
    console.log(this.props);
    return (
       <ImageBackground 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={require('../assets/back.png')}
      >
        <ScrollView style={{ width:'95%', marginTop:'2%', paddingTop:'1%',paddingHorizontal:'3%', height:'auto', backgroundColor: '#fff'}}>

        <Image
        source={{uri: `http://hmikomkedokteranuh.com/tesji/ci/assets/gambar/${this.props.navigation.state.params.gambar}`}} 
        style = {{ alignSelf: 'flex-start', width: '100%', height: 195 }}
        />
        <Text>{this.props.navigation.state.params.page}</Text>
        
       <HTML html={this.state.isi} imagesMaxWidth={Dimensions.get('window').width} />

        </ScrollView>
      </ImageBackground>
    );

  }

}


export default DetailBerita;