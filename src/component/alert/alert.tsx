import { Alert } from "react-native";

export const AlertShow = ({ action, title, massage }: Props) => {
    Alert.alert(
        title,
        massage,
        [
            {
                text: "Tidak",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Iya", onPress: () => action() }
        ]
    );
}

export const AlertNext = ({ action, title, massage }: Props) => {
    Alert.alert(
        title,
        massage,
        [
            { text: "Selanjutnya", onPress: () => action() }
        ]
    );
}

export const AlertStop = ({ title, massage }: JustProps) => {
    Alert.alert(
        title,
        massage,
        [
            { text: "Lengkapi", onPress: () => null }
        ]
    );
}

interface Props {
    action(): any,
    title: string,
    massage: string,
}

interface JustProps {
    title: string,
    massage: string,
}

