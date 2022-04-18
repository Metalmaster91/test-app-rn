import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,Text,View } from 'react-native';
import { BgCanva, HeaderYellow, InputForData,ImgLogo,TitleText, TitleText2, LoginButton, HeaderLogo } from './styles/styled-app';
import logoImg from './assets/lionLogo.png';
import headerImg from './assets/LionsTitle.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pantallas/Home.js';
import Profile from './pantallas/Profile.js';
import Login from './pantallas/Login.js';
import EdicionPerfil from './pantallas/EdicionPerfil.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="Profile"  component={Profile} />
        <Stack.Screen name="EdicionPerfil"  component={EdicionPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
