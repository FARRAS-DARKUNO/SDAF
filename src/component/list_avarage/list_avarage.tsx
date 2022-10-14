import {
    View,
    StyleSheet,
    Text,
} from "react-native"
import { DataAvarage } from "../../utils/interface"
import stylesGlobal from "../../utils/global_style"

const ListAvarage = (props: DataAvarage) => {
    return (
        <View style={styles.dataAvarage}>
            <View>

                <Text style={[stylesGlobal.header3, stylesGlobal.colorPremier]}>
                    {props.date}
                </Text>
            </View>
            <View style={[styles.valueAvarage, stylesGlobal.backroundPremier]}>
                <Text style={[stylesGlobal.header3, stylesGlobal.colorWhite, { paddingHorizontal: 10 }]}>
                    {props.value}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataAvarage: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    valueAvarage: {
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default ListAvarage