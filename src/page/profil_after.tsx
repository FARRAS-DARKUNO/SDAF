import React from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import LogoSFAD from "../component/image/image";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelfData from "../component/self_data/self_data";
import ButtonInput from '../component/button_input/button_input'

const ProfilAfter = () => {

    const dummie = () => console.log('masuk')

    return (
        <SafeAreaView style={[styles.container, stylesGlobal.backroundWhite]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <TouchableOpacity style={styles.titleBack}>
                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                    Profil
                </Text>
            </TouchableOpacity>
            <View style={styles.imageStyle}>
                <LogoSFAD size={200} />
            </View>
            <SelfData data={'suprapmant'} title={'Name Lengkap'} />
            <SelfData data={'Institut Teknologi Sumatera'} title={'Instansi'} />
            <SelfData data={'suprapmant.11915517@itera.ac.id'} title={'Email'} />
            <View style={stylesGlobal.enter20} />
            <ButtonInput
                action={dummie}
                tittle={'Keluar'}
            />

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

export default ProfilAfter