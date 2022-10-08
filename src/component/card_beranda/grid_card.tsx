import React from "react";
import {
    View,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import { DataContain } from "../../utils/interface";
import styles from "./styles";

const GridCard = (props: DataContain) => {
    return (
        <View style={[styles.containerGrid, stylesGlobal.backroundSekunder]}>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header3]}>{props.name}</Text>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header2]}>
                {props.value + ' ' + props.type}
            </Text>
        </View>
    )
}



export default GridCard