import React from "react";
import {
    View,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";

const StatusBody = () => {
    return (

        <View >
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                AMAN
            </Text>
        </View>

    )
}

export default StatusBody