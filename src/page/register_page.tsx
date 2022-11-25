import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ButtonInput from "../component/button_input/button_input";
import LogoSFAD from "../component/image/image";
import TextInputData from "../component/textInput/textInput";
import { useNavigation } from "@react-navigation/native";
import { AlertStop } from '../component/alert/alert'
import { namePage } from "../utils/namePage";
import { postRegister } from "../utils/axios";
import Loading from "../component/loading/loading";

const RegisterPage = () => {

    const navigate = useNavigation()

    const goBack = () => navigate.goBack()

    //@ts-ignore
    const gotoNavigate = () => navigate.navigate(namePage.LOGIN_PAGE)

    const [name, setName] = useState<string>('')
    const [instansi, setInstansi] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repassword, setRepassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false)

    const input = () => {
        if (name == '' || instansi == '' || password == '' || email == '' || repassword == '') {
            AlertStop({
                title: 'Perikasa Data',
                massage: 'Lengkapi data diri anda',
            })
        }
        else if (password != repassword) {
            AlertStop({
                title: 'Perikasa Data',
                massage: 'Konfirmasi kata sandi salah',
            })
        }
        else if (email.search('@') == -1 || email.search(' ') > -1 || email.length <= 10) {
            AlertStop({
                title: 'Perikasa Data',
                massage: 'Masukan email yang benar',
            })
        }
        else {
            setLoading(true)
            postRegister({
                email: email,
                instansi: instansi,
                name: name,
                password: password,
                setData: setLoading,
                next: gotoNavigate
            })
        }
    }

    useEffect(() => {

    }, [isLoading])

    return (

        <>
            {
                isLoading == true ? <Loading /> :

                    <SafeAreaView style={[styles.container, stylesGlobal.backroundWhite]}>
                        <StatusBar
                            animated={true}
                            backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
                        />
                        <ScrollView>


                            <TouchableOpacity style={styles.titleBack} onPress={goBack}>
                                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                                    Daftar
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.imageStyle}>
                                <LogoSFAD size={100} />
                            </View>
                            <View style={stylesGlobal.enter10} />
                            <TextInputData
                                setData={setName}
                                data={name}
                                placeholder={'Nama Lengkap'}
                                title={'Nama Lengkap'}
                            />
                            <TextInputData
                                setData={setInstansi}
                                data={instansi}
                                placeholder={'Instansi'}
                                title={'Instansi'}
                            />
                            <TextInputData
                                setData={setEmail}
                                data={email}
                                placeholder={'Email'}
                                title={'Email'}
                            />
                            <TextInputData
                                setData={setPassword}
                                data={password}
                                placeholder={'Kata Sandi'}
                                title={'Kata Sandi'}
                            />
                            <TextInputData
                                setData={setRepassword}
                                data={repassword}
                                placeholder={'Konfirmasi Kata Sandi'}
                                title={'Konfirmasi Kata Sandi'}
                            />
                            <ButtonInput action={input} tittle={'DAFTAR'} />
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
    imageStyle: {
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 30,
        marginBottom: 20,
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})

export default RegisterPage