import {
    BackHandler,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation()

 export const isExit = () => {
    Alert.alert("Menutup Aplikasi", "Anda yakin ingin menutup aplikasi ?", [
        {
            text: "Tidak",
            onPress: () => null,
            style: "cancel"
        },
        {
            text: "Ya",
            onPress: () => BackHandler.exitApp()
        }
    ]);
    return true;
}

export const backPressHandler = () => {
    navigation.goBack()
    return true
}

export const backCheckExit  = () => BackHandler.addEventListener("hardwareBackPress", isExit)

export const backNormal = BackHandler.addEventListener("hardwareBackPress", backPressHandler)