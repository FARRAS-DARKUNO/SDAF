import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Geolocation from 'react-native-geolocation-service';
import CompassHeading from 'react-native-compass-heading';
import { useRoute } from "@react-navigation/native";
import { compass } from "../utils/compass";
import database from '@react-native-firebase/database';

const ArahAngin = () => {

    const navigate = useNavigation()

    const [compassHeader, setCompassHeader] = useState<number>(0)

    const [value, setValue] = useState<number>(0)

    const [arahAngin, setArahAngin] = useState<string>('')

    //@ts-ignore
    const page = useRoute().params.page


    async function requestPermissions() {
        if (Platform.OS === 'ios') {
            //@ts-ignore
            Geolocation.requestAuthorization();
            //@ts-ignore
            Geolocation.setRNConfiguration({
                skipPermissionRequests: false,
                authorizationLevel: 'whenInUse',
            });
        }

        if (Platform.OS === 'android') {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
    }

    database()
        .ref('/')
        .on('value', snapshot => {
            setValue(compass({ data: snapshot.val().angin.arah }))
            setArahAngin(snapshot.val().angin.arah)
        });


    useEffect(() => {
        // console.log(compass({ data: 'Selatan' }))
        requestPermissions().then(() => {
            const degree_update_rate = 3;

            CompassHeading.start(degree_update_rate, ({ heading, accuracy }) => {
                console.log('CompassHeading: ', heading, accuracy);
                setCompassHeader(heading)
            });
        })

        return () => {
            CompassHeading.stop();
        };

    }, [])


    return (
        <SafeAreaView style={[stylesGlobal.backroundWhite, styles.container]}>
            <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundWhite.backgroundColor}
            />

            <View style={styles.concomponent}>
                <TouchableOpacity style={styles.titleBack} onPress={() => navigate.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={20} color="#2F5664" />
                    <Text style={[stylesGlobal.header2, stylesGlobal.colorPremier]}>
                        {page}
                    </Text>
                </TouchableOpacity>
                <View style={styles.compass}>
                    <View />
                    <Image source={require('../assets/compass.png')} style={[
                        styles.image,
                        { transform: [{ rotate: `${(360 - compassHeader) - value}deg` }] },
                    ]} />
                    <Text style={[stylesGlobal.colorPremier, stylesGlobal.header1]}>
                        {arahAngin}
                    </Text>
                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
    },
    concomponent: {
        width: '100%',
        height: '100%',
        flexDirection: "column",
    },
    titleBack: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    compass: {
        height: '95%',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 100
    },
    image: {
        height: 270,
        width: 270
    }
})

export default ArahAngin
