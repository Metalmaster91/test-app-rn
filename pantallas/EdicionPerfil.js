import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,Text,View, Image, TextInput } from 'react-native';
import { BgCanva, HeaderYellow, InputForData,ImgLogo,TitleText, TitleText2, LoginButton, HeaderLogo, FotoPicker, InfoProfileContainer, InfoProfileColumn, ProfileText, ScrollView, InputForDataEdit, FotoProfile } from '../styles/styled-app.js';
import logoImg from '../assets/lionLogo.png';
import headerImg from '../assets/LionsTitle.png';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';



export default function EdicionPerfil() {

  //VARIABLES DE EDICIÓN DEL PERFIL

  const [selectedImage, setSelectedImage] = useState(null);

  const [nombre, setNombre] = useState('placeholder');
  const [apellido, setApellido] = useState("placeholder");
  const [email, setEmail] = useState("placeholder");
  const [nacimiento, setNacimiento] = useState("placeholder");
  const [aficiones, setAficiones] = useState("placeholder");

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
            
          <FotoPicker
            onPress={openImagePickerAsync}
          >
          </FotoPicker>
          <Text>This is EditionProfile!!</Text>
          <InputForDataEdit
            placeholder={'Nombre'}
            onChangeText={setNombre}
          />
          <InputForDataEdit
            placeholder={'Apellido'}
            onChangeText={setApellido}
          />
          <InputForDataEdit
            placeholder={'Mail'}
            onChangeText={setEmail}
          />
          <InputForDataEdit
            placeholder={'Fecha nacimiento dd/mm/aaaa'}
            onChangeText={setNacimiento}
          />
          <InputForDataEdit
            placeholder={'Aficiones'}
            onChangeText={setAficiones}
          />
          <LoginButton>
            <Text>GUARDAR CAMBIOS</Text>
          </LoginButton>
        </View>
      </BgCanva>
    </View>
  );
};
