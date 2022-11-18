import React, { useEffect, useState } from "react";
import {
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import LogoSFAD from "../component/image/image";
import stylesGlobal from "../utils/global_style";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {

    const navigate = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            navigate.navigate('BerandaPage')
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