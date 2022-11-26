import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import { DataContain } from "../../utils/interface";
import styles from "./styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { namePage } from "../../utils/namePage";
import { useSelector } from "react-redux";

const LongCard = (props: DataContain) => {

    const { idUser } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const navigate = useNavigation()

    const checkerNavigate = () => {
        if (idUser != '') {
            //@ts-ignore
            navigate.navigate(namePage.DETAIL_PAGE, { name: props.link, page: props.name })
        }
    }

    return (
        <TouchableWithoutFeedback

            onPress={() => checkerNavigate()}
        >
            <View style={[styles.containerLong, stylesGlobal.backroundSekunder]}>

                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header3]}>{props.name}</Text>
                <View style={styles.suhuCuaca}>
                    <MaterialCommunityIcons name="thermometer" size={30} color="#fff" />
                    <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                        {props.value + ' ' + props.type}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}




export default LongCard