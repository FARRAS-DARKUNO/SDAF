import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import stylesGlobal from "../../utils/global_style"

const CardInformation = ({ email, name, prodi }: Props) => {
    return (
        <View style={[styles.container]}>
            <View style={[stylesGlobal.backroundPremier, styles.card]}>
                <Text style={[stylesGlobal.colorWhite, styles.textTitle]}>{name}</Text>
                <Text style={[stylesGlobal.subtitle, stylesGlobal.colorWhite]}>{email}</Text>
                <View style={stylesGlobal.enter20} />
                <Text style={[stylesGlobal.header3, stylesGlobal.colorWhite]}>{prodi}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    card: {
        height: 120,
        width: '100%',
        borderRadius: 20,
        padding: 10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 5,
    }


})

interface Props {
    name: string,
    email: string,
    prodi: string
}

export default CardInformation