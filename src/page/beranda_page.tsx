import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';
import stylesGlobal from "../utils/global_style";
import Beranda from "../component/beranda";
import { isInternetConnect } from "../utils/check_internet";
import LostConection from "../component/lost_conection/lost_conection";
import Loading from "../component/loading/loading";


const BerandaPage = () => {
  const [isConnection, setConnection] = useState<number>(0)

  const [refreshing, setRefreshing] = React.useState(false);

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


  useEffect(() => {
    isInternetConnect({ setData: setConnection })
  }, [isConnection])

  return (
    <>

      {
        isConnection == 0 ? <Loading /> :
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
