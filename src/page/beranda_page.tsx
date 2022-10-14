import React from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import Beranda from "../component/beranda";

const BerandaPage = () => {
    return (
        <SafeAreaView style={[styles.container, stylesGlobal.backroundPremier]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundPremier.backgroundColor}
            />
            <View style={styles.concomponent}>
                <Beranda.HeaderBeranda />
                <Beranda.BodyBeranda />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    concomponent: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
    },
})

export default BerandaPage
