import React, { useState } from "react";
import {
    View,
    Text,
} from 'react-native';
import stylesGlobal from "../../utils/global_style";
import database from '@react-native-firebase/database';
import { indicator } from "../../utils/indicator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusBody = () => {
    const [circumstances, setcircumstances] = useState<string>('')


    database()
        .ref('/')
        .on('value', snapshot => {
            setcircumstances(snapshot.val().laut.keamanan_lvl)
        });

    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[stylesGlobal.colorWhite, stylesGlobal.header1]}>
                {circumstances}
            </Text>
            <View style={stylesGlobal.enter10} />
        </View>

    )
}

export default StatusBody