import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from "react-native"
import stylesGlobal from "../../utils/global_style"

const dataAvarage = [
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76777',
    },
    {
        date: '27-07-2001',
        value: '27.70747',
    },
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76777',
    },
    {
        date: '27-07-2001',
        value: '27.70747',
    },
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76747',
    },
    {
        date: '27-07-2001',
        value: '27.76777',
    },
    {
        date: '27-07-2001',
        value: '27.70747',
    },
]

const AverageDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={[stylesGlobal.colorPremier, stylesGlobal.header2, { marginBottom: 20 }]}>
                Rata Rata Perhari
            </Text>
            <View style={styles.lineText}>
                <ScrollView>
                    {
                        dataAvarage.map((note) => (

                            <>

                                <View style={styles.dataAvarage}>
                                    <View>

                                        <Text style={[stylesGlobal.header3, stylesGlobal.colorPremier]}>
                                            {note.date}
                                        </Text>
                                    </View>
                                    <View style={[styles.valueAvarage, stylesGlobal.backroundPremier]}>
                                        <Text style={[stylesGlobal.header3, stylesGlobal.colorWhite, { paddingHorizontal: 10 }]}>
                                            {note.value}
                                        </Text>
                                    </View>
                                </View>
                            </>

                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    lineText: {
        height: '63%',
        width: '100%'
    },
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


export default AverageDetail