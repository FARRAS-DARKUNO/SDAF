import React from "react";
import {
    Image
} from 'react-native';
import { SizeImage } from "../../utils/interface";

const LogoSFAD = (props: SizeImage) => {
    return (
        <Image source={require('../../assets/logo.png')} style={{ height: props.size, width: props.size }} />
    )
}
export default LogoSFAD