import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import Card from "../card_beranda/card";

const ContainDataBody = () => {
    const data = [
        {
            id: 1,
            name: 'Suhu Cuaca',
            value: 34,
            type: '°',
        },
        {
            id: 2,
            name: 'Arah Angin',
            value: 27,
            type: '°',
        },
        {
            id: 3,
            name: 'Kecepatan Angin',
            value: 27,
            type: 'm/s',
        },
        {
            id: 4,
            name: 'Tinggi Gelombang',
            value: 270,
            type: 'Cm',
        },
        {
            id: 5,
            name: 'Kecepatan Arus',
            value: 27,
            type: 'm/s',
        },
    ]
    return (
        <View style={styles.contain}>
            <Card.LongCard
                id={data[0].id}
                name={data[0].name}
                value={data[0].value}
                type={data[0].type}
            />
            <View style={styles.wrap}>
                <Card.GridCard
                    id={data[1].id}
                    name={data[1].name}
                    value={data[1].value}
                    type={data[1].type}
                />
                <Card.GridCard
                    id={data[2].id}
                    name={data[2].name}
                    value={data[2].value}
                    type={data[2].type}
                />
                <Card.GridCard
                    id={data[3].id}
                    name={data[3].name}
                    value={data[3].value}
                    type={data[3].type}
                />
                <Card.GridCard
                    id={data[4].id}
                    name={data[4].name}
                    value={data[4].value}
                    type={data[4].type} />
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