import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import stylesGlobal from "../../utils/global_style"
import database from '@react-native-firebase/database';
import { indicator } from "../../utils/indicator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {

    const [kecepatanAngin, setKecepatanAngin] = useState<number>(0)
    const [tinggiGelombang, setTinggiGelombang] = useState<number>(0)
    const [suhuLaut, setSuhuLAut] = useState<number>(0)

    database()
        .ref('/')
        .on('value', snapshot => {
            setKecepatanAngin(snapshot.val().angin.kecepatan_mps)
            setTinggiGelombang(snapshot.val().laut.ketinggian_m)
            setSuhuLAut(snapshot.val().laut.suhu_ms5611_c)
        });

    return (
        <View style={styles.container}>
            <View style={styles.boxContain}>
                <View style={styles.box50}>
                    <Text style={[stylesGlobal.colorPremier, stylesGlobal.header1, styles.textTittle]}>
                        {indicator({
                            angin: kecepatanAngin,
                            gelombang: tinggiGelombang
                        })}
                    </Text>
                </View>

                <View style={[{ height: "55%", width: 2 }, stylesGlobal.backroundSekunder]} />

                <View style={styles.box50}>
                    <View style={styles.suhuCuaca}>
                        <MaterialCommunityIcons name="thermometer" size={42} color='#2F5664' />
                        <Text style={[stylesGlobal.colorPremier, styles.testSuhu]}>
                            {suhuLaut + '°' + 'C'}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContain: {
        width: "75%",
        height: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },
    box50: {
        width: "49.5%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTittle: {
        textAlign: 'center'
    },
    testSuhu: {
        fontSize: 32,
        fontFamily: 'Ubuntu-Bold'
    },
    suhuCuaca: {
        flexDirection: 'row',
    },
})

export default Header