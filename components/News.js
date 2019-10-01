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
import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios';
import styles from '../style/Style';

class News extends React.Component {

    constructor(props){
      super(props);
      this.state = {
         list_berita:[],
         tes:'',
         nodata_berita:false,
         isHidden:false,
       }
    }
   
   static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Berita dan Pengumuman',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };


   componentDidMount() {
    axios.get(`http://hmikomkedokteranuh.com/tesji/ci/tes/get_berita`)
      .then(res => {
        const list_berita = res.data.berita;
        console.log(list_berita);
        this.setState({ list_berita });
      }).catch(function (error) {
        console.log(error);
      });
  }

  render () {
    console.log(this.state.list_berita,"inimi");
    
    return (
       <ImageBackground 
      style={{ flex: 1, justifyContent: 'center',flexDirection: 'column',
        justifyContent: 'space-between' }}
      source={require('../assets/back.png')}
      >
      <ScrollView style={{ width:'100%', marginTop:'1%', paddingHorizontal:'3%', height:'auto'}}>
       {
              this.state.list_berita.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.nlist}
                     onPress={() => this.props.navigation.navigate('DetailBer',
                         {
                          itemId: item.id,
                          otherParam: item.judul,
                          page:item.judul,
                          isi:item.isi,
                          gambar:item.gambar,
                         }
                        )}
                     >
                     <Image
                      source={{uri: `http://hmikomkedokteranuh.com/tesji/ci/assets/gambar/thumbnail/${item.gambar}`}} 
                      style = {{ alignSelf: 'flex-start', width: 60, height: 60 }}
                      />
                     <Text style = {{color:'white',textAlignVertical: 'center', marginLeft:'2%', marginRight:'1%', }}>
                        {item.judul}
                     </Text>

                  </TouchableOpacity>
               ))
      }

      </ScrollView>
      </ImageBackground>
    );

  }

}


/*const RootStack = createStackNavigator(
  {
    Home: {
      screen: News1,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const Berita = createAppContainer(RootStack);

export default class News extends React.Component {
  render() {
    return <Berita />;
  }
}*/


export default News;