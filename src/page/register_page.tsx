import React, { useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ButtonInput from "../component/button_input/button_input";
import LogoSFAD from "../component/image/image";
import TextInputData from "../component/textInput/textInput";
const RegisterPage = () => {

    const dummie = () => console.log('masuk')

    const [name, setName] = useState<string>('')
    const [instansi, setInstansi] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repassword, setRepassword] = useState<string>('')


    return (
        <SafeAreaView style={[styles.container, stylesGlobal.backroundWhite]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <TouchableOpacity style={styles.titleBack}>
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
            <ButtonInput action={dummie} tittle={'DAFTAR'} />

        </SafeAreaView>
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