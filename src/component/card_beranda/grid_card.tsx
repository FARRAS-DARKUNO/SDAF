import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import { DataContain } from "../../utils/interface";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { namePage } from "../../utils/namePage";

const GridCard = (props: DataContain) => {
    const navigate = useNavigation()

    return (

        <TouchableWithoutFeedback
            //@ts-ignore
            onPress={() => navigate.navigate(namePage.DETAIL_PAGE, { name: props.link, page: props.name })}
        >
            <View style={[styles.containerGrid, stylesGlobal.backroundSekunder]}>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header3]}>{props.name}</Text>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header2]}>
                    {props.value + ' ' + props.type}
                </Text>
            </View>
        </TouchableWithoutFeedback>

    )
}



export default GridCard