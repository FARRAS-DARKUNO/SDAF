import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  Alert
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import Beranda from "../component/beranda";
import { isInternetConnect } from "../utils/check_internet";
import LostConection from "../component/lost_conection/lost_conection";
import Loading from "../component/loading/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getIdUser } from "../redux/action"
import axios from "axios";
import { getDataUserById } from "../utils/api";


const BerandaPage = () => {

  const dispatch = useDispatch()

  const { idUser } = useSelector(
    //@ts-ignore
    state => state.userReducer
  )

  const [isConnection, setConnection] = useState<number>(0)

  const [refreshing, setRefreshing] = useState(false);

  const [isLoading, setLoading] = useState<boolean>(true)

  const wait = (timeout: number) => {
    return new Promise((resolve: any) => {
      setTimeout(resolve, timeout)
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false)
      isInternetConnect({ setData: setConnection })
    });
  }, []);

  const checkUser = async () => {
    await AsyncStorage.getItem('id')
      .then(async response => {
        console.log(response)

        if (response != null) {

          if (idUser == '') {
            await axios.get(getDataUserById({ id: response }))
              .then(data => {
                console.log(data.data.data)
                dispatch(getUserName(data.data.data.name))
                dispatch(getIdUser(data.data.data.id))
                setLoading(false)
              })
          }
          else {
            setLoading(false)
          }
        }
        else {
          setLoading(false)
        }

      })
  }

  const isExit = () => {
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


  useEffect(() => {
    checkUser()

    isInternetConnect({ setData: setConnection })


    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      isExit
    )

    return () => {
      backHandler.remove()
    }

  }, [isConnection, isLoading])

  return (
    <>

      {
        isConnection == 0 || isLoading == true ? <Loading /> :
          <SafeAreaView style={[styles.container, stylesGlobal.backroundPremier]}>
            <ScrollView
              style={{ width: '100%', height: '100%' }}
              contentContainerStyle={styles.scrollView}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            >
              <StatusBar
                animated={true}
                backgroundColor={stylesGlobal.backroundPremier.backgroundColor}
              />
              {
                isConnection >= 200 && isConnection <= 300 ?

                  <View style={styles.concomponent}>
                    <Beranda.HeaderBeranda />
                    <Beranda.BodyBeranda />
                  </View> : <LostConection />
              }

            </ScrollView>
          </SafeAreaView>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  concomponent: {
    width: '100%',
    height: '100%',
    flexDirection: "column",
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BerandaPage
