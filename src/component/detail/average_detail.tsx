import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from "react-native"
import stylesGlobal from "../../utils/global_style"
import ListAvarage from "../list_avarage/list_avarage"

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
                            <ListAvarage
                                date={note.date}
                                value={note.value}
                            />
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

})


export default AverageDetail