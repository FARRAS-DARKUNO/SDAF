import React, { useEffect, useState } from "react";
import {
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import LogoSFAD from "../component/image/image";
import stylesGlobal from "../utils/global_style";
import { useNavigation } from "@react-navigation/native";
import { namePage } from "../utils/namePage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserName, getIdUser } from "../redux/action"
import { getDataUserById } from "../utils/api";
import database from '@react-native-firebase/database';

const SplashScreen = () => {

    const navigate = useNavigation()

    const dispatch = useDispatch()

    // @ts-ignore
    const toNavigate = () => navigate.navigate(namePage.BERANDA_PAGE)

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('id')
                .then(async response => {
                    if (response == null) {
                        database()
                            .ref('/')
                            .on('value', snapshot => {
                                let temp = snapshot.val().ready
                                if (temp == false) {
                                    //MUST DELETE
                                    dispatch(getUserName("Nelayan"))
                                    dispatch(getIdUser("63b787d5d527b4a3ee8746a5"))
                                    toNavigate()
                                }
                                else {
                                    toNavigate()
                                }
                            })
                    }
                    else {
                        await axios.get(getDataUserById({ id: response }))
                            .then(data => {
                                console.log(data.data.data)
                                dispatch(getUserName(data.data.data.name))
                                dispatch(getIdUser(data.data.data.id))
                            }).finally(() => toNavigate())
                    }
                })
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <View />
            <LogoSFAD size={200} />
            <View style={styles.view}>
                <Text style={[stylesGlobal.colorPremier, stylesGlobal.header3]}> Supported by : </Text>
                <View style={stylesGlobal.enter10} />
                <Image source={require('../assets/suportby.png')} style={{ height: 39, width: 150 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 35
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SplashScreen