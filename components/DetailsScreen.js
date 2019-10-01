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


class DetailsScreen extends React.Component {
  state = {
    id : '',
    id_tagihan : '',
    nama: '',
    para:'',
    nopl:'',
    jmla:'',
    jmlt:'',
    denda:'',
    bulan:'',
    alamat:'',
    isHidden: false,
    isHidden1: false,
    isHidden2: false,
    nodata_pelanggan:false,
    loaded:false,
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'Data Tagihan',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  handleId = (text) => {
    this.setState({
      id : text
    });
  }

  upload = (id) => {
    let dat = {
        "id" : id
    }
    alert("upload");
  }

  konfirmasi = (id) => {
    let dat = {
          "id" : id
      }
      alert("adakah? konfirmasi");
      this.setState({
        isHidden:false,
        isHidden1:false,
        isHidden2:true,
      });
  }
  
  bayar = (id, ids) => {
    let dat = {
          "id" : id,
          "ids" : ids,
      }
      alert(id);
    axios({
        method: 'post',
        url : 'http://hmikomkedokteranuh.com/tesji/ci/tes/bayar',
        data : dat
      }).then( (response) => {
        this.setState({
          id:response.data.tagihan[0].no_pelanggan,
          alamat:response.data.tagihan[0].alamat,
          nama:response.data.tagihan[0].nama,
          para:response.data.tagihan[0].nama_status,
          jmla:response.data.tagihan[0].jumlah_air,
          jmlt:response.data.tagihan[0].jumlah_tagihan,
          bulan:response.data.tagihan[0].nama_bulan,
          denda:response.data.tagihan[0].denda,
          isHidden:false,
          isHidden1:true,
        });
      }).catch((error) =>{
        console.error(error);
      });
      
  }


  kirim = (id) => {
      let dat = {
          "id" : id
      }
      axios({
        method: 'post',
        url : 'http://hmikomkedokteranuh.com/tesji/ci/tes/tagihan',
        data : dat
      }).then( (response) => {
        if(response.data.tagihan == 'no'){
            this.setState({
            nodata_pelanggan:true,
            isHidden:false,
            loaded:false,
            });
        }else{
            this.setState({
            id:response.data.tagihan[0].no_pelanggan,
            id_tagihan:response.data.tagihan[0].id_tagihan,
            alamat:response.data.tagihan[0].alamat,
            nama:response.data.tagihan[0].nama,
            para:response.data.tagihan[0].nama_status,
            nopl:response.data.tagihan[0].no_pelanggan,
            jmla:response.data.tagihan[0].jumlah_air,
            jmlt:response.data.tagihan[0].jumlah_tagihan,
            bulan:response.data.tagihan[0].nama_bulan,
            denda:response.data.tagihan[0].denda,
            isHidden:true,
            nodata_pelanggan:false,
            loaded:false,
            });
        }
      }).catch((error) =>{
        console.error(error);
      });
      //alert(id);
   }

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    const page = params ? params.page : null;

    return (
      
      <ImageBackground 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={require('../assets/back.png')}
      >
     
        <Text style={{fontSize: 17, color:'white' ,fontWeight: 'bold', textDecorationLine: 'underline',}}>Masukkan Nomor Sambungan</Text>
        <TextInput style = {styles.input1}
        underlineColorAndroid = "transparent"
        placeholder = " Nomor Sambungan ..."
        placeholderTextColor = "dodgerblue"
        autoCapitalize = "none"
        onChangeText = {this.handleId}/>

        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
                    () => this.kirim(this.state.id)
        }>
        <Text style = {styles.submitButtonText}> Cek Tagihan </Text>
        </TouchableOpacity>                 


        {
        this.state.isHidden ?  <View style={styles.datapdam} >
        <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>Detail Tagihan</Text>
        <Text>Nama: {this.state.nama}</Text>
        <Text>No Sambungan: {this.state.id}</Text>
        <Text>Alamat: {this.state.alamat}</Text>
        <Text>Pemakaian Air: {this.state.jmla} m3</Text>
        <Text>Denda:Rp. {this.state.denda}</Text>
        <Text>Total Tagihan: Rp. {this.state.jmlt}</Text>
        <Text>Bulan: {this.state.bulan}</Text>
        <Text>Status: {this.state.para}</Text>

        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
                    () => this.bayar(this.state.id_tagihan, this.state.nopl)
        }>
        <Text style = {styles.submitButtonText}> Bayar Tagihan</Text>
        </TouchableOpacity>

        </View>
   
         : null
        }

        {
           this.state.nodata_pelanggan ?  
           <View style={styles.datapdam} >
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Data Tidak Ditemukan
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>
                Silahkan Coba Lagi
                </Text>
           </View>
           :null
        }

        {
          this.state.loaded ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
          source={require('../assets/pdam.png')}
          />
          </View>
          :null
        }

        {
        this.state.isHidden1?  <View style={styles.datapdam}>
        <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>Detail Pembayaran</Text>
        <Text>Silahkan Melakukan Pembayaran ke Rek Bank SulSelBar : xxxxxxxxxx</Text>
        <Text>Jika telah melakukan pembayaran silahkan klik tombol konfirmasi pembayaran untuk konfirmasi dan upload bukti pembayaran</Text>
        <Text>-------------------------------</Text>
        <Text>Pemakaian Air: {this.state.jmla} M3</Text>
        <Text>Denda:Rp. {this.state.denda}</Text>
        <Text>Total Tagihan: Rp. {this.state.jmlt}</Text>
        <Text>Bulan: {this.state.bulan}</Text>
        <Text>Status: {this.state.para}</Text>

        <TouchableOpacity
        style = {styles.submitButton1}
        onPress = {
                    () => this.konfirmasi(this.state.id)
        }>
        <Text style = {styles.submitButtonText}> Konfirmasi Pembayaran</Text>
        </TouchableOpacity>

        </View>
   
         : null
        }

        {
        this.state.isHidden2?  <View style={styles.datapdam}>
        <Text style={{fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline',}}>Upload Bukti Pembayaran</Text>
        <TouchableOpacity
        style = {styles.submitButton1}
        onPress = {
                    () => this.konfirmasi(this.state.id)
        }>
        <Text style = {styles.submitButtonText}> Upload</Text>
        </TouchableOpacity>

        </View>
   
         : null
        }

       
      </ImageBackground>

    );
  }
}

export default DetailsScreen;