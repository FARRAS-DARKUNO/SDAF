import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import Card from "../card_beranda/card";

const ContainDataBody = () => {
    return (
        <View style={styles.contain}>
            <Card.LongCard />
            <View style={styles.wrap}>
                <Card.GridCard />
                <Card.GridCard />
                <Card.GridCard />
                <Card.GridCard />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        width: '100%'
    },
    wrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
})


export default ContainDataBody