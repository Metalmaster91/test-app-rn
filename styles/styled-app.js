import  styled from 'styled-components/native';
import {Dimensions} from 'react-native'
import edicionProfile from '../styles/styled-app.js'


//LOGIN 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let heightSizeLogIn = '10%';
let heightSizeEdit = '6%';

export const BgCanva = styled.View`
    background-color: grey;
    height: 100%;
    width: 100%;

`;
export const HeaderYellow = styled.View`
    background-color: #e77d27;
    height: 10%;
    width: 100%;
    margin-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;  
`;
export const HeaderLogo = styled.Image`
    height: 100px;
    width: 200px;
`;
export const TitleText = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;
export const TitleText2 = styled.Text`
    font-size: 12px;
    font-weight: bold;
`;
export const ImgLogo= styled.Image`
    height: 200px;
    width: 200px;
`;
export const InputForData = styled.TextInput`
    width: 60%;
    height: ${heightSizeLogIn}; 
    margin-top: 4%;
    border: 1px solid black;
    border-radius: 6px;
    padding: 2%;
    background-color: #f0f0f0;
`;
export const InputForDataEdit = styled.TextInput`
    width: 60%;
    height: ${heightSizeEdit}; 
    margin-top: 4%;
    border: 1px solid black;
    border-radius: 6px;
    padding: 2%;
    background-color: #f0f0f0;
`;
export const LoginButton = styled.TouchableOpacity`
    margin-top: 4%;
    background-color: #e77d27;
    width: 60%;
    height: ${heightSizeLogIn};
    border-radius: 6px;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
`;

// PROFILE

export const FotoProfile = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: white;
    border: 2px solid #d7d7d7;
`;
export const FotoPicker = styled.TouchableOpacity`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: white;
    
`;
export const InfoProfileContainer = styled.View`
    margin-top: 10%;
    width: 90%;
    height: 50%;
    background-color: #e5e1e1;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
`;
export const InfoProfileColumn = styled.View`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`;
export const ProfileText = styled.Text`
    border: 1px solid #e5e1e1;
    border-bottom-color: black;
    
`;
export const EditButtonProfile = styled.TouchableOpacity`
    position: absolute;
    right: 5%;
    top: -1%;
`;
//EDICION DEL PERFIL
export const inputEditProfile = styled.TextInput`

`
export const ScrollV = styled.ScrollView`
    height: 100%;
`



 