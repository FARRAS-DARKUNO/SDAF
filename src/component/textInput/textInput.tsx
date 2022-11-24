import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { ReactSetter } from "../../utils/interface"
import stylesGlobal from '../../utils/global_style';

const TextInputData = ({
    setData,
    data,
    placeholder,
    title,
}: Props) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.marginContainer}>
                <Text style={[stylesGlobal.colorPremier, stylesGlobal.header3]}>{title}</Text>
                <View style={stylesGlobal.enter10} />
                <TextInput
                    style={styles.input}
                    onChangeText={data => setData(data)}
                    value={data}
                    placeholder={placeholder}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

type Props = {
    setData: ReactSetter<string>,
    data: string,
    placeholder: string,
    title: string
}

const styles = StyleSheet.create({
    marginContainer: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    imageStyle: {
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 30,
    },
    input: {
        height: 40,
        borderWidth: 0,
        backgroundColor: '#C7DEE8',
        padding: 10,
        borderRadius: 10
    },
})

export default TextInputData