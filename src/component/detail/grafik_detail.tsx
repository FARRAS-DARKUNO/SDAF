import {
    View,
    Dimensions,
    StyleSheet,
} from "react-native"
import { DataGrafik } from "../../utils/interface"
import {
    LineChart,
} from "react-native-chart-kit";


const GrafikDetail = (props: DataGrafik) => {

    const screenWidth = Dimensions.get("window").width - 20;

    const data = {
        labels: ["1", "2", "3", "4", '5', '6', '7'],
        datasets: [
            {
                data: [20.3, 45.2, 28.4, 40, 30, 20],
                color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 2 // optional
            }
        ],
    };

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth}
                height={250}
                verticalLabelRotation={30}
                chartConfig={{
                    backgroundGradientFromOpacity: 100,
                    backgroundGradientToOpacity: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false
                }}
                style={styles.char}
                bezier
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15,
    },
    char: {
        borderRadius: 10,
        backgroundColor: '#639AAF'
    }

})

export default GrafikDetail

