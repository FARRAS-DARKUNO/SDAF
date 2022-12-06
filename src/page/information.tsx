import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native"
import stylesGlobal from "../utils/global_style"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CardInformation from "../component/card_information/card_information";
import { timData, pengenalan } from "../utils/data_tim";

const Information = () => {

    const navigate = useNavigation()

    const goBack = () => navigate.goBack()

    return (
        <SafeAreaView style={[styles.container, stylesGlobal.backroundWhite]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <TouchableOpacity style={styles.titleBack} onPress={goBack}>
                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                    Informasi
                </Text>
            </TouchableOpacity>
            <View style={stylesGlobal.enter30} />
            <ScrollView>
                <View style={styles.margin}>
                    <Text style={[stylesGlobal.colorPremier, stylesGlobal.header1, styles.text]}>Pengenalan</Text>
                    <View style={[styles.line, stylesGlobal.backroundPremier]} />
                    <Text style={[styles.pengenalan, stylesGlobal.colorPremier, stylesGlobal.subtitle]}>{pengenalan}</Text>
                </View>
                {
                    timData.map((statemant) => (
                        <View style={styles.margin}>
                            <Text style={[stylesGlobal.colorPremier, stylesGlobal.header1, styles.text]}>{statemant.tittle}</Text>
                            <View style={[styles.line, stylesGlobal.backroundPremier]} />
                            <View style={stylesGlobal.enter20} />
                            {
                                statemant.data.map((state) => (
                                    <CardInformation
                                        email={state.email}
                                        name={state.name}
                                        prodi={state.instansi}
                                    />
                                ))
                            }
                        </View>
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,

    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        marginHorizontal: 20
    },
    line: {
        width: '90%',
        height: 2,
        marginHorizontal: 20,
        marginTop: 5
    },
    margin: {
        marginBottom: 20
    },
    pengenalan: {
        paddingHorizontal: 20,
        marginTop: 10,
        textAlign: "justify",
        // color: "black"
    }
})

export default Information