import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native"
import stylesGlobal from "../../utils/global_style"

const Body = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>Perkiraan Cuaca Hari ini</Text>
                    <View style={stylesGlobal.enter20} />
                    <View style={styles.card}>
                        <Text style={[stylesGlobal.colorPremier, stylesGlobal.header3]}>Pagi</Text>
                        <View style={styles.boxInCard}>
                            <View style={styles.box50}>
                                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>Hujan Badai</Text>
                            </View>
                            <View style={styles.box50}>
                                <Image source={require('../../assets/petir.png')} style={styles.img} />
                                <Text style={[stylesGlobal.header1, stylesGlobal.colorPremier]}>{"30" + '°' + "C"}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
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