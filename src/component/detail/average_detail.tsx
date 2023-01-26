import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from "react-native"
import stylesGlobal from "../../utils/global_style"
import ListAvarage from "../list_avarage/list_avarage"

const AverageDetail = ({ data }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={[stylesGlobal.colorPremier, stylesGlobal.header2, { marginBottom: 20 }]}>
                Rata Rata Perhari
            </Text>
            <View style={styles.lineText}>
                <ScrollView>
                    {
                        data.map((note: { date: any; value: any }) => (
                            <ListAvarage
                                date={note.date}
                                value={note.value.toFixed(3)}
                                key={note.date}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

interface Props {
    data: any
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