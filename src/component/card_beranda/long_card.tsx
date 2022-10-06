import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";

const LongCard = () => {
    return (
        <View style={[styles.container1, stylesGlobal.backroundSekunder]}>

        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        height: 100,
        width: '100%',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 10,
    }
})


export default LongCard