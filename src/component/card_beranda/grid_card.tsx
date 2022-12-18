import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const GridCard = (props: DataContain) => {

    const [value, setValue] = useState<any>(props.value)

    const { idUser } = useSelector(
        //@ts-ignore
        state => state.userReducer
    )

    const navigate = useNavigation()

    const checkerNavigate = () => {
        if (idUser != '' && props.link != 'arah-angins') {
            //@ts-ignore
            navigate.navigate(namePage.DETAIL_PAGE, { name: props.link, page: props.name })
        }
        if (idUser != '' && props.link == 'arah-angins') {
            //@ts-ignore
            navigate.navigate(namePage.ARAH_ANGIN, { name: props.link, page: props.name })
        }
    }

    const convertToFix = () => {
        if (typeof (props.value) == "number") {
            setValue(props.value.toFixed(2))
        }
        else {
            setValue(props.value)
        }
    }
    useEffect(() => {
        convertToFix()
    })

    return (

        <TouchableWithoutFeedback
            //@ts-ignore
            onPress={() => checkerNavigate()}
        >
            <View style={[styles.containerGrid, stylesGlobal.backroundSekunder]}>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header3]}>{props.name}</Text>
                <Text style={[stylesGlobal.colorWhite, stylesGlobal.header2]}>
                    {value + ' ' + props.type}
                </Text>
            </View>
        </TouchableWithoutFeedback>

    )
}



export default GridCard