import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";

const SelfData = (props: Props) => {
    return (
        <View style={styles.viewData}>
            <Text style={[stylesGlobal.header3, stylesGlobal.colorPremier]}>
                {props.title}
            </Text>
            <View style={stylesGlobal.enter10} />
            <View style={[styles.container, styles.bgData]}>
                <Text style={[stylesGlobal.header3, styles.text]}>
                    {props.data}
                </Text>
            </View>
            <View style={stylesGlobal.enter20} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewData: {
        paddingHorizontal: 20,
        width: '100%'
    },
    container: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',

    },
    text: {
        color: '#000'
    },
    bgData: {
        backgroundColor: '#C7DEE8'
    }
})

interface Props {
    title: string,
    data: string,
}
export default SelfData