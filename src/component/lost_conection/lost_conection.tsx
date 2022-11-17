import React from "react";
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

const LostConection = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/lostConection.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image : {
        height : 170,
        width : 150,
    }
})

export default LostConection