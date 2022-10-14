import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";

const ButtonInput = ({ action, tittle }: Props) => {
    return (
        <TouchableOpacity style={styles.buttonMargin} onPress={action}>
            <View style={styles.button}>
                <Text style={[stylesGlobal.header2, stylesGlobal.colorWhite]}> {tittle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonMargin: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#2F5664',
        borderRadius: 10,
    }
})

type Props = {
    action(): any,
    tittle: string
}

export default ButtonInput