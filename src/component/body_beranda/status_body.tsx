import React, { useState } from "react";
import {
    View,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import database from '@react-native-firebase/database';
import { indicator } from "../../utils/indicator";

const StatusBody = () => {
    const [kecepatanAngin, setKecepatanAngin] = useState<number>(0)
    const [tinggiGelombang, setTinggiGelombang] = useState<number>(0)

    database()
        .ref('/')
        .on('value', snapshot => {
            setKecepatanAngin(snapshot.val().angin.kecepatan_mps)
            setTinggiGelombang(snapshot.val().laut.ketinggian_m)
        });

    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                {indicator({
                    angin: kecepatanAngin,
                    gelombang: tinggiGelombang
                })}
            </Text>
            <View style={stylesGlobal.enter10} />
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.subtitle]}>
                *Berdasarkan Data Beaufort
            </Text>
        </View>

    )
}

export default StatusBody