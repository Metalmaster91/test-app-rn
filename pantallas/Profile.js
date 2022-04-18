import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,Text,View, Image } from 'react-native';
import { BgCanva, HeaderYellow, InputForData,ImgLogo,TitleText, TitleText2, LoginButton, HeaderLogo, PickerProfile, InfoProfileContainer, InfoProfileColumn, ProfileText, EditButtonProfile, FotoProfile, FotoPicker } from '../styles/styled-app.js';
import logoImg from '../assets/lionLogo.png';
import headerImg from '../assets/LionsTitle.png';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import editImage from '../assets/Icons/icons8-edit-30.png'
import { NavigationContainer } from '@react-navigation/native';
import EdicionPerfil from './EdicionPerfil.js';



export default function Profile({navigation}) {

  //VARIABLES DE EDICIÓN DEL PERFIL

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () =>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
     if (permissionResult.granted === false){
       alert("Se necesitan permisos para poder acceder a su sistema de archivos");
       return;
     }
 
     const pickerResult = await ImagePicker.launchImageLibraryAsync()
     console.log(pickerResult)
 
     if (pickerResult.cancelled === true){
       return;
     }
 
     setSelectedImage(pickerResult.uri);
   }

  return (
    <View>
      <BgCanva>
        <HeaderYellow>
          <HeaderLogo
            source={headerImg}
          /> 
        </HeaderYellow>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <EditButtonProfile
            onPress={() => navigation.navigate('EdicionPerfil')}
          >
            <Image 
              source={editImage}
            />
          </EditButtonProfile>
            <FotoPicker
              onPress={openImagePickerAsync}
            >
              <FotoProfile
                source={{uri: selectedImage}}
              />
            </FotoPicker>
          <Text>This is Profile!!</Text>
          <InfoProfileContainer>
            <InfoProfileColumn >
              <ProfileText>Nombre</ProfileText>
              <ProfileText>Apellidos</ProfileText>
              <ProfileText>Mail Asociado</ProfileText>
              <ProfileText>Fecha de Naciemiento</ProfileText>
              <ProfileText>Aficiones</ProfileText>
            </InfoProfileColumn>
            <InfoProfileColumn >
              <ProfileText>{EdicionPerfil.nombre}</ProfileText>
              <ProfileText>{EdicionPerfil.apellido}</ProfileText>
              <ProfileText>{EdicionPerfil.email}</ProfileText>
              <ProfileText>{EdicionPerfil.nacimiento}</ProfileText>
              <ProfileText>{EdicionPerfil.aficiones}</ProfileText>
            </InfoProfileColumn>
          </InfoProfileContainer>
        </View>
      </BgCanva>
    </View>
  );
};
