import React, { useState, useEffect } from "react";
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
import { userData } from "../utils/axios";
import { getUserName, getIdUser } from "../redux/action"
import { useSelector, useDispatch } from "react-redux";
import Loading from "../component/loading/loading";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { namePage } from "../utils/namePage";
import { AlertShow } from "../component/alert/alert";
import Ionicon from "react-native-vector-icons/Ionicons";
import database from '@react-native-firebase/database';

const ProfilAfter = () => {

    const dispatch = useDispatch()

    const navigate = useNavigation()

    const [name, setNames] = useState<string>('')
    const [instansi, setInstansis] = useState<string>('')
    const [email, setEmails] = useState<string>('')
    const [isLoading, setLoadings] = useState<boolean>(true)
    const [isReady, setReady] = useState<boolean>(false)

    database()
        .ref('/')
        .on('value', snapshot => {
            setReady(snapshot.val().ready)
        })


    const { idUser } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const goBack = () => navigate.goBack()

    //@ts-ignore
    const goNavigation = () => navigate.navigate(namePage.BERANDA_PAGE)
    //@ts-ignore
    const goInformation = () => navigate.navigate(namePage.INFORMATION)

    const logout = async () => {
        setLoadings(true)
        await AsyncStorage.clear()
            .then(() => {
                dispatch(getIdUser(''))
                dispatch(getUserName('Pemantau'))
            }).finally(() => {
                setLoadings(false)
                goNavigation()
            })

    }

    const alertShow = () => {
        AlertShow({
            title: "Keluar Akun",
            massage: 'Apakah anda yakin ingin keluar akun ?',
            action: logout
        })
    }


    useEffect(() => {
        userData({
            data: idUser,
            setEmail: setEmails,
            setInstansi: setInstansis,
            setLoading: setLoadings,
            setName: setNames
        })
    }, [isLoading])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <SafeAreaView style={[styles.container, stylesGlobal.backroundWhite]}>
                        <StatusBar
                            animated={true}
                            backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
                        />
                        <View style={styles.viewHeader}>
                            <TouchableOpacity style={styles.titleBack} onPress={goBack}>
                                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                                    Profil
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.titleBack} onPress={goInformation}>
                                <Ionicon name="information-circle-outline" size={24} color="#2F5664" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageStyle}>
                            <LogoSFAD size={200} />
                        </View>
                        {
                            isReady == false ? null :
                                <>
                                    <SelfData data={name} title={'Name Lengkap'} />
                                    <SelfData data={instansi} title={'Instansi'} />
                                    <SelfData data={email} title={'Email'} />
                                    <View style={stylesGlobal.enter20} />
                                    <ButtonInput
                                        action={alertShow}
                                        tittle={'Keluar'}
                                    />
                                </>
                        }

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
    viewHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})

export default ProfilAfter