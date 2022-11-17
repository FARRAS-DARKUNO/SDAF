import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import LogoSFAD from "../component/image/image";
import stylesGlobal from "../utils/global_style";
import { isInternetConnect } from "../utils/check_internet";
import LostConection from "../component/lost_conection/lost_conection";

const SplashScreen = () => {

    const [isConnection, setConnection] = useState<number>(400)

    useEffect(()=>{
        isInternetConnect({setData:setConnection})
        console.log('yes',isConnection)
    },[])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />
            <LogoSFAD size={200} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
})

export default SplashScreen