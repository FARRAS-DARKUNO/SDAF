import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";

const HeaderBody = () => {
    return (

        <View style={styles.container}>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.subtitle]}>
                Minggu, 1 Desember 2019
            </Text>
            <View style={stylesGlobal.enter10} />
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                Teluk Kiluan
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
    }
})


export default HeaderBody