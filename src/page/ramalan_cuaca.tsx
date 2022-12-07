import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from "react-native"
import stylesGlobal from "../utils/global_style"
import LinearGradient from 'react-native-linear-gradient';
import { COLOR_GRADIEN2 } from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Cuaca from "../component/ramalan_cuaca";
import { indicator } from "../utils/indicator";

const RamalanCuaca = () => {
    return (
        <LinearGradient colors={COLOR_GRADIEN2} style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <TouchableOpacity style={styles.titleBack} onPress={() => console.log("mantaps")}>
                <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                    Perkiraan Cuaca
                </Text>
            </TouchableOpacity>

            <Cuaca.Header />
            <Cuaca.Body />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,

    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})

export default RamalanCuaca