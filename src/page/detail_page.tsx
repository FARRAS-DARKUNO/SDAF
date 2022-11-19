import React, { useEffect } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Detail from "../component/detail";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getAvarageApi, getGrafikApi } from '../utils/api'

const DetailPage = () => {

    const { month, year } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    //@ts-ignore
    const route = useRoute().params.name

    const countries = [2022, 2023, 2024, 2025, 2026]
    const bulan = ['Januari', 'Februari', 'Maret', "April", "Mei", 'Juni', "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    const data = {
        labels: ["1", "2", "3", "4"],
        datasets: {
            data: [20.3, 45.2, 89, 20.2],
            color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
        ,
    };

    useEffect(() => {
        console.log(getGrafikApi({
            name: route,
            month: month,
            year: year
        }))
    }, [month, year])

    return (
        <SafeAreaView style={[stylesGlobal.backroundWhite, styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <View style={styles.concomponent}>
                <View style={styles.titleBack}>
                    <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                    <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                        Pegel Linux
                    </Text>
                </View>

                <Detail.FilterDetail
                    year={countries}
                    date={bulan}
                />
                <Detail.GrafikDetail
                    label={data.labels}
                    data={data.datasets.data}
                    color={data.datasets.color}
                    strokeWidth={data.datasets.strokeWidth}
                />
                <Detail.AverageDetail />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    concomponent: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
})

export default DetailPage
