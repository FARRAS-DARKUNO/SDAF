import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    suhuCuaca: {
        flexDirection: 'row',
    },

    containerLong: {
        height: 100,
        width: '100%',
        borderRadius: 30,
        justifyContent: "space-between",
        padding: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 10,
    },
    containerGrid: {
        height: 100,
        width: '49%',
        justifyContent: "space-between",
        paddingVertical: 25,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 5,
    }
})

export default styles