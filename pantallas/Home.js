import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet,Text,View } from 'react-native';
import { BgCanva, HeaderYellow, InputForData,ImgLogo,TitleText, TitleText2, LoginButton, HeaderLogo } from '../styles/styled-app.js';
import logoImg from '../assets/lionLogo.png';
import headerImg from '../assets/LionsTitle.png';


export default function Home({navigation}) {

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
          <Text>This is Home!!</Text>

          <LoginButton
              onPress={() => navigation.navigate('Login')}
            >
              <Text>IR AL LOGIN</Text>
            </LoginButton>

            <LoginButton
              onPress={() => navigation.navigate('Profile')}
            >
              <Text>IR AL PERFIL</Text>
            </LoginButton>
        </View>
      </BgCanva>
    </View>
  );
};
