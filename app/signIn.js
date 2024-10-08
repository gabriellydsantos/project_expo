import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native"
// Importa o React, hooks de estado e referência para gerenciar os inputs e o estado de carregamento
import React, { useRef, useState } from "react"
// Importa funções para criar layouts responsivos com base no tamanho da tela
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//importa o componente statusbar para controlar a barra de status
import { StatusBar } from "react-status-bar";
//importa icones do pacote expo
import { Octicons } from "@expo/vector-icons";
//Importa o hook de navegação do expo-router para navegação entre telas
import { useRouter } from "expo-router";
//importa componentes personalizados, como o carregamento (loaging) e o gerenciamento de teclado customizado
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
//importa contexto de autentificação para gerenciar o login
import { useAuth } from '../context/authContext';

//função de componente para tela de login

export default function SingIn() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const emailRef = useRef("");

    const passWordRef = useRef("");


    const handleLogin = async () => {

        if (!emailRef.current || !passWordRef) {
            Alert.alert('Sign In', "Por favor, preencha todos os campos");
        }

        setLoading(true);
        const response = await login(emailRef.current, passWordRef.current);
        setLoading(false);


        if(!response.success){
            Alert.alert('Sing In', response.msg);
        }
        

        return (
            <CustomKeyboardView>

                <StatusBar style="dark" />
                <view style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
                    { }
                    <View className="items-center">
                        <Image style={{ height: hp(25) }} resizeMode='contain' source={require('../assets/images/loading.png')} />

                    </View>
                </view>

                <View className="gap-10">
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sing In</Text>
                </View>
            </CustomKeyboardView>
        )
    }









}
