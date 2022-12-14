import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LogoSFAD from "../component/image/image";
import TextInputData from "../component/textInput/textInput";
import ButtonInput from "../component/button_input/button_input";
import { useNavigation } from "@react-navigation/native";
import { namePage } from "../utils/namePage";
import { AlertStop } from '../component/alert/alert'
import { postLogin } from "../utils/axios";
import Loading from "../component/loading/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getIdUser } from "../redux/action"
import axios from "axios";
import { getDataUserById } from "../utils/api";

const LoginPage = () => {

    const dispatch = useDispatch()

    const { idUser } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const navigate = useNavigation()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false)

    const goback = () => navigate.goBack()
    //@ts-ignore
    const gotoRegister = () => navigate.navigate(namePage.REGISTER_PAGE)
    //@ts-ignore
    const gotoBeranda = () => navigate.navigate(namePage.BERANDA_PAGE)

    const checkUser = async () => {
        await AsyncStorage.getItem('id')
            .then(async response => {
                console.log(response)

                if (response != null) {

                    if (idUser == '') {
                        await axios.get(getDataUserById({ id: response }))
                            .then(data => {
                                console.log(data.data.data)
                                dispatch(getUserName(data.data.data.name))
                                dispatch(getIdUser(data.data.data.id))
                                setLoading(false)
                            }).finally(() => gotoBeranda())
                    }
                }
                else {
                    setLoading(false)
                }

            })
    }

    const input = () => {
        if (email == '' || password == '') {
            AlertStop({
                title: 'Perikasa Data',
                massage: 'Email dan Password anda belum lengkap',
            })
        }
        else {
            setLoading(true)
            postLogin({
                email: email,
                password: password,
                setData: setLoading,
                next: checkUser
            })
        }
    }


    useEffect(() => {

    }, [isLoading])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={[stylesGlobal.backroundWhite, styles.container]}>
                        <StatusBar
                            animated={true}
                            backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
                        />
                        <ScrollView style={styles.concomponent}>

                            <TouchableOpacity style={styles.titleBack} onPress={goback}>
                                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                                    Masuk
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.imageStyle}>
                                <LogoSFAD size={250} />
                            </View>

                            <TextInputData
                                setData={setEmail}
                                data={email}
                                placeholder={'Maukan Email'}
                                title={'Email'}
                                isPasword={false}
                            />

                            <TextInputData
                                setData={setPassword}
                                data={password}
                                placeholder={'Maukan Password'}
                                title={'Password'}
                                isPasword={true}
                            />
                            <View style={stylesGlobal.enter20} />
                            <ButtonInput action={input} tittle={'Masuk'} />
                            <View style={styles.daftar}>
                                <Text style={[stylesGlobal.header3, { color: '#000' }]}>Belum Punya Akun ? </Text>
                                <TouchableOpacity onPress={gotoRegister}>
                                    <Text style={[stylesGlobal.colorPremier, stylesGlobal.header3]}>DAFTAR</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    concomponent: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    marginContainer: {
        marginHorizontal: 20,
    },
    imageStyle: {
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 30,
    },
    daftar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        marginTop: 10,
    }
})

export default LoginPage