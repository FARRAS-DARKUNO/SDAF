import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native"
import stylesGlobal from "../../utils/global_style"
import dataPerkiraanCuaca from "../../utils/perkiraan_cuaca"
import Loading from "../loading/loading"

const Body = () => {

    const [dataCuaca, setDataCuaca] = useState<any>(null)

    const [isLoading, setIsloading] = useState<any>(null)

    useEffect(() => {
        dataPerkiraanCuaca({
            setData: setDataCuaca,
            isLoading: setIsloading
        })
        console.log("Hallo", dataCuaca)
    }, [])

    return (
        <>
            {
                dataCuaca == null ? <Loading /> :
                    <View style={styles.container}>
                        <ScrollView>
                            {
                                //@ts-ignore
                                dataCuaca.map((data) => (
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>{data.tiitle}</Text>
                                        <View style={stylesGlobal.enter20} />
                                        {
                                            //@ts-ignore
                                            data.data.map((response) => (
                                                <View style={styles.card}>
                                                    <Text style={[stylesGlobal.colorPremier, stylesGlobal.header3]}>{response.waktu}</Text>
                                                    <View style={styles.boxInCard}>
                                                        <View style={styles.box50}>
                                                            <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>{response.status}</Text>
                                                        </View>
                                                        <View style={styles.box50}>
                                                            <Image source={{
                                                                uri: response.gambar,
                                                            }} style={styles.img} />
                                                            <Text style={[stylesGlobal.header1, stylesGlobal.colorPremier]}>{response.suhu}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '78%',
        paddingHorizontal: 20
    },
    card: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#6399B0",
        alignItems: 'center',
        padding: 5,
        marginBottom: 10
    },
    boxInCard: {
        width: '100%',
        height: 60,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box50: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row'
    },
    img: {
        height: 50,
        width: 50,
        marginRight: 5,
    }
})

export default Body