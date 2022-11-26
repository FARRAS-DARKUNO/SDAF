import React, { useEffect, useState } from "react";
import {
    StatusBar,
    StyleSheet,
    View,
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
                        toNavigate()
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
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <LogoSFAD size={200} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
})

export default SplashScreen