import axios from "axios";
import { ReactSetter } from "./interface";

export const getDataGrafik = async ({data, setData, setLabel, setAfter}: Props) => {
    await axios.get(data)
    .then(respons => {
        let length = respons.data.data.length
        for (let i = 0; i < length; i++){
            setLabel((oldArray: any) => [ ...oldArray, (respons.data.data[i].index + 1 + '')])
            setData ((oldArry : any) => [ ...oldArry, (respons.data.data[i].value + 0)])
        }
        setAfter(true)
    })
}

export const getDataAverage = async ({data, setData, setAfter}: Props) => {
    await axios.get(data)
    .then(response => {
        setData(response.data.data)
        setAfter(false)
    })
}


interface Props {
    data : string
    setData: ReactSetter<any>,
    setLabel : ReactSetter<any> 
    setAfter : ReactSetter<boolean> 
}