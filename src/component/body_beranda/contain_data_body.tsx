import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import Card from "../card_beranda/card";
import database from '@react-native-firebase/database';


const ContainDataBody = () => {

    const [arahAhngin, setArahAngin] = useState<string>('')
    const [kecepatanAngin, setKecepatanAngin] = useState<number>(0)
    const [KecepatanGelombang, setKecepatanGelombang] = useState<number>(0)
    const [tinggiGelombang, setTinggiGelombang] = useState<number>(0)
    const [suhuLaut, setSuhuLAut] = useState<number>(0)

    database()
        .ref('/')
        .on('value', snapshot => {
            setArahAngin(snapshot.val().angin.arah)
            setKecepatanAngin(snapshot.val().angin.kecepatan_mps)
            setKecepatanGelombang(snapshot.val().laut.kecepatan_mps)
            setTinggiGelombang(snapshot.val().laut.ketinggian_m)
            setSuhuLAut(snapshot.val().laut.suhu_ms5611_c)
        });

    return (
        <View style={styles.contain}>
            <Card.LongCard
                name={'Suhu Laut'}
                value={suhuLaut}
                type={'°'}
            />
            <View style={styles.wrap}>
                <Card.GridCard

                    name={'Arah Angin'}
                    value={arahAhngin}
                    type={''}
                />
                <Card.GridCard

                    name={'Kecepatan Angin'}
                    value={kecepatanAngin}
                    type={'m/s'}
                />
                <Card.GridCard

                    name={'Tinggi Gelombang'}
                    value={tinggiGelombang}
                    type={'M'}
                />
                <Card.GridCard

                    name={'Kecepatan Arus'}
                    value={KecepatanGelombang}
                    type={'m/s'} />
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