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
import { namePage } from "../../utils/namePage";
import { useSelector } from "react-redux";

const HeaderBeranda = () => {

    const navigate = useNavigation()

    const { userName, idUser } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const nextPage = () => {
        if (idUser == '') {
            //@ts-ignore
            navigate.navigate(namePage.PROFIL_BEFORE)
        }
        else {
            //@ts-ignore
            navigate.navigate(namePage.PROFIL_AFTER)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}> Hallo, </Text>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header2]}> {userName} </Text>
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