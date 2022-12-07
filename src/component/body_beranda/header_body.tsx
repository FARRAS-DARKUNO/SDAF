import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import { TimeBeranda } from "../../utils/moment.";
import { useNavigation } from "@react-navigation/native";
import { namePage } from "../../utils/namePage";

const HeaderBody = () => {

    const navigate = useNavigation()

    //@ts-ignore
    const gtoPrediksi = () => navigate.navigate(namePage.RAMALAN_CUACA)

    return (

        <View style={styles.container}>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.subtitle]}>
                {TimeBeranda()}
            </Text>
            <View style={stylesGlobal.enter10} />
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                Teluk Kiluan
            </Text>
            <View style={stylesGlobal.enter10} />
            <TouchableOpacity style={[styles.box, stylesGlobal.backroundSekunder]} onPress={gtoPrediksi}>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header3]}>Prediksi Cuaca</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        width: '100%'
    },
    box: {
        width: '55%',
        height: 30,

        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    }
})


export default HeaderBody