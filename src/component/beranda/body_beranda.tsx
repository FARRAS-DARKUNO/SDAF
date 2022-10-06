import React from "react";
import {
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR_GRADIEN } from "../../utils/global_style";
import Body from "../body_beranda";

const BodyBeranda = () => {
    return (
        <LinearGradient colors={COLOR_GRADIEN} style={styles.container}>
            <Body.HeaderBody />
            <Body.StatusBody />
            <Body.ContainDataBody />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',
        height: '90%',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
})

export default BodyBeranda