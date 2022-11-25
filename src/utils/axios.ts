import axios from "axios";
import { ReactSetter } from "./interface";
import {registerApi, loginApi} from '../utils/api'
import { AlertStop, AlertNext } from "../component/alert/alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {getUserName, getIdUser} from '../redux/action'


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

export const postRegister = async ({email,instansi,name,password, setData, next} : Register) => {
    const data = registerApi()
    await axios.post(data, 
        {
            name : name,
            email: email,
            instansi : instansi,
            password : password
        }
    )
    .then(response => {
        console.log(response.data.data == 'email-already')
        if (response.data.data == 'email-already'){
            setData(false)
            AlertStop({
                title: 'Email Sudah Terpakai',
                massage: 'Periksa lagi email anda',
            })
        }
        else {
            setData(false)
            AlertNext({
                title : "Registrasi Berhasil",
                massage :"Berhasil melakukan registrasi",
                action : next
            })
        }

    })
} 

export const postLogin = async ({email, password, setData, next} : Login) => {
    
    const linkData = loginApi()

    await axios.post(linkData, {
        email : email,
        password : password
    })
    .then( async response => {
        console.log(response.data.data)
        await AsyncStorage.setItem('id', response.data.data.id)
        .then(() => {
                console.log(response.data.data.id)
                setData(false)
                AlertNext({
                    title : "Sukses",
                    massage :"Anda sudah masuk sebagai peneliti",
                    action : next
            })
            }
        )

    }).catch(err => {
        setData(false)
        AlertStop({
                title: 'Email Dan Password Salah',
                massage: 'Periksa kembali email dan password anda',
            })
    })
}

interface Props {
    data : string,
    setData: ReactSetter<any>,
    setLabel : ReactSetter<any>,
    setAfter : ReactSetter<boolean> 
}

interface Register {
    name : string,
    instansi : string,
    email : string,
    password : string,
    setData: ReactSetter<boolean>,
    next() : any 
}

interface Login {
    email : string,
    password : string,
    setData: ReactSetter<boolean>,
    next() : any
}