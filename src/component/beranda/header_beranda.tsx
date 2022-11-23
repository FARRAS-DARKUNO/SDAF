import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const HeaderBeranda = () => {

    const navigate = useNavigation()

    const nextPage = () => {
        //@ts-ignore
        navigate.navigate("ProfilBefore")
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}> Hallo, </Text>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header2]}> Pengguna </Text>
            </View>
            <TouchableOpacity onPress={nextPage}>
                <MaterialCommunityIcons name="account" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 30,
    },
})

export default HeaderBeranda