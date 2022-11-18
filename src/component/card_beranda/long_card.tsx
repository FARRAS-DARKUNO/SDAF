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

const LongCard = (props: DataContain) => {

    const navigate = useNavigation()

    return (
        <TouchableWithoutFeedback
            //@ts-ignore
            onPress={() => navigate.navigate(namePage.DETAIL_PAGE, { name: props.link })}
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