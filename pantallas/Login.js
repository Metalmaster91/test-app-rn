import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,Text,View, TextInput } from 'react-native';
import { BgCanva, HeaderYellow, InputForData,ImgLogo,TitleText, TitleText2, LoginButton, HeaderLogo } from '../styles/styled-app.js';
import logoImg from '../assets/lionLogo.png';
import headerImg from '../assets/LionsTitle.png';
import { useState } from 'react';

export default function Login({navigation}) {

  const [loginUser, setLoginUser] = useState(null);
  const [loginPass, setLoginPass] = useState(null);

  const loginIsCorrect = () =>{
    if(loginUser == 'nico_17Gm@hotmail.com' && loginPass == 'nico17'){
      navigation.navigate('Home');
    }
    else{
      alert('Los datos son incorrectos')
    }
  }

    const login = () => Alert.alert('Login Sucedido')
    return (
      <View>
        <BgCanva>
          <HeaderYellow>
            <HeaderLogo
              source={headerImg}
            /> 
          </HeaderYellow>
         
          <View style={{display: 'flex', alignItems: 'center'}}>
            <ImgLogo
              source={logoImg}
            />
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <InputForData
              placeholder="  Correo electrónico"
              onChangeText={setLoginUser}
            />
            <InputForData
              placeholder="  Contraseña"
              onChangeText={setLoginPass}
            />
            <LoginButton
              onPress={loginIsCorrect}
            >
              <Text>LOGIN</Text>
            </LoginButton>
            <LoginButton
              onPress={() =>  navigation.navigate('Home')}
            >
              <Text>REGISTRARSE</Text>
              
            </LoginButton>
          </View>
          <Text>{loginUser}{loginPass}</Text>
        </BgCanva>
      </View>
    );
  };
  