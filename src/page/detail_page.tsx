import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Detail from "../component/detail";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getAvarageApi, getGrafikApi } from '../utils/api'
import { getDataGrafik, getDataAverage } from '../utils/axios'
import Loading from "../component/loading/loading";
import { useNavigation } from "@react-navigation/native";

const DetailPage = () => {

    const navigate = useNavigation()

    const { month, year } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const [dataGrafik, setDataGrafik] = useState<number[]>([])

    const [labelGrafik, setLabelGrafik] = useState<any>([])

    const [dataAverage, setDataAvefarge] = useState<any>(null)

    const [isclear, setClear] = useState<boolean>(false)

    const [isLoading, setLoading] = useState<boolean>(true)

    //@ts-ignore
    const name = useRoute().params.name
    //@ts-ignore
    const page = useRoute().params.page

    const countries = [2022, 2023, 2024, 2025, 2026]
    const bulan = ['Januari', 'Februari', 'Maret', "April", "Mei", 'Juni', "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    const data = {
        datasets: {
            color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
        ,
    };

    useEffect(() => {
        getDataGrafik({
            data: getGrafikApi({
                name: name,
                month: month,
                year: year
            }),
            setData: setDataGrafik,
            setLabel: setLabelGrafik,
            setAfter: setClear
        })

        getDataAverage({
            data: getAvarageApi({
                name: name,
                month: month,
                year: year
            }),
            setData: setDataAvefarge,
            setLabel: setDataAvefarge,
            setAfter: setLoading
        })

        return () => {
            setDataGrafik([])
            setLabelGrafik([])
            setClear(false)
            setLoading(true)
        }
    }, [month, year])


    return (
        <SafeAreaView style={[stylesGlobal.backroundWhite, styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            {
                isclear == true && isLoading == false ?
                    <View style={styles.concomponent}>
                        <TouchableOpacity style={styles.titleBack} onPress={() => navigate.goBack()}>
                            <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                            <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                                {page}
                            </Text>
                        </TouchableOpacity>

                        <Detail.FilterDetail
                            year={countries}
                            date={bulan}
                        />
                        <Text style={[styles.text, stylesGlobal.subtitle, stylesGlobal.colorPremier]}>
                            *Berdasarkan Data Lapangan
                        </Text>
                        <Detail.GrafikDetail
                            label={labelGrafik}
                            data={dataGrafik}
                            color={data.datasets.color}
                            strokeWidth={data.datasets.strokeWidth}
                        />
                        <Detail.AverageDetail
                            data={dataAverage}
                        />
                    </View> : <Loading />
            }
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
    text: {
        paddingHorizontal: 20,
        marginBottom: 10
    }
})

export default DetailPage
